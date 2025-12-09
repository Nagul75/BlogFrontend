import ImageBanner from "@/components/ImageBanner";
import Post from "@/components/Post";
import SearchInput from "@/components/SearchInput";
import apiClient from "@/utils/apiClient";
import { useState, useEffect } from "react";
import { type CompletePost } from "@/types/PostTypes";
import axios from "axios";

function convertUTCtoReadable(utc: string) {
  const date = new Date(utc);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  if (axios.isAxiosError(error) && error.response?.data?.message) {
    return error.response.data.message;
  }
  return "An unexpected error occurred.";
};

const Home = () => {
  const [posts, setPost] = useState<CompletePost[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await apiClient("/posts/");
        if (response.status == 200) {
          setPost(response.data);
          console.log(response);
          setError(null);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        const errorMsg = getErrorMessage(err);
        setError(errorMsg);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-10 w-full h-full">
      <div className="flex justify-center items-center">
        <ImageBanner />
      </div>
      {!loading ? (
        <>
          <div className="flex flex-col items-end mb-10 relative w-full">
            <SearchInput />
            {posts &&
              posts.map((post) => (
                <Post
                  title={post.title}
                  id={post.id}
                  content={post.content}
                  date_published={convertUTCtoReadable(post.createdAt)}
                />
              ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
