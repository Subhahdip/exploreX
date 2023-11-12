import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Navbar = () => {
  return (
    <div className="flex bg-gray-50 align-middle px-6 py-4 justify-between">
      <div className="">
        <Link
          to="/about"
          className="mr-4 text-sm text-gray-500 hover:text-gray-700"
        >
          About
        </Link>
        <Link
          to="/store"
          className="mr-4 text-sm text-gray-500 hover:text-gray-700"
        >
          Store
        </Link>
      </div>
      <div>
        <Link
          to="/gmail"
          className="mr-4 text-sm text-gray-500 hover:text-gray-700"
        >
          Gmail
        </Link>
        <Link
          to="/images"
          className="mr-4 text-sm text-gray-500 hover:text-gray-700"
        >
          Images
        </Link>
        <AppsIcon className="mr-4" />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Navbar;
