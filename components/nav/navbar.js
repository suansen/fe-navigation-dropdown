import Link from "next/link";
import { useState, useEffect } from "react";

import IconMenuSvg from "../../assets/images/icon-menu";
import IconCloseMenuSvg from "../../assets/images/icon-close-menu";
import LogoSvg from "../../assets/images/logo";

import NavbarMenu from "./navbar-menu";
import NavSubHeaderMobile from "./navbar-subheader-mobile";

import useLockedBody from "../../hooks/useLockedBody";

function Navbar() {
  const [active, setActive] = useState(false);
  const [locked, setLocked] = useLockedBody(active);

  useEffect(() => {
    setLocked(active);
  }, [active, setLocked]);

  return (
    <nav className="relative flex justify-between p-6 min-h-[2rem]">
      <div className="flex justify-center items-center">
        <Link href="/">
          <a>
            <LogoSvg />
          </a>
        </Link>
      </div>
      <div className="cursor-pointer z-30">
        {active ? (
          <div onClick={() => setActive(!active)}>
            <IconCloseMenuSvg />
          </div>
        ) : (
          <div onClick={() => setActive(!active)}>
            <IconMenuSvg />
          </div>
        )}
      </div>
      {active && (
        <>
          <div className="absolute h-screen min-w-full bg-neutral-almost-black opacity-50 top-0 left-0 z-10"></div>
        </>
      )}
      <div
        className={`origin-right absolute bg-neutral-almost-white w-[20rem] h-screen z-20 right-0 top-0 scale-x-0 ${
          active && " scale-x-100"
        } transition ease-in-out`}
      >
        <NavbarMenu>
          <NavSubHeaderMobile />
        </NavbarMenu>
      </div>
    </nav>
  );
}

export default Navbar;
