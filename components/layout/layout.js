import Head from "next/head";
import Navbar from "../nav/navbar";
import NavBarLg from "../nav/navbar-lg";

import useWindowSize from "../../hooks/use-window-size";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const size = useWindowSize();
  const sizeLimit = 1024;
  const [isSmall, setIsSmall] = useState(
    size.width >= sizeLimit ? false : true
  );

  useEffect(() => {
    size.width >= sizeLimit ? setIsSmall(false) : setIsSmall(true);
  }, [size]);

  return (
    <>
      <Head>
        <title>Frontend Mentor Dropdown Navigation</title>
        <meta name="description" content="Frontend" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isSmall ? <Navbar /> : <NavBarLg />}

      {children}
    </>
  );
}

export default Layout;
