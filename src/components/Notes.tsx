"use client";
import { Article, Tag } from "@/types/article";
import { ArticleCard, Tags } from "./ArticleCard";
import { ClientDateHelper } from "./DateHelper";
import { useState } from "react";

export const Notes = ({
  tags,
  notes,
  nextRelease,
}: {
  tags: Tag[];
  notes: Article[];
  nextRelease: {
    public_title: string;
    release_date: string;
  };
}) => {
  const [selectedData, setSelectedData] = useState({
    selectedTags: [] as string[],
    selectedPosts: notes,
  });

  const handleClickTag = (tagId: string) => {
    const selectedTags = selectedData.selectedTags.includes(tagId)
      ? selectedData.selectedTags.filter((t) => t !== tagId)
      : [...selectedData.selectedTags, tagId];

    const selectedPosts = selectedTags.length
      ? notes.filter((post) =>
          post.Tags?.some((tag) => selectedTags.includes(tag.id))
        )
      : notes;

    setSelectedData({ selectedTags, selectedPosts });
  };

  return (
    <>
      <div className="flex flex-wrap flex-row items-center justify-center w-full h-full gap-4">
        <Tags
          tags={tags}
          handleClickTag={handleClickTag}
          selectedIds={selectedData.selectedTags}
        />
      </div>

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
        {selectedData.selectedPosts.map((props) => (
          <ArticleCard key={props.title} {...props} />
        ))}
      </ul>
    </>
  );
};
