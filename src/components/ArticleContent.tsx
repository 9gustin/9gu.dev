import { getBlocks } from "@/services/notion";
import { ContentIndex } from "./ContentIndex";
import { ClientContent } from "./ClientContent";

export default async function ArticleContent({ id }: { id: string }) {
  const blocks = await getBlocks(id);

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

  return (
    <>
      <ClientContent blocks={blocksWithChildren} />
      <ContentIndex pageData={blocksWithChildren} />
    </>
  );
}
