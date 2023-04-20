import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        {" "}
        Главная страница{" "}
      </NavLink>
      <NavLink to="contact">Контакты</NavLink>
      <NavLink to="about">O нас</NavLink>
    </nav>
  );
};

export default Menu;
