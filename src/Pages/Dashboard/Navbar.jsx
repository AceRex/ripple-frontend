import UserLogo from "../../Assets/Images/Company Logo.png";
import UserImg from "../../Assets/Images/userImg.jpeg";
import { CgBell } from "react-icons/cg";
import { BsChevronRight } from "react-icons/bs";

export default function NavBar() {
  return (
    <nav className="flex p-2 items-center justify-between px-14 border-y border-[#dfdfdf]">
      <img src={UserLogo} alt="user-Logo" />
      <div className=" flex justify-between items-center min-[1536px]:w-[20%]  ">
        <div className="relative mr-5">
          <div className="absolute left-4 bg-secondary text-sm font-bodyBold text-light rounded-full min-[768px]:mr-7 text-center w-[17px] h-[17px]">
            7
          </div>
          <CgBell className="w-7 h-7 text-dark  " />
        </div>
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden mr-3">
            <img
              src={UserImg}
              alt="User-Img"
              className="w-[60px] h-[60px] object-cover object-top object-center "
            />
          </div>
          <div>
            <p className="font-bodyBold text-sm">Kalu Abasiama</p>
            <div className="flex justify-between items-center">
              <p className="font-bodyLight text-sm">Admin</p>
              <BsChevronRight className="w-3"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
