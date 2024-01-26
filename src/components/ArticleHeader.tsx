import { getPage } from "@/services/notion";
import { getPageProps, validatePage } from "@/utils/article";

export default async function ArticleHeader({ id }: { id: string }) {
  const page: any = await getPage(id);

  const pageWithProps = getPageProps(page);

  if (!pageWithProps || !validatePage(pageWithProps)) return null;

  return (
    <>
      <img
        src={pageWithProps.image}
        alt={pageWithProps.title}
        className=" w-full h-40 object-cover object-center rounded-lg"
      />
      <h1 className=" sm:text-3xl text-2xl font-medium title-font mb-2text-gray-900 ">
        {pageWithProps.title}
      </h1>
    </>
  );
}
