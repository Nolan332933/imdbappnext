import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-amber-600 bg-gray-100 p-4 lg:text-lg justify-center gap-5">
      <NavbarItem title="Treding" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
