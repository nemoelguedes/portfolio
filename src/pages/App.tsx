import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import style from "./App.module.scss";
import { FaUserAlt } from "react-icons/fa";
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
                          Menu Item
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

            </header>

            <div className={style.pages}>

              <Routes>
                <Route path="/" element={<><ScrollToTop /></>} />
              </Routes>

            </div>

          </section>

        </>

      </Router>

    </>
  );
}