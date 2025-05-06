import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-green-600 shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link
          to={user ? "/dashboard" : "/"}
          className="text-xl font-bold text-yellow-100 transition-transform duration-300 hover:scale-110"
        >
          NotesApp
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <h3>{user.email}</h3>
            <Link
              to="/dashboard"
              className="text-yellow-100 transition-transform duration-300 hover:scale-110"
            >
              Dashboard
            </Link>
            <Link
              to={user && user._id ? `/profile/${user._id}` : "#"}
              className="text-yellow-100 transition-transform duration-300 hover:scale-110"
            >
              Profile
            </Link>
            <button
              onClick={logout} // Call the logout function when clicked
              className="text-red-500 hover:text-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-yellow-100 transition-transform duration-300 hover:scale-110 hover:font-bold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-yellow-100 transition-transform duration-300 hover:scale-110 hover:font-bold"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
