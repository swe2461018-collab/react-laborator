import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Үндсэн цэс">

      {/* Нүүр хуудас */}
      <NavLink to="/" end>
        НҮҮР
      </NavLink>

      {/* ХААИС-ийн тухай */}
      <NavLink to="/haais">
        ХААИС
      </NavLink>

      {/* Удирдах зөвлөл */}
      <NavLink to="/udirdakh-zovlol">
        УДИРДАХ ЗӨВЛӨЛ
      </NavLink>

      {/* Сургалт */}
      <NavLink to="/surgalt" >
        СУРГАЛТ
      </NavLink>

      {/* Хөгжлийн бодлого */}
      <NavLink to="/hogjliin-bodlogo">
        ХӨГЖЛИЙН БОДЛОГО
      </NavLink>

      {/* Хамтын ажиллагаа */}
      <NavLink to="/hamtyn-ajillagaa">
        ХАМТЫН АЖИЛЛАГАА
      </NavLink>

      {/* Оюутан */}
      <NavLink to="/oyutan">
        ОЮУТАН
      </NavLink>

      <NavLink to="/burtgeh">
        БҮРТГЭХ
      </NavLink>

      {/* Ректорын ажлын алба */}
      <NavLink to="/rektoryn-ajlyn-alba">
        РЕКТОРЫН АЖЛЫН АЛБА
      </NavLink>

      {/* Холбоо барих */}
      <NavLink to="/holboo-barih">
        ХОЛБОО БАРИХ
      </NavLink>

    </nav>
  );
}
export default Navbar;


