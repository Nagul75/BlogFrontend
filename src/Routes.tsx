import Layout from "./layouts/Layout.tsx";
import Home from "./pages/Home.tsx";
import PostPage from "./pages/PostPage.tsx";

export const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:slug", element: <PostPage /> },
    ],
  },
];
