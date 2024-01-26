import { USER_CONFIG } from "@/config/user";
import { getPage } from "@/services/notion";
import { getPageProps, validatePage } from "@/utils/article";
import { ClientDateHelper } from "./DateHelper";

export default async function ArticleHeader({ id }: { id: string }) {
  const page: any = await getPage(id);

  const pageWithProps = getPageProps(page);

  if (!pageWithProps || !validatePage(pageWithProps)) return null;

  return (
    <>
      <img
        src={pageWithProps.image}
        alt={pageWithProps.title}
        className="w-full h-40 md:h-80 object-cover object-center rounded-lg"
      />
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2text-gray-900 ">
        {pageWithProps.title}
      </h1>
      <h2 className="text-xs text-gray-500 tracking-widest title-font mb-1 uppercase font-medium">
        {USER_CONFIG.title}(@{USER_CONFIG.username}) -{" "}
        <ClientDateHelper date={pageWithProps.publishedAt} />
      </h2>
    </>
  );
}
