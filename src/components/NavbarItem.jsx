"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-ambet-600 font-semibold
       ${
         genre === param
           ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-legacyBehavior"
           : ""
       }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
