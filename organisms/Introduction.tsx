import { navData } from "../atoms/data";
import Navbar from "../molecules/Navbar";
import Avatar from "../atoms/Avatar";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="first-bg">
      <Navbar {...navData} />
      <div className="dark:bg-[#1F2937E5] dark:bg-none  begee1">
        <div className="pr-[13.5rem] pl-[13.5rem] flex flex-col items-center">
          <div className="mt-24 pics">
            <Avatar className="w-36 h-36" />
          </div>
          <div>
            <div className="flex items-center text-center  pt-[2rem]">
              <h2 className="font-bold text-[3rem] text-[#1f2937] dark:text-white">
                Hi
              </h2>
              <div className={``} onClick={() => {}}>
                <Image src="/vectors/hand.svg" width={32} height={32} alt="" />
              </div>
            </div>
            <h2 className="font-bold text-[3rem] text-[#1f2937] dark:text-white">
              I’m Badmus Adegbite
            </h2>
            <p className="text-[1.25rem] max-w-2xl dark:text-white">
              Passionate di bidang Frontend Dev dan UI/UX Design. Suka membangun
              antarmuka website yang fast- performace dan well-design
              menggunakan teknologi- teknologi terbaru. Passionate di bidang
              Frontend Dev dan UI/UX Design. Suka membangun antarmuka website
              yang fast- performace dan well-design menggunakan teknologi-
              teknologi terbaru. Passionate di bidang Frontend Dev dan UI/UX
              Design. Suka membangun antarmuka website yang fast- performace dan
              well-design menggunakan teknologi- teknologi terbaru.
            </p>
            <div className="flex items-center pt-5">
              <div className="mr-10 deep-blue dark:bg-white">
                <p className="mr-4 dark:text-[#1f2937]">Let’s work together</p>
                <Image
                  src="/vectors/arr-right.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </div>
              <div className="white">
                <p className="mr-4">See some of my works</p>
                <Image
                  src="/vectors/arr-down.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;