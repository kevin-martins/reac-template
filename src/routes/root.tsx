import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Root = () => {
  return (
    <main>
      <NavBar />
      <div className="flex">
        <div className="h-screen bg-slate-600 w-fit">
          <h1>React Router Contacts</h1>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Your Name</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Root;
