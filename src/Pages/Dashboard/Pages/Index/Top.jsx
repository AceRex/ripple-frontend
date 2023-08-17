import { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import Card from './Card'

export default function Top(){
    const [visible, setVisible] = useState(true);

    return(
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
        <div className="w-[30%] p-4 mt-24 text-dark">
          <div className="w-[70%] m-auto text-center rounded-3xl border border-[#dfdfdf] overflow-hidden">
            <h2 className="bg-primaryShade py-2 mb-5 ">Next Payroll</h2>
            <div className="w-[50%] flex flex-row items-center p-3 m-auto">
              <IoCalendarOutline className="text-2xl mr-2" />
              <span>Friday</span>
            </div>
            <p className="font-bodyBold text-2xl mb-6">09/11/2023</p>
          </div>
          <div className="w-[60%] m-auto mt-8 overflow-hidden">
            <p className="font-body text-lg mb-2 ">Total Employee</p>
            <p className="font-bodyBold text-3xl mb-3">64</p>
            <div className="grid grid-cols-4 font-bodyLight">
              <div className="col-span-2">
                <div className="bg-secondary p-2"></div>
                <p className="text-md">Male</p>
                <p className="text-md">32</p>

              </div>
              <div className="col-span-2">
                <div className="bg-primary p-2"></div>
                <p className="text-md">Female</p>
                <p className="text-md">32</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}