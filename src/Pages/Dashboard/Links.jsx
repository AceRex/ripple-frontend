import { Link } from "react-router-dom";
import { BsFillGridFill, BsBook, BsTelephone } from "react-icons/bs";
import { BiWallet, BiUserPlus } from "react-icons/bi";
import { PiNote } from "react-icons/pi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { RiHandCoinLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { useEffect, useState } from "react";

const NavLinks = [
  {
    link: "/dashboard",
    Icon: BsFillGridFill,
    name: "dashboard",
    title: "Dashboard",
  },
  {
    link: "/dashboard/wallet",
    Icon: BiWallet,
    name: "wallet",
    title: "Wallet",
  },
  {
    link: "/dashboard/employee_management",
    Icon: BiUserPlus,
    name: "employee-management",
    title: "Employee Management",
  },
  {
    link: "/dashboard/payroll",
    Icon: PiNote,
    name: "payroll",
    title: "Payroll",
  },
  {
    link: "/dashboard/compliance",
    Icon: HiOutlineSquare2Stack,
    name: "compliance",
    title: "Compliance",
  },
  {
    link: "/dashboard/quick_loan",
    Icon: RiHandCoinLine,
    name: "quick-loan",
    title: "Quick Loan",
  },
  {
    link: "/dashboard/book_keeping",
    Icon: BsBook,
    name: "book-keeping",
    title: "Book Keeping",
  },
];

const OtherLinks = [
  {
    link: "/dashboard/s",
    Icon: BsTelephone,
    name: "support",
    title: "Support",
  },
  {
    link: "/dashboard/s",
    Icon: AiOutlineSetting,
    name: "Settings",
    title: "Settings",
  },
];

export default function Links() {
  const [active, setActive] = useState("/dashboard/");
  
  return (
    <div className="relative">
      <ul className="mt-2 px-[0.5px]">
        {NavLinks.map(({ Icon, name, title, link }) => (
          <Link
            to={link}
            key={name}
            className={
              active === name
                ? "flex items-center px-6 mb-2 text-primary py-3 border-l-4 border-primary "
                : "flex items-center px-6 mb-2 py-3 text-dark"
            }
            onClick={(e) => setActive(name)}
          >
            <Icon className="text-xl mr-3" />
            <p className="font-body text-[15px]">{title}</p>
          </Link>
        ))}
      </ul>
      <ul className="absolute -bottom-[8.5rem]">
        {OtherLinks.map(({ Icon, name, title, link }) => (
          <Link
            to={link}
            key={name}
            className={
              active === name
                ? "flex items-center px-6 mb-2 text-primary py-2 border-l-4 border-primary "
                : "flex items-center px-6 mb-2 py-2 text-dark"
            }
            onClick={(e) => setActive(name)}
          >
            <Icon className="text-xl mr-3" />
            <p className="font-body text-md">{title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
