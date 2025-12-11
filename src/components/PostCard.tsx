import { StickyNote } from "lucide-react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

const PostCard = ({
  title,
  content,
  slug,
}: {
  title: string;
  content: string;
  slug: string;
}) => {
  const path = "/posts/" + slug;
  return (
    <Link to={path}>
      <div className="flex flex-col h-72 w-3xl hover:cursor-pointer transistion-all duration-300 ease-in-out dark:border-neutral-800 dark:border-2 border border-neutral-400 hover:border-l-8 hover:dark:border-l-8 dark:border-l-2 hover:dark:border-l-[#6E533B] hover:border-l-[#C5A37E] rounded-md bg-stone-200 dark:bg-stone-900 shadow-xl dark:shadow-md dark:shadow-neutral-800">
        <div className="flex justify-start px-4 p-2 gap-4 border-b border-b-neutral-400 dark:border-b-neutral-800 shrink-0">
          <StickyNote />
          <h1 className="text-2xl dark:text-neutral-300 text-netural-600">
            {title}
          </h1>
        </div>
        <div className="text-justify p-4 dark:text-neutral-400 text-neutral-800 dark:bg-neutral-800 bg-neutral-100 rounded-b-md grow">
          <div className="content-truncate-lines">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
