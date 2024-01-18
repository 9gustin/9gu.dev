import { propType } from "@/types/article";

export const validatePage = (page: any) =>
  page.visible && new Date(page.release_date) <= new Date();

const wantedProps = [
  "public_title",
  "description",
  "release_date",
  "keywords",
  "visible",
  "Tags",
];

export const getPageProps = (page?: any) => {
  if (!page) return;

  const data: any = {
    title: page.properties.Name.title[0].plain_text,
  };

  if (page.cover?.[page.cover.type]) {
    data.image = page.cover[page.cover.type].url;
  }

  wantedProps.forEach((prop) => {
    const propName = page.properties[prop]?.type;
    if (propName) {
      const value =
        propName === propType.CHECKBOX
          ? page.properties?.[prop][propName]
          : propName === propType.MULTI
          ? page.properties?.[prop][propName]
          : page.properties?.[prop][propName]?.[0]?.plain_text;
      if (value) {
        data[prop] = value;
      }
    }
  });

  data.title = data.public_title ?? data.title;
  data.publishedAt = data.release_date;
  data.id = page.id;

  return data;
};

export const getNextReleaseDate = (posts: any) => {
  const withReleaseDate: any = posts.filter(
    ({ release_date, visible }: any) =>
      visible && new Date(release_date) > new Date()
  );

  const nextRelease =
    (
      withReleaseDate.sort(function (postA: any, postB: any) {
        return (
          new Date(
            (postA as any).release_date ?? (postA as any).last_edited_time
          ).getTime() -
          new Date(
            (postB as any).release_date ?? (postB as any).last_edited_time
          ).getTime()
        );
      })?.[0] as any
    )?.release_date ?? null;

  return nextRelease;
};
