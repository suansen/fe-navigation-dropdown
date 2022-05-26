import Link from "next/link";

import { useRef } from "react";

import ButtonOutline from "../button/button-outlin";
import LogoSvg from "../../assets/images/logo";

import NavSubHeader from "./navbar-subheader";

function NavBarLg() {
  return (
    <nav className="flex p-6 font-primary">
      <div className="flex justify-center items-center">
        <Link href="/">
          <a className="mr-8">
            <LogoSvg />
          </a>
        </Link>
      </div>
      <div className=" flex justify-between items-center flex-grow-1 w-full">
        <div className="flex gap-8">
          <NavSubHeader />
        </div>
        <div className="flex justify-center items-center gap-8">
          <div>
            <Link href="/">
              <a className="text-neutral-medium-gray hover:text-neutral-almost-black transition">
                Login
              </a>
            </Link>
          </div>
          <div>
            <ButtonOutline label={"Register"} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarLg;
