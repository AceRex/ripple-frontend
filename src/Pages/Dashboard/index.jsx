import { Outlet } from "react-router-dom";
import SideNav from "./sideNav";
import NavBar from "./Navbar";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-10 grid-flow-row gap4">
      <aside className="col-span-2">
        <SideNav />
      </aside>
      <section className="col-span-8">
        <NavBar />
        <Outlet />
      </section>
    </div>
  );
}
