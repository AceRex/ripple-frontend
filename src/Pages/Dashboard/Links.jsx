import { Link } from "react-router-dom";
import {
  BsFillGridFill,
  BsBook,
  BsTelephone,
  BsChevronDown,
} from "react-icons/bs";
import { BiWallet, BiUserPlus } from "react-icons/bi";
import { PiNote } from "react-icons/pi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { AiOutlineSetting } from "react-icons/ai";
import { useEffect, useState } from "react";

const NavLinks = [
  {
    link: "/dashboard/index",
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
    Icon: BiUserPlus,
    name: "employee-management",
    title: "Employee Management",
    children: [
      {
        link: "/dashboard/employee_management",
        name: "employee-management",
        title: "Employee Management",
      },
    ],
  },
  {
    Icon: PiNote,
    name: "payroll",
    title: "Payroll",
    children: [
      {
        link: "/dashboard/payroll",
        name: "payroll",
        title: "Payroll",
      },
    ],
  },
  {
    Icon: HiOutlineSquare2Stack,
    name: "compliance",
    title: "Compliance",
    children: [
      {
        link: "/dashboard/compliance",
        name: "compliance",
        title: "Compliance",
      },
    ],
  },
  {
    Icon: FaHandHoldingDollar,
    name: "quick-loan",
    title: "Quick Loan",
    children: [
      {
        link: "/dashboard/quick_loan",
        name: "quick-loan",
        title: "Quick Loan",
      },
    ],
  },
  {
    Icon: BsBook,
    name: "book-keeping",
    title: "Book Keeping",
    children: [
      {
        link: "/dashboard/book_keeping",
        name: "book-keeping",
        title: "Book Keeping",
      },
    ],
  },
];

const OtherLinks = [
  {
    link: "#",
    Icon: BsTelephone,
    name: "support",
    title: "Support",
  },
  {
    link: "#",
    Icon: AiOutlineSetting,
    name: "Settings",
    title: "Settings",
  },
];

export default function Links() {
  const [active, setActive] = useState("/dashboard/");
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative w-[100%]">
      <ul className="mt-2 px-[0.5px]">
        {NavLinks.map(({ Icon, name, title, link, children }) => (
          <div>
            <Link
              to={link}
              key={name}
              className={
                active === name
                  ? "flex items-center justify-between px-6 mb-4 text-primary py-3 border-l-4 border-primary "
                  : "flex items-center justify-between px-6 mb-4 py-3 text-dark"
              }
              onClick={(e) => (setActive(name), setVisible(!visible))}
            >
              <div className="flex items-center">
                <Icon className="text-xl mr-3" />
                <p className="font-body text-[15px]">{title}</p>
              </div>
              {children ? <BsChevronDown className="text-md" /> : null}
            </Link>
            {children ? (
              <div
                className={
                  active === name && visible === true
                    ? "bg-[#dfdfdf] w-[100%] min-[768px]:px-10 min-[1536px]:px-16 p-4 -mt-4"
                    : "hidden"
                }
              >
                {children.map(({link, name, title}) => (
                  <Link key={name} to={link}>
                    {title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </ul>
      <ul className="absolute min-[768px]:-bottom-[8.5rem] min-[1536px]:-bottom-[13rem]">
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
