import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ItemMedia,
  ItemActions,
} from "./ui/item";
import { Button } from "./ui/button";
import { CircleUserRound, ThumbsUp, ThumbsDown } from "lucide-react";

import apiClient from "@/utils/apiClient";
import axios from "axios";
import { useState } from "react";

const Comment = ({
  authorName,
  scoreCount,
  content,
  createdAt,
  slug,
  commentid,
}: {
  authorName: string;
  scoreCount: number;
  content: string;
  createdAt: string;
  slug: string;
  commentid: string;
}) => {
  const [score, setScore] = useState<number>(scoreCount);

  const handleUpdateScore = async (direction: number) => {
    setScore((s) => s + direction);
    try {
      await apiClient.put(`posts/${slug}/comments/${commentid}`, {
        direction: direction,
      });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="w-full">
      <Item
        className="w-full h-fit border-x-0 border-t-0 border-b-neutral-400 dark:border-b-neutral-600"
        variant="outline"
        key={commentid}
      >
        <ItemMedia>
          <CircleUserRound size={32} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            {authorName} - {createdAt}
          </ItemTitle>
          <ItemDescription className="whitespace-normal wrap-break-words line-clamp-none text-neutral-700 dark:text-neutral-400">
            {content}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            variant="secondary"
            className="dark:bg-neutral-900 hover:dark:bg-neutral-700 bg-neutral-300"
            onClick={() => {
              handleUpdateScore(1);
            }}
          >
            <ThumbsUp />
          </Button>
          <p>{score}</p>
          <Button
            variant="secondary"
            className="dark:bg-neutral-900 hover:dark:bg-neutral-700 bg-neutral-300"
            onClick={() => {
              handleUpdateScore(-1);
            }}
          >
            <ThumbsDown />
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
};

export default Comment;
