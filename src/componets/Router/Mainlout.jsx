import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const Mainlout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Mainlout;
