import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type CompletePost } from "@/types/PostTypes";
import apiClient from "@/utils/apiClient";
import { Spinner } from "@/components/ui/spinner";
import Markdown from "react-markdown";
import axios from "axios";
import { Button } from "@/components/ui/button";
import type { CompleteComment } from "@/types/CommentTypes";
import CommentForm from "@/components/CommentForm";
import convertUTCtoReadable from "@/utils/convertDate";
import Comment from "@/components/Comment";
import PostCard from "@/components/PostCard";
import { LucideMessageCircleOff } from "lucide-react";
import { Item, ItemMedia, ItemTitle } from "@/components/ui/item";

type RouteParams = {
  slug: string;
};

const PostPage = () => {
  const { slug } = useParams<RouteParams>();
  const [post, setPost] = useState<CompletePost | null>(null);
  const [posts, setPosts] = useState<CompletePost[] | null>(null);
  const [comments, setComments] = useState<CompleteComment[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showComments, setShowComments] = useState<boolean>(false);

  const handleToggleComment = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setLoading(false);
        setError("Post Not Found");
        return;
      }

      try {
        setLoading(true);
        const response = await apiClient.get<CompletePost>(`/posts/${slug}`);

        if (response.status == 200) {
          setPost(response.data);
        }
      } catch (err: unknown) {
        console.log(err);
        if (axios.isAxiosError(err)) {
          console.log(err.response?.data);
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    const fetchComments = async () => {
      if (showComments) {
        try {
          const response = await apiClient.get<CompleteComment[]>(
            `posts/${slug}/comments`,
          );
          if (response.status == 200) {
            console.log(response.data);
            setComments(response.data);
          }
        } catch (err: unknown) {
          if (axios.isAxiosError(err)) {
            console.log(err.response?.data);
          }
        }
      }
    };

    fetchComments();
  }, [showComments, slug]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!showComments) return;
      if (showComments) {
        try {
          const response = await apiClient.get<CompletePost[]>(`/posts/`);
          if (response.status == 200) {
            if (response.data.length > 0) {
              const filteredPosts = response.data
                .filter((post) => post.slug !== slug)
                .slice(0, 2);

              setPosts(filteredPosts);
            }
          }
        } catch (err: unknown) {
          if (axios.isAxiosError(err)) {
            console.log(err.response?.data);
          }
        }
      }
    };

    fetchPosts();
  }, [showComments, slug]);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 items-center min-h-screen mt-64">
        <Spinner className="size-8" />
        <h1 className="text-2xl">Fetching post...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 items-center min-h-screen mt-64">
        <h1 className="text-2xl">{error}</h1>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col gap-4 items-center min-h-screen mt-64">
        <h1 className="text-2xl">Post not found.</h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-screen pb-10">
      <div className="h-full flex flex-col pt-10 gap-6">
        <div className="flex justify-center pb-4">
          <h1 className="text-4xl px-4 text-left font-extrabold">
            {post?.title}
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="prose dark:prose-invert max-w-none w-[70%] mb-5">
            {post && <Markdown>{post.content}</Markdown>}
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        {showComments ? (
          <Button
            className="w-lg bg-neutral-200 dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-200 shadow-md text-black hover:bg-neutral-200 hover:text-black hover:cursor-pointer"
            onClick={handleToggleComment}
          >
            Hide Comments
          </Button>
        ) : (
          <Button
            className="w-lg bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 text-black border-neutral-400 hover:bg-neutral-200 hover:text-black hover:cursor-pointer"
            onClick={handleToggleComment}
          >
            Show Comments
          </Button>
        )}
      </div>

      {showComments && slug && (
        <div className="w-full grid grid-cols-[600px_auto] gap-15">
          <div className="w-full flex flex-col gap-6">
            <CommentForm slug={slug} />
            {comments && comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id}>
                  <Comment
                    authorName={comment.authorName}
                    content={comment.content}
                    scoreCount={comment.scoreCount}
                    createdAt={convertUTCtoReadable(comment.createdAt)}
                    slug={slug}
                    commentid={comment.id}
                  />
                </div>
              ))
            ) : (
              <Item
                className="bg-neutral-200 dark:bg-neutral-800"
                variant="muted"
              >
                <ItemMedia>
                  <LucideMessageCircleOff />
                </ItemMedia>
                <ItemTitle>
                  Be the first to participate in the discussion!
                </ItemTitle>
              </Item>
            )}
          </div>
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl">Suggestions</h1>
            {posts &&
              posts.map((post) => (
                <div key={post.id}>
                  <PostCard
                    title={post.title}
                    content={post.content}
                    slug={post.slug}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPage;
