import { ArticleCard } from "./ArticleCard";
import { getDatabase } from "@/services/notion";
import {
  getNextReleaseDate,
  getPageProps,
  validatePage,
} from "@/utils/article";
import { toNow } from "@/utils/date";

export const Articles = async () => {
  const db = await getDatabase();
  if (!db) return null;

  const posts = db.map(getPageProps);
  const nextRelease = getNextReleaseDate(posts);

  const visiblePosts = posts.filter(validatePage);

  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-4">
      <h2 className="text-xl font-semibold text-center border-b-2 border-indigo-100">
        Publicaciones
      </h2>
      <p className="text-sm text-center text-gray-500">
        {nextRelease && `Próxima publicación: ${toNow(nextRelease)}`}
      </p>
      <ul className="flex flex-col items-center justify-center w-full h-full gap-4">
        {visiblePosts.map((props) => (
          <ArticleCard key={props.title} {...props} />
        ))}
      </ul>
    </section>
  );
};
