import { Outlet } from "react-router-dom";
import SideNav from "./sideNav";
import NavBar from "./Navbar";

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      <aside className="w-[20%]">
        <SideNav />
      </aside>
      <section className="w-[80%]">
        <NavBar />
        <Outlet />
      </section>
    </div>
  );
}
