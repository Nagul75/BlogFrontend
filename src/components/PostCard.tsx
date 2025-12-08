import { StickyNote } from "lucide-react";
import Markdown from "react-markdown";

const PostCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex flex-col h-72 w-3xl dark:border-neutral-800 border border-neutral-400 border-l-8 dark:border-l-[#6E533B] border-l-[#C5A37E] rounded-md bg-stone-200 dark:bg-stone-900 shadow-xl dark:shadow-md dark:shadow-neutral-800">
      <div className="flex justify-start px-4 p-2 gap-4 border-b border-b-neutral-400 dark:border-b-neutral-800 shrink-0">
        <StickyNote />
        <h1 className="text-lg">{title}</h1>
      </div>
      <div className="text-justify p-4 dark:text-neutral-400 text-neutral-800 dark:bg-linear-to-r dark:from-neutral-900 dark:to-[hsl(0_0%_10%)] bg-linear-to-r from-neutral-100 to-neutral-300 rounded-b-md grow">
        <p className="content-truncate-lines">
          <Markdown>{content}</Markdown>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
