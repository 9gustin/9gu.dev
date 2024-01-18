import { getBlocks, getPage } from "@/services/notion";
import { getPageProps, validatePage } from "@/utils/article";
import { Render } from "@9gustin/react-notion-render";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import "@9gustin/react-notion-render/dist/index.css";

export default async function Article({ params }) {
  if (!params?.id) return null;
  const page: any = await getPage(params.id);
  const blocks = await getBlocks(params.id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => "has_children" in block && block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );

  const blocksWithChildren = blocks.map((block: any) => {
    if (
      "has_children" in block &&
      block.has_children &&
      !block[block.type].children
    ) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  page.blocks = blocksWithChildren;
  const pageWithProps = getPageProps(page);

  if (!pageWithProps || !validatePage(pageWithProps)) return null;

  return (
    <article className="w-full flex flex-col gap-4 pt-4">
      <img
        src={pageWithProps.image}
        alt={pageWithProps.title}
        className=" w-full h-40 object-cover object-center rounded-lg"
      />
      <h1 className=" sm:text-3xl text-2xl font-medium title-font mb-2text-gray-900 ">
        {pageWithProps.title}
      </h1>
      <Render blocks={page.blocks} useStyles classNames />

      <Link href="/" className="flex items-center text-indigo-600 ">
        <IconChevronLeft /> Volver atras
      </Link>
    </article>
  );
}
