import Link from "next/link";

import { useState, useRef } from "react";

import IconPlanningSvg from "../../assets/images/icon-planning";
import IconTodoSvg from "../../assets/images/icon-todo";
import IconCalendarSvg from "../../assets/images/icon-calendar";
import IconReminderSvg from "../../assets/images/icon-reminders";
import IconArrowDown from "../../assets/images/icon-arrow-down";

import useOutsideClick from "../../hooks/useOutsideClick";

function NavSubHeaderMobile() {
  const styles = {
    text: "text-neutral-medium-gray hover:text-neutral-almost-black",
    arrowLink: "relative flex items-center gap-1 cursor-pointer"
  };

  const [featureActive, setFeatureActive] = useState(false);
  const [companyActive, setCompanyActive] = useState(false);

  const featureRef = useRef();
  const companyRef = useRef();

  useOutsideClick(featureRef, () => setFeatureActive(false));
  useOutsideClick(companyRef, () => setCompanyActive(false));
  // useLockBodyScroll();

  return (
    <div className="space-y-4 ">
      <div>
        <div
          ref={featureRef}
          onClick={() => setFeatureActive(!featureActive)}
          className={`${styles.arrowLink}`}
        >
          <div className={styles.text}>Features</div>
          <div
            className={
              featureActive ? "transition -rotate-180" : "transition rotate-0"
            }
          >
            <IconArrowDown />
          </div>
        </div>
        <div>
          <div
            className={`space-y-2 p-4 bg-neutral-almost-white transition ${
              featureActive ? "" : "hidden"
            }`}
          >
            <div className="flex gap-2">
              <div>
                <IconTodoSvg />
              </div>
              <div className={styles.text}>Todo List</div>
            </div>

            <div className="flex gap-2">
              <div>
                <IconCalendarSvg />
              </div>
              <div className={styles.text}>Calendar</div>
            </div>

            <div className="flex gap-2">
              <div>
                <IconReminderSvg />
              </div>
              <div className={styles.text}>Reminders</div>
            </div>

            <div className="flex gap-2">
              <div>
                <IconPlanningSvg />
              </div>
              <div className={styles.text}>Planning</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            ref={companyRef}
            onClick={() => setCompanyActive(!companyActive)}
            className={`${styles.arrowLink}`}
          >
            <div className={styles.text}>Company</div>
            <div
              className={
                companyActive ? "transition -rotate-180" : "transition rotate-0"
              }
            >
              <IconArrowDown />
            </div>
          </div>

          <div
            className={` space-y-2 p-4 bg-neutral-almost-white transition ${
              companyActive ? "" : "hidden"
            }`}
          >
            <div className={styles.text}>History</div>
            <div className={styles.text}>Our Team</div>
            <div className={styles.text}>Block</div>
          </div>
        </div>
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
      <div className="gap-4 min-w-full flex flex-col justify-center items-center text-neutral-medium-gray">
        <Link href="/">Login</Link>
        <button className="min-w-full border-2 border-neutral-medium-gray text-neutral-medium-gray hover:border-neutral-almost-black hover:text-neutral-almost-black py-3 px-6 rounded-xl transition">
          Register
        </button>
      </div>
    </div>
  );
}

export default NavSubHeaderMobile;
