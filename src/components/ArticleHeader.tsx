import { USER_CONFIG } from "@/config/user";
import { ClientDateHelper } from "./DateHelper";
import { Tags } from "./ArticleCard";

export default async function ArticleHeader({ pageWithProps }: any) {
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
      <h2 className="text-xs text-gray-500 tracking-widest title-font mb-1 uppercase font-medium flex items-center gap-2">
        {USER_CONFIG.title}(@{USER_CONFIG.username}) -{" "}
        <ClientDateHelper date={pageWithProps.publishedAt} />
        {pageWithProps.Tags && <Tags tags={pageWithProps.Tags} />}
      </h2>
    </>
  );
}
