import LogoWhite from "../../Assets/Images/LogoWhite.png";
import Links from "./Links";

export default function SideNav() {
  return (
    <aside className="grid grid-row-3 w-[100%]">
      <div className="w-[100%]">
        <div className="background-image-blend">
          <img src={LogoWhite} alt="logo-white" className="m-auto" />
        </div>
      </div>
      <Links />
    </aside>
  );
}
