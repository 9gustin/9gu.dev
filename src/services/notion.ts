import { Client } from "@notionhq/client";

const databaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async () => {
  if (!databaseId) {
    throw new Error("Database not found");
  }
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getDBInfo = async () => {
  if (!databaseId) {
    throw new Error("Database not found");
  }
  const databaseData: any = await notion.databases.retrieve({
    database_id: databaseId,
  });

  const dbObj = {
    tags:
      "multi_select" in databaseData.properties.Tags
        ? databaseData.properties.Tags.multi_select.options
        : [],
    title: "title" in databaseData ? databaseData.title[0].plain_text : null,
    description:
      "description" in databaseData
        ? databaseData.description[0].plain_text
        : null,
    emoji:
      "icon" in databaseData &&
      databaseData.icon &&
      "emoji" in databaseData.icon
        ? databaseData.icon?.emoji
        : null,
    image: databaseData.icon[databaseData.icon.type].url,
    cover: databaseData.cover[databaseData.cover.type]?.url,
  };
  return dbObj;
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  return response.results;
};
