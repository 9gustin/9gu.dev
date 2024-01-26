import { Render } from "@9gustin/react-notion-render";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import "@9gustin/react-notion-render/dist/index.css";
import ArticleContent from "@/components/ArticleContent";
import ArticleHeader from "@/components/ArticleHeader";
import { Suspense } from "react";
import { Loader } from "@/components/Loader";
import { USER_CONFIG } from "@/config/user";

export default async function Article({ params }: any) {
  if (!params?.id) return null;

  return (
    <article className="w-full flex flex-col gap-4 pt-4">
      <Suspense
        fallback={
          <div className="flex w-full justify-center">
            <Loader />
          </div>
        }
      >
        <ArticleHeader id={params.id} />
        <Suspense
          fallback={
            <div className="flex w-full justify-center">
              <Loader />
            </div>
          }
        >
          <ArticleContent id={params.id} />
        </Suspense>
      </Suspense>
      <Link href="/" className="flex items-center text-indigo-600 ">
        <IconChevronLeft /> Volver atras
      </Link>
    </article>
  );
}
