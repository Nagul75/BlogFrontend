import apiClient from "./apiClient.ts";

async function testApi() {
  try {
    const response = await apiClient.get("/posts/");

    console.log("Status:", response.status);
    console.log("Data:", response.data);
  } catch (error) {
    console.error(error);
  }
}
testApi();
