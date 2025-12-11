import { z } from "zod";

export const commentSchema = z.object({
  authorName: z.string().min(1, "Name required!"),
  content: z.string().min(1, "Comment can't be empty!"),
});

export type commentForm = z.infer<typeof commentSchema>;

export interface CompleteComment {
  id: string;
  content: string;
  authorName: string;
  scoreCount: number;
  createdAt: string;
  updatedAt: string;
  postId: string;
  authorId: string;
}
