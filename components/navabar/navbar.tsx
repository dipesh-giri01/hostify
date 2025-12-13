"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/icons";
import { Menu, X, LogOut, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { useAuthStore } from "@/store/authStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isLoggedIn, userEmail, logout } = useAuthStore();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    setIsMenuOpen(false);
    router.push(ROUTES.HOME);
  };



  return (
    <header className="w-full bg-white border-b border-light-e8 sticky top-0 z-50">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 header-height">
        <div className="header-content flex items-center justify-between w-full h-full">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link
              href={ROUTES.HOME}
              className="block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
              aria-label="Hostify Home"
            >
              <Logo />
            </Link>
          </div>

          {/* Navigation + Menu - Right */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1"
              aria-label="Main navigation"
            >
              <Link
                href={ROUTES.HOME}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                  ${usePathname() === ROUTES.HOME 
                    ? "text-orange-500 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
              >
                Home
              </Link>
              <Link
                href={ROUTES.PROPERTIES}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                  ${usePathname() === ROUTES.PROPERTIES 
                    ? "text-orange-500 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
              >
                Stays
              </Link>
              <Link
                href="/become-a-host"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                  ${usePathname() === "/become-a-host" 
                    ? "text-orange-500 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
              >
                Become a Host
              </Link>
            </nav>

            {/* User Profile Dropdown - Desktop Only */}
            {isLoggedIn && (
              <div className="hidden lg:block relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="User profile menu"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm font-medium truncate max-w-xs">{userEmail}</span>
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-light-e8 shadow-lg z-40">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-3 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-light-e8 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <nav
          className="px-4 py-4 space-y-1"
          aria-label="Mobile navigation"
        >
          <Link
            href={ROUTES.HOME}
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base
              ${usePathname() === ROUTES.HOME 
                ? "text-orange-500 bg-orange-50" 
                : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }
              focus:outline-none focus:ring-2 focus:ring-orange-500`}
          >
            Home
          </Link>
          <Link
            href={ROUTES.PROPERTIES}
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base
              ${usePathname() === ROUTES.HOME
                ? "text-orange-500 bg-orange-50" 
                : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }
              focus:outline-none focus:ring-2 focus:ring-orange-500`}
          >
            Stays
          </Link>
          <Link
            href="/become-a-host"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base
              ${usePathname() === "/become-a-host" 
                ? "text-orange-500 bg-orange-50" 
                : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }
              focus:outline-none focus:ring-2 focus:ring-orange-500`}
          >
            Become a Host
          </Link>
          
          {/* Logout Button - Mobile Only */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base text-gray-700 hover:text-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
