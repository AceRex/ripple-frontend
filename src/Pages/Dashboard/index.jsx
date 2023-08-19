import { Outlet, useNavigate } from "react-router-dom";
import SideNav from "./sideNav";
import NavBar from "./Navbar";
import { useEffect } from "react";

export default function Dashboard() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("index");
  },[navigate]);

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
