import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center bg-neutral-300 dark:bg-neutral-900">
        <main className="flex flex-col w-[90%]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
