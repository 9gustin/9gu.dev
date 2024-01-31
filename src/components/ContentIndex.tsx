"use client";
import {
  blockEnum,
  indexGenerator,
  rnrSlugify,
} from "@9gustin/react-notion-render";
import React, { useEffect, useState } from "react";

const MIN_SCROLL_VALUE = 30;

export function ContentIndex({ pageData }: any) {
  const index = React.useMemo(() => {
    if (pageData) {
      const index = indexGenerator(pageData);

      if (index.length > 0) {
        return index.filter((item) => item.type === blockEnum.HEADING2);
      }
    }

    return [];
  }, [pageData]);

  if (index.length === 0) {
    return null;
  }

  return (
    <aside className="fixed bottom-24 right-4 w-44 hidden lg:flex">
      <ul className=" border-l-indigo-200 border-l-2 pl-2 flex flex-col gap-2">
        {index.map(({ id, plainText, type }) => (
          <li key={id} className={type}>
            <a
              href={`#${rnrSlugify(plainText)}`}
              className="hover:text-indigo-500 hover:underline"
            >
              {plainText}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
