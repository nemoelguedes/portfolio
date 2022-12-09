import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Contato from "./contato";
import Depoimentos from "./depoimentos";
import Experiencias from "./experiencias";
import Portfolio from "./portfolio";
import QuemSou from "./quem";
import Skills from "./skills";
import style from "./App.module.scss";
import { FaUserAlt, FaSuitcase, FaStar, FaLaptopCode, FaPhoneAlt, FaComments } from "react-icons/fa";
import { useState } from "react";
import classNames from "classnames";
import ScrollToTop from "components/scrolltotop";

export default function App() {

  const [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(!menu);
    console.log(menu);
  }

  function closeMenu() {
    setMenu(false);
    console.log(menu);
  }

  if(menu === true){
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'unset';
  }

  return (
    <>
      <Router>
        <>
          <section className={style.section}>

            <header className={style.container__menu}>
              <div className={style.toggle}>
                <label htmlFor="check">
                  <input type="checkbox" id="check" checked={menu} onClick={openMenu} />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>


              <div className={classNames({
                [style.menu]: true,
                [menu === true ? style["menu--active"] : style["menu--hidden"]]: true,
              })}>
                <nav onClick={closeMenu}>
                  <ul>
                    <li className={style.li}>
                      <NavLink to="/" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaUserAlt className={style.menu__icon} />
                        <div className={style.title}>
                          Quem Sou
                        </div>
                      </NavLink>
                    </li>
                    <li className={style.li}>
                      <NavLink to="/experiencias" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaSuitcase className={style.menu__icon} />
                        <div className={style.title}>
                          Experiências
                        </div>
                      </NavLink>
                    </li>
                    <li className={style.li}>
                      <NavLink to="/skills" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaStar className={style.menu__icon} />
                        <div className={style.title}>
                          Skills
                        </div>
                      </NavLink>
                    </li>
                    <li className={style.li}>
                      <NavLink to="/depoimentos" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaComments className={style.menu__icon} />
                        <div className={style.title}>
                          Depoimentos
                        </div>
                      </NavLink>
                    </li>
                    {/* <li className={style.li}>
                      <NavLink to="/portfolio" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaLaptopCode className={style.menu__icon} />
                        <div className={style.title}>
                          Portfólio
                        </div>
                      </NavLink>
                    </li> */}
                    <li className={style.li}>
                      <NavLink to="/contato" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaPhoneAlt className={style.menu__icon} />
                        <div className={style.title}>
                          Contato
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

            </header>

            <div className={style.pages}>

              <Routes>
                <Route path="/" element={<><ScrollToTop /><QuemSou /></>} />
                <Route path="/experiencias" element={<><ScrollToTop /><Experiencias /></>} />
                <Route path="/skills" element={<><ScrollToTop /><Skills /></>} />
                <Route path="/depoimentos" element={<><ScrollToTop /><Depoimentos /></>} />
                {/* <Route path="/portfolio" element={<><ScrollToTop /><Portfolio /></>} /> */}
                <Route path="/contato" element={<><ScrollToTop /><Contato /></>} />
              </Routes>

            </div>

          </section>

        </>

      </Router>

    </>
  );
}