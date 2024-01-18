import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fromNow } from "@/utils/date";
import { Article } from "@/types/article";

export const ArticleCard = ({
  id,
  title,
  description,
  publishedAt,
  url,
}: Article) => {
  return (
    <li className="flex flex-col w-full h-full gap-4">
      <Link href={`/blog/${id}`}>
        <Card className=" border-indigo-50">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <span className="text-sm text-gray-500 font-light">
              {fromNow(publishedAt)}
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
