import Layout from "./layouts/Layout.tsx";
import Home from "./pages/Home.tsx";

export const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
];
