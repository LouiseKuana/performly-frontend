import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/"); 
  };

  return (
    <header className="w-full fixed z-50 font-serif backdrop-blur-sm text-[var(--color-delft-blue)] px-6 py-4">
      <div className="px-4 py-3 flex justify-between items-center">
        <Link to="/" className="shiny-text text-xl font-semibold">
          Performly Lab
        </Link>

        <nav className="space-x-6 text-sm font-serif">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/profile">User</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/performly-frontend/">Home</Link>
              <Link to="/register">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;