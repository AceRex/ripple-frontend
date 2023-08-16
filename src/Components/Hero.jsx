import GooglePlay from "../Assets/Images/googlePlay.png";
import AppleIcon from "../Assets/Images/appleStor.png";
import Desktop from "../Assets/Images/desktop.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="bg-white relative overflow:hidden">
      <div className="flex  w-4/5 m-auto">
        <div className="mx-auto max-w-xl py-24 text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-5xl font-headingMd tracking-tight text-white sm:text-7xl">
            Run your <span className="text-primary">payroll</span>{" "}
            <span className="text-invert">easily</span> in{" "}
            <span className="text-secondary">seconds</span>
          </h2>
          <p className="mt-6 text-[20px] font-body sm:leading-7 leading-2">
            We’ve built an all-inclusive simple solution for individual and
            businesses to manage staff, pay salaries, bills, and relevant taxes
            all at once.
          </p>
          <motion.button className="rounded-full bg-primary text-light font-body sm:w-1/2 p-3 mt-6">
            Start Using Free, Forever
          </motion.button>
          <p className="mt-6 text-base font-body leading-8 text-gray-300">
            Download the Eazipay App
          </p>
          <div className="mt-10 flex justify-start gap-x-6 lg:justify-start">
            <button className="rounded-md flex bg-white text-sm font-semibold text-gray-900 shadow-2xl over:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <img src={AppleIcon} alt="app store" />
              <div>
                <p className="font-bodyLight">Download on the</p>
                <p className="font-body text-lg">Appstore</p>
              </div>
            </button>
            <button className="rounded-md flex bg-white text-sm font-semibold text-gray-900 shadow-2xl hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <img src={GooglePlay} alt="googleplay" />
              <div>
                <p className="font-bodyLight">Get on</p>
                <p className="font-body text-lg">Google Play</p>
              </div>
            </button>
          </div>
        </div>
        <div className="absolute -right-8 py-28">
          <img src={Desktop} alt="" className="max-[680px]:hidden min-[768px]:w-[600px] min-[1536px]:w-[700px]" />
        </div>
      </div>
    </div>
  );
}
