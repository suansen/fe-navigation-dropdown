import ButtonOutline from "../button/button-outlin";
import LogoSvg from "../../assets/images/logo";
import Link from "next/link";

function NavBarLg() {
  const styles = {
    text: "text-neutral-medium-gray hover:text-neutral-almost-black"
  };

  return (
    <nav className="flex p-6 font-primary min-w-full">
      <div className="flex justify-center items-center">
        <Link href="/">
          <a className="mr-8">
            <LogoSvg />
          </a>
        </Link>
      </div>
      <div className=" flex justify-between items-center">
        <div className="flex gap-8 ">
          <div>
            <Link href="/">
              <a className={styles.text}>Features</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className={styles.text}>Company</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className={styles.text}>Careers</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className={styles.text}>About</a>
            </Link>
          </div>
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
