import { USER_CONFIG } from "@/config/user";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 flex justify-center w-full h-20 border-t px-12 border-indigo-100">
      <div className="w-full max-w-screen-md flex items-center justify-between">
        <Link
          href="/"
          className="
        text-2xl
        font-semibold
      text-indigo-800
      hover:text-indigo-900
        transition-colors
        duration-200
      "
        >
          9gu.dev
        </Link>
        <ul className="flex items-center h-min-content gap-6">
          {USER_CONFIG.links?.map(({ url, icon: Icon, name }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-min"
              >
                <Icon
                  className="
            w-6
            h-6
             text-indigo-600
            hover:text-indigo-700
            transition-colors
            duration-200
          "
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
