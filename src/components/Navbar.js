// Navbar.js
import { useState } from "react";
import Link from "next/link";

const Navbar = ({ handleSearchChange, handleSearchSubmit, searchQuery, showLogo = true }) => {
  return (
    <nav className="bg-gray-900">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container flex items-center justify-between tracking-wide">
        <Link href="/">
          <div className="flex items-center">
            <img src="pixel_goose.png" alt="Logo" className="mr-2 h-8 md:h-12" />
            <div className="text-base md:text-2xl">GooseComedian</div>
          </div>
        </Link>
        <form onSubmit={handleSearchSubmit}>
          <div className="flex justify-center items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search movies..."
              className="text-gray-600 p-1 sm:p-2 border-2 rounded-md md:p-1 lg:p-2 xl:p-3"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
