"use client";
import { usePathname } from "next/navigation";
import React from "react";
import TopHeader from "./TopHeader";
import StickyNav from "./StickyNav";

const Navbar = () => {
  const pathname = usePathname();

  if (pathname.match(/^\/admin(\/.*)?$/)) {
    return null;
  }

  return (
    <div className=" bg-transparent">
      <div className="">
        <TopHeader />
      </div>
      <StickyNav />
    </div>
  );
};

export default Navbar;
