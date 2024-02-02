import { ArticleCard } from "./ArticleCard";
import { getDatabase } from "@/services/notion";
import {
  getNextReleaseDate,
  getPageProps,
  validatePage,
} from "@/utils/article";
import { ClientDateHelper } from "./DateHelper";

export const Articles = async () => {
  const db = await getDatabase();
  if (!db) return null;

  const posts = db.map(getPageProps);
  const nextRelease = getNextReleaseDate(posts);

  const visiblePosts = posts.filter((post) => validatePage(post, false));

  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-4">
      <h2 className="text-xl font-semibold text-center border-b-2 border-indigo-100">
        9gu notes ({visiblePosts.length})
      </h2>

      {nextRelease &&
        (nextRelease.public_title ? (
          <ArticleCard
            nextRelease
            key={nextRelease.public_title}
            title={nextRelease.public_title}
            publishedAt={nextRelease.release_date}
          />
        ) : (
          <p className="text-sm text-center text-gray-500">
            {`Próxima publicación: `}
            <ClientDateHelper date={nextRelease?.release_date} />
          </p>
        ))}
      <ul className="flex flex-col items-center justify-center w-full h-full gap-4">
        {visiblePosts.map((props) => (
          <ArticleCard key={props.title} {...props} />
        ))}
      </ul>
    </section>
  );
};
