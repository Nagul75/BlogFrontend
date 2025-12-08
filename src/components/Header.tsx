import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Crown } from "lucide-react";
const Header = () => {
  return (
    <header className="flex p-2 px-4 justify-between border-b dark:text-gray-200 dark:bg-neutral-800 bg-neutral-200 text-neutral-800">
      <div className=" flex w-2/5 gap-4">
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-4">
            <Crown fill="#C49A72" className="text-[#C49A72]" />
          </div>
        </Link>
        <div className="flex items-center ml-2">
          <Button
            className="text-xs dark:text-neutral-500 text-neutral-600"
            variant="link"
          >
            About
          </Button>
        </div>
      </div>
      <ToggleTheme />
    </header>
  );
};

export default Header;
