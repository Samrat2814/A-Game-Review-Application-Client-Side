import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold">
            GameReview
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex gap-6 ${
            isOpen ? "block" : "hidden"
          } absolute lg:static bg-gray-900 lg:bg-transparent top-16 left-0 w-full lg:w-auto p-4 lg:p-0`}
        >
          <NavLink
            to="/"
            className="block py-2 lg:inline-block hover:text-gray-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/all-reviews"
            className="block py-2 lg:inline-block hover:text-gray-400"
          >
            All Reviews
          </NavLink>
          <NavLink
            to="/add-review"
            className="block py-2 lg:inline-block hover:text-gray-400"
          >
            Add Review
          </NavLink>
          <NavLink
            to="/my-reviews"
            className="block py-2 lg:inline-block hover:text-gray-400"
          >
            My Reviews
          </NavLink>
          <NavLink
            to="/game-watch-list"
            className="block py-2 lg:inline-block hover:text-gray-400"
          >
            Game WatchList
          </NavLink>
          {user && user.email ? (
            <button
              onClick={logout}
              className="block lg:inline-block bg-red-600 px-4 py-2 rounded-md hover:bg-red-500"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block lg:inline-block bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
