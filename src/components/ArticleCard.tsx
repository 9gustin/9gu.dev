import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fromNow } from "@/utils/date";
import { Article } from "@/types/article";
import { ClientDateHelper } from "./DateHelper";

export const ArticleCard = ({
  id,
  title,
  description,
  publishedAt,
  nextRelease,
}: Article) => {
  console.log("ArticleCard", id, title, description, publishedAt, nextRelease);
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
            <span className="text-sm text-gray-500 font-light">
              <ClientDateHelper date={publishedAt} from />
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
