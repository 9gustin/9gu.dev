import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import "@9gustin/react-notion-render/dist/index.css";
import ArticleContent from "@/components/ArticleContent";
import ArticleHeader from "@/components/ArticleHeader";
import { Suspense } from "react";
import { Loader } from "@/components/Loader";
import { USER_CONFIG } from "@/config/user";
import { Metadata } from "next";
import { getPage } from "@/services/notion";
import { getPageProps, validatePage } from "@/utils/article";
import { cn } from "@/lib/utils";

export default async function Article({ params }: any) {
  if (!params?.id) return null;

  const page: any = await getPage(params.id);

  const pageWithProps = getPageProps(page);

  if (!pageWithProps || !validatePage(pageWithProps, true)) return null;

  return (
    <article
      className={cn(
        "w-full flex flex-col gap-4 pt-4",
        pageWithProps.preview && "bg-yellow-50 p-4 rounded-md"
      )}
    >
      <Suspense
        fallback={
          <div className="flex w-full justify-center">
            <Loader />
          </div>
        }
      >
        {pageWithProps.preview && (
          <div className=" bg-yellow-200 text-yellow-900 p-4 rounded-md">
            Esta es una vista previa, el contenido puede cambiar
          </div>
        )}
        <ArticleHeader pageWithProps={pageWithProps} />
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

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // read route params
  const id = params.id;

  const page: any = await getPage(id);
  const pageWithProps = getPageProps(page);

  return {
    title: `${pageWithProps.title} | ${USER_CONFIG.complementHTMLTitle}`,
    metadataBase: new URL("https://9gu.dev"),
    openGraph: {
      title: `${pageWithProps.title} | ${USER_CONFIG.complementHTMLTitle}`,
      description: pageWithProps.description,
      url: `https://9gu.dev/notes/${id}`,
      siteName: "9gu.dev",
      images: [
        {
          url: pageWithProps.image,
          width: 800,
          height: 600,
        },
      ],
      locale: "es_AR",
      type: "website",
    },
  };
}
