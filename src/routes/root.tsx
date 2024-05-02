import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Root = () => {
  return (
    <main className="h-full">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Root;
