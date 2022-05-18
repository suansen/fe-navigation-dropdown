import React from "react";
import IconMenuSvg from "../../assets/images/icon-menu";
import LogoSvg from "../../assets/images/logo";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between p-6 min-h-[2rem]">
      <div className="flex justify-center items-center">
        <Link href="/">
          <a>
            <LogoSvg />
          </a>
        </Link>
      </div>
      <div className="cursor-pointer">
        <IconMenuSvg />
      </div>
    </nav>
  );
}

export default Navbar;
