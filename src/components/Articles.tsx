import { ArticleCard, Tags } from "./ArticleCard";
import { getDatabase } from "@/services/notion";
import {
  getNextReleaseDate,
  getPageProps,
  validatePage,
} from "@/utils/article";
import { ClientDateHelper } from "./DateHelper";
import { Tag } from "@/types/article";
import { Notes } from "./Notes";

export const Articles = async () => {
  const db = await getDatabase();
  if (!db) return null;

  const posts = db.map(getPageProps);
  const nextRelease = getNextReleaseDate(posts);

  const visiblePosts = posts.filter((post) => validatePage(post, false));
  const visibleTags = visiblePosts
    .flatMap((post) => post.Tags)
    .filter(
      (tag, index, tags) => tags.findIndex((t) => t.id === tag.id) === index
    );

  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-4">
      <h2 className="text-xl font-semibold text-center border-b-2 border-indigo-100">
        9gu notes ({visiblePosts.length})
      </h2>
      <Notes
        tags={visibleTags}
        notes={visiblePosts}
        nextRelease={nextRelease}
      />
    </section>
  );
};
