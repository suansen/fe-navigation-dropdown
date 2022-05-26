import Image from "next/image";
import { useState, useEffect } from "react";

import Button from "../components/button/button";

import ClientDatabiz from "../assets/images/client-databiz";
import ClientAudiophile from "../assets/images/client-audiophile";
import ClientMeetSvg from "../assets/images/client-meet";
import ClientMaker from "../assets/images/client-maker";

import useWindowSize from "../hooks/use-window-size";

export default function Home() {
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
      {/* <div>{`size is ${size.width}/${size.height} ${isSmall}`}</div> */}
      <main className="min-w-screen font-primary lg:flex lg:flex-row-reverse lg:gap-10 lg:px-10 lg:justify-between">
        <div className="min-w-full lg:min-w-[50%] relative">
          {isSmall ? (
            <Image
              src="/image-hero-mobile.png"
              alt="Hero mobile"
              objectFit="cover"
              width={750}
              height={564}
              layout="responsive"
            />
          ) : (
            <Image
              src="/image-hero-desktop.png"
              alt="Hero desktop"
              objectFit="cover"
              width={960}
              height={1280}
              layout="responsive"
            />
          )}
        </div>
        <section className=" text-center lg:text-left ml-0 space-y-10 lg:flex lg:flex-col lg:justify-center">
          <div className="space-y-10 py-8 lg:flex-1 flex flex-col justify-center">
            <div>
              <h1 className="font-bold text-4xl lg:text-[4rem] leading-[4rem]">
                Make remote work
              </h1>
            </div>
            <div className="px-4 text-neutral-medium-gray lg:px-0">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </div>
            <div>
              <Button label={"Learn more"} />
            </div>
          </div>
          <div className="flex items-end gap-2 ">
            <div className="mx-auto">
              <ClientDatabiz />
            </div>
            <div className="mx-auto">
              <ClientAudiophile />
            </div>
            <div className="mx-auto">
              <ClientMeetSvg />
            </div>
            <div className="mx-auto">
              <ClientMaker />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
