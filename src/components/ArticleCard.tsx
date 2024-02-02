import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Article, Tag, borderColor, colorToClass } from "@/types/article";
import { ClientDateHelper } from "./DateHelper";
import { cn } from "@/lib/utils";

export const Tags = ({
  tags,
  selectedIds,
  handleClickTag,
}: {
  tags: Tag[];
  selectedIds?: string[];
  handleClickTag?: (id: string) => void;
}) => {
  return (
    <>
      {tags?.map(({ id, name, color }) => (
        <button
          type="button"
          key={id}
          onClick={() => handleClickTag?.(id)}
          className={cn(
            "text-xs font-semibold px-2 py-1 rounded-full border-2 border-neutral-200",
            colorToClass[color] || "text-gray-500 bg-gray-100",
            handleClickTag && "cursor-pointer",
            selectedIds?.includes(id) && borderColor[color]
          )}
        >
          {name}
        </button>
      ))}
    </>
  );
};

export const ArticleCard = ({
  id,
  title,
  description,
  publishedAt,
  nextRelease,
  Tags: tags,
}: Article) => {
  console.log("ArticleCard", { tags });
  if (nextRelease) {
    return (
      <Card className="bg-neutral-200 w-full">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <CardTitle>{title}</CardTitle>
            <span className="text-sm text-gray-500 font-light">
              <ClientDateHelper date={publishedAt} from /> (🐹✋ hol up, let him
              cook)
            </span>
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <li className="flex flex-col w-full h-full gap-4">
      <Link href={`/notes/${id}`}>
        <Card className=" border-indigo-50">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <span className="text-sm text-gray-500 font-light flex gap-2 flex-wrap">
              <ClientDateHelper date={publishedAt} from />
              {tags && <Tags tags={tags} />}
            </span>
            <CardDescription className="line-clamp-3">
              {description}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </li>
  );
};
