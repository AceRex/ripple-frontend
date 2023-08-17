import { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const Card = ({ title, Icon, color, IconBgcolor }) => (
  <div className="bg-light p-10 shadow-xl shadow-dark/20 text-center rounded-2xl">
    <div className={`bg-${IconBgcolor} p-4 rounded-2xl w-[60%] m-auto mb-4`}>
      <Icon className={`text-${color} text-3xl  text-center`} />
    </div>
    <p className="text-dark font-body text-md">{title}</p>
  </div>
);

export default function Index() {
  const [visible, setVisible] = useState(true);
  return (
    <section className="px-12 pt-10">
      <div className="flex flex-row">
        <div className="w-[70%]">
          <h2 className="font-bodyBold text-4xl mb-2">Welcome Abasiama</h2>
          <p className="font-body mb-9">
            Pay and manage your employee in minutes
          </p>
          <div className="bg-primary bg-img p-10 rounded-2xl flex flex-row justify-between">
            <div>
              <p className="text-light py-2">Wallet Balance</p>
              <p className="text-light font-bodyBold text-4xl flex">
                {visible ? (
                  <>
                    <span className="mr-3">N12,560,078.00 </span>{" "}
                    <BsEye onClick={(e) => setVisible(!visible)} />
                  </>
                ) : (
                  <>
                    <span className="mr-3">N**,**.** </span>
                    <BsEyeSlash onClick={(e) => setVisible(!visible)} />
                  </>
                )}{" "}
              </p>
            </div>
            <button className="rounded-full bg-primaryShade text-primary hover:bg-secondary hover:text-light font-body text-md px-10 py-2 h-10 shadow-xl shadow-dark/60 mt-10">
              Fund Wallet
            </button>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <Card
              title={"Add Employee"}
              IconBgcolor="secondaryLight"
              color="secondary"
              Icon={HiOutlineUserPlus}
            />
            <Card
              title={"Pay Salaries"}
              IconBgcolor="invert"
              color="primary"
              Icon={FaMoneyBillWaveAlt}
            />
            <Card
              title={"Pay Compliances"}
              IconBgcolor="assets1"
              color="assets2"
              Icon={PiPaperPlaneTiltBold}
            />
            <Card
              title={"Quick Loan"}
              IconBgcolor="assets3"
              color="assets4"
              Icon={FaHandHoldingDollar}
            />
          </div>
        </div>
        <div className="w-[30%]">2</div>
      </div>
    </section>
  );
}
