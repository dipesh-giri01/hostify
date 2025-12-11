"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/app/icons";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 py-3.5 px-5">
      <div className="max-w-6xl mx-auto h-10 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
            aria-label="Home"
          >
            <Logo />
          </Link>
        </div>

        {/* Navigation + Menu - Right */}
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className={`text-sm font-medium transition-all duration-200 relative group whitespace-nowrap
                ${usePathname() === "/" ? "text-orange-500" : "text-gray-900 dark:text-gray-100 hover:text-orange-500"}
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-200 origin-left
                  ${usePathname() === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>
            <Link
              href="/stays"
              className={`text-sm font-medium transition-all duration-200 relative group whitespace-nowrap
                ${usePathname() === "/stays" ? "text-orange-500" : "text-gray-900 hover:text-orange-500"}
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1`}
            >
              Stays
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-200 origin-left
                  ${usePathname() === "/stays" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>
            <Link
              href="/become-a-host"
              className={`text-sm font-medium transition-all duration-200 relative group whitespace-nowrap
                ${usePathname() === "/become-a-host" ? "text-orange-500" : "text-gray-900 hover:text-orange-500"}
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1`}
            >
              Become a Host
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-200 origin-left
                  ${usePathname() === "/become-a-host" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-100 hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-200"
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

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-200"
          aria-label="Mobile navigation"
        >
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
              ${usePathname() === "/" ? "bg-orange-50 text-orange-500" : "text-gray-900 hover:bg-gray-50 hover:text-orange-500"}
              focus:outline-none focus:ring-2 focus:ring-orange-500`}
          >
            Home
          </Link>
          <Link
            href="/stays"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
              ${usePathname() === "/stays" ? "bg-orange-50 text-orange-500" : "text-gray-900 hover:bg-gray-50 hover:text-orange-500"}
              focus:outline-none focus:ring-2 focus:ring-orange-500`}
          >
            Stays
          </Link>
          <Link
            href="/become-a-host"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
              ${usePathname() === "/become-a-host" ? "bg-orange-50 text-orange-500" : "text-gray-900 hover:bg-gray-50 hover:text-orange-500"}
              focus:outline-none focus:ring-2 focus:ring-orange-500`}
          >
            Become a Host
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
