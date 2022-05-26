import Link from "next/link";

import { useState, useRef } from "react";

import IconPlanningSvg from "../../assets/images/icon-planning";
import IconTodoSvg from "../../assets/images/icon-todo";
import IconCalendarSvg from "../../assets/images/icon-calendar";
import IconReminderSvg from "../../assets/images/icon-reminders";
import IconArrowDown from "../../assets/images/icon-arrow-down";

import useOutsideClick from "../../hooks/useOutsideClick";

function NavSubHeader() {
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

  return (
    <>
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
          <div
            className={`flex flex-col shadow-lg gap-2 p-4 absolute right-0 translate-y-full rounded-lg bottom-0 z-10 bg-neutral-almost-white transition ${
              featureActive ? "" : "opacity-0"
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
          <div
            className={`shadow-lg space-y-2 p-4 absolute left-0 translate-y-full rounded-lg bottom-0 z-10  bg-neutral-almost-white transition w-[7rem] ${
              companyActive ? "" : "opacity-0 pointer-events-none"
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
    </>
  );
}

export default NavSubHeader;
