import { useAuth } from "@/context/auth";
import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

const PageLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Desktop Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-600">Tenpo Challenge</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <NavLink
                to="/paginated"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm text-gray-600 font-medium"
                    : "text-sm text-gray-400 hover:text-gray-600 transition-colors"
                }
              >
                Paginated
              </NavLink>
              {/* <NavLink
                to="/infinite"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm text-gray-600 font-medium"
                    : "text-sm text-gray-400 hover:text-gray-600 transition-colors"
                }
              >
                Infinite Scroll
              </NavLink>
              <NavLink
                to="/virtualized"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm text-gray-600 font-medium"
                    : "text-sm text-gray-400 hover:text-gray-600 transition-colors"
                }
              >
                Virtualized
              </NavLink> */}
            </nav>

            {/* Desktop Logout Button */}
            <button
              onClick={handleLogout}
              className="hidden md:block px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <nav className="flex flex-col space-y-2 pt-4">
                {/* <NavLink
                  to="/paginated"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm text-gray-600 font-medium py-2 px-3 rounded bg-gray-100"
                      : "text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-50 py-2 px-3 rounded transition-colors"
                  }
                >
                  Paginado
                </NavLink>
                <NavLink
                  to="/infinite"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm text-gray-600 font-medium py-2 px-3 rounded bg-gray-100"
                      : "text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-50 py-2 px-3 rounded transition-colors"
                  }
                >
                  Scroll Infinito
                </NavLink> */}
                <NavLink
                  to="/virtualized"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm text-gray-600 font-medium py-2 px-3 rounded bg-gray-100"
                      : "text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-50 py-2 px-3 rounded transition-colors"
                  }
                >
                  Lista Virtualizada
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-sm text-red-500 hover:text-red-600 hover:bg-red-50 py-2 px-3 rounded transition-colors mt-2"
                >
                  Logout
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
