import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [hover, sethover] = useState(false);
  return (
    <section className="bg-primaryLight -mx-5 py-12 sm:py-24 sm:px-22">
      <div className="w-[90%] m-auto text-center">
        <h2 className="font-headingMd text-4xl sm:text-6xl text-primary mb-2 sm:mb-4">
          For Individuals and Businesses
        </h2>
        <p className="font-body text-dark text-md sm:text-xl">
          Join 200+ businesses using Eazipay's easy solution
        </p>
      </div>
      <div className="lg:flex hidden my-16">
        <motion.div
          initial={{ x: "40%" }}
          onMouseEnter={() => sethover(true)}
          onMouseLeave={() => sethover(false)}
          className="bg-primary text-light min-[768px]:px-20 min-[1536px]:px-12  min-[768px]:py-12 min-[1536px]:py-12 rounded-3xl  shadow-2xl shadow-dark/70 w-[80%] min-[768px]:w-[90%] min-[1536px]:w-[80%]"
        >
          <p className="font-bodyBold text-3xl mb-5">
            Tamper-proof Payroll for Life
          </p>
          <p className="mb-3">
            Your staff payroll history is kept in one place forever.
          </p>
          <p className="mb-3">No more excel sheet or manual records.</p>
          <p className="mb-3">
            Download your payroll history anytime you need it.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "-8%" }}
          animate={hover ? { x: "30%" } : { x: "-8%" }}
          whileHover={{ x: "-40%" }}
          transition={{ type: "linear", stiffness: 100 }}
          className="bg-primary text-light z-1 min-[768px]:px-20 min-[1536px]:px-12 min-[768px]:py-12 min-[1536px]:py-12 rounded-3xl  shadow-2xl shadow-dark/70 w-[80%] min-[768px]:w-[90%] min-[1536px]:w-[80%]"
        >
          <p className="font-bodyBold text-3xl mb-5">
            All Payroll, Anytime Anywhere
          </p>
          <p className="mb-3">
            Wherever you are, Eazipay has got you covered on ALL your Payroll
            tasks.
          </p>
          <p className="mb-3">
            Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay
            handle all your compliances in one place and easily, in seconds!
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "-48%" }}
          whileHover={{ x: "-52%" }}
          transition={{ type: "linear", stiffness: 100 }}
          className="bg-primary text-light z-2 min-[768px]:px-20 min-[1536px]:px-12 min-[768px]:py-12 min-[1536px]:py-12 rounded-3xl  shadow-2xl shadow-dark/70 w-[80%] min-[768px]:w-[90%] min-[1536px]:w-[80%]"
        >
          <p className="font-bodyBold text-3xl mb-5">Payroll in Seconds</p>
          <p className="mb-3">
            Never again will you spend more than 2 minutes on payroll.
          </p>
          <p className="mb-3">
            Just click on your staff and bulk-pay them at once.
          </p>
          <p className="mb-3">Payment is done permanently.</p>
        </motion.div>
      
      </div>
      <div className="block my-10 min-[768px]:hidden min-[1536px]:hidden">
        <div
          className="bg-light text-primary p-10 mb-7 w-[90%] m-auto rounded-md"
        >
          <p className="font-bodyBold text-xl mb-5">
            Tamper-proof Payroll for Life
          </p>
          <p className="mb-3 text-dark font-body text-[14px]">
            Your staff payroll history is kept in one place forever.
          </p>
          <p className="mb-3 text-dark font-body text-[14px]">No more excel sheet or manual records.</p>
          <p className="mb-3 text-dark font-body text-[14px]">
            Download your payroll history anytime you need it.
          </p>
        </div>
        <div
          className="bg-light text-primary p-10 mb-7 w-[90%] m-auto rounded-md"
        >
          <p className="font-bodyBold text-xl mb-5">
            All Payroll, Anytime Anywhere
          </p>
          <p className="mb-3 text-dark font-body text-[14px]">
            Wherever you are, Eazipay has got you covered on ALL your Payroll
            tasks.
          </p>
          <p className="mb-3 text-dark font-body text-[14px] text-dark font-body text-[14px]">
            Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay
            handle all your compliances in one place and easily, in seconds!
          </p>
        </div>
        <div
          className="bg-light text-primary p-10 mb-7 w-[90%] m-auto rounded-md"
        >
          <p className="font-bodyBold text-xl mb-5">Payroll in Seconds</p>
          <p className="mb-3 text-dark font-body text-[14px]">
            Never again will you spend more than 2 minutes on payroll.
          </p>
          <p className="mb-3 text-dark font-body text-[14px]">
            Just click on your staff and bulk-pay them at once.
          </p>
          <p className="mb-3 text-dark font-body text-[14px]">Payment is done permanently.</p>
        </div>
        <div className="w-[80%] m-auto text-center">
        <p className="font-body text-dark text-md">
          We are happy to answer your queries. Please, reach us at
          <a className="text-secondary"> hi@myeazipay.com</a>and expect our
          response shortly after.
        </p>
      </div>
      </div>
      <div className="w-[45%] m-auto text-center max-[680px]:hidden">
        <p className="font-body text-dark text-xl">
          We are happy to answer your queries. Please, reach us at
          <a className="text-secondary"> hi@myeazipay.com</a>and expect our
          response shortly after.
        </p>
      </div>
     
    </section>
  );
}
