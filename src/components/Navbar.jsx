import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex align-middle px-2 py-4 justify-between">
      <div className="">
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </div>
      <div>
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
      </div>
    </div>
  );
};

export default Navbar;
