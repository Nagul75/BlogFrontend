import { type TruncatedPost } from "@/types/PostTypes";
import PostCard from "./PostCard";

const Post = ({ title, content, id, date_published }: TruncatedPost) => {
  return (
    <div
      className="flex w-[80%] border-l-6 dark:border-l-[#6E533B] border-l-[#C5A37E] justify-between relative"
      key={id}
    >
      <div className="flex items-center h-full absolute top-1/2 -translate-y-1/2 left-0">
        <p className="w-26 flex justify-center relative z-10 -translate-x-1/2 px-1 py-2 rounded-md dark:bg-neutral-800 text-sm dark:text-neutral-200 bg-neutral-200 border-4 border-[hsl(0_0%_75%)] dark:border-[hsl(0_0%_18%)] dark:border-4 ">
          {date_published}
        </p>
      </div>
      <div className="w-full pl-72 mt-10" key={id}>
        <PostCard title={title} content={content} />
      </div>
    </div>
  );
};

export default Post;
