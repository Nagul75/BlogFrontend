import apiClient from "./apiClient.ts";

async function testApi() {
  try {
    const response = await apiClient.get(
      "/posts/this-is-the-third-posts-ever-in-this-app-isnt-that-cool/",
    );
    const comments = await apiClient.get(
      "/posts/this-is-the-third-posts-ever-in-this-app-isnt-that-cool/comments/",
    );
    console.log("Data:", response.data);
    console.log("Comments: ", comments.data);
  } catch (error) {
    console.error(error);
  }
}
testApi();
