import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex h-16 items-center justify-between bg-gray-900">
      <h2 className="pl-10 text-2xl font-bold text-white hover:cursor-pointer">
        <Link to="/home">My Blog</Link>
      </h2>
      <div className="flex items-center justify-between gap-3 pr-10">
        <Link className=" text-lg font-medium text-white" to="/home">
          Home
        </Link>
        <Link className="text-lg font-medium text-white" to="/blog">
          Blog
        </Link>
        <div className="flex gap-1">
          <div>
            <Link
              className="rounded-md border-2 border-emerald-500 p-2 text-lg font-medium text-white hover:cursor-pointer hover:bg-emerald-600 hover:text-white"
              to="/sign-in"
            >
              Sign in
            </Link>
          </div>
          <div>
            <Link
              className="rounded-md border-2 border-emerald-500 p-2 text-lg font-medium text-white hover:cursor-pointer hover:bg-emerald-600 hover:text-white"
              to="/sign-up"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
