import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import style from "./App.module.scss";
import { FaChartBar, FaFlag, FaListUl, FaNetworkWired, FaUserFriends, } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { useState } from "react";
import classNames from "classnames";
import ScrollToTop from "components/scrolltotop";
import NewOkr from "./newokr";

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

  if (menu === true) {
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

              <div className={style.mobile__header}>

              <div className={style.logo}>
                <NavLink to="/"><img src="assets/logo.png" alt="TheOKRs" className={style.logo__img} /></NavLink>
              </div>
              <div className={style.toggle}>
                <label htmlFor="check">
                  <input type="checkbox" id="check" checked={menu} onClick={openMenu} />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>

              </div>




              <div className={classNames({
                [style.menu]: true,
                [menu === true ? style["menu--active"] : style["menu--hidden"]]: true,
              })}>
                <nav onClick={closeMenu}>
                  <ul>
                    <li>
                      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaChartBar className={style.menu__icon} />
                        <div className={style.title}>
                          Dashboard
                        </div>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/okrs" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaNetworkWired className={style.menu__icon} />
                        <div className={style.title}>
                          OKRs
                        </div>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/tarefas" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaListUl className={style.menu__icon} />
                        <div className={style.title}>
                          Tarefas
                        </div>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/areas" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaFlag className={style.menu__icon} />
                        <div className={style.title}>
                          Áreas
                        </div>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/time" className={({ isActive }) => (isActive ? style.active : "")}>
                        <FaUserFriends className={style.menu__icon} />
                        <div className={style.title}>
                          Time
                        </div>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/configuracoes" className={({ isActive }) => (isActive ? style.active : "")}>
                        <AiTwotoneSetting className={style.menu__icon} />
                        <div className={style.title}>
                          Configurações
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                <div className={style.user}>
                  <div className={style.user__infoA}>
                    <img src="assets/avatar.png" alt="usuário" className={style.user__img} />
                  </div>
                  <div className={style.user__infoB}>
                    <div className={style.user__nome}>
                      User Nome
                    </div>
                    <div className={style.user__cargo}>
                      User Cargo
                    </div>
                  </div>
                </div>


              </div>


            </header>

            <div className={style.pages}>

              <Routes>
                <Route path="/" element={<><ScrollToTop /></>} />
                <Route path="/dashboard" element={<><ScrollToTop /></>} />
                <Route path="/okrs" element={<><ScrollToTop /><NewOkr /></>} />
                <Route path="/tarefas" element={<><ScrollToTop /></>} />
                <Route path="/areas" element={<><ScrollToTop /></>} />
                <Route path="/time" element={<><ScrollToTop /></>} />
                <Route path="/configuracoes" element={<><ScrollToTop /></>} />
              </Routes>

            </div>

          </section>

        </>

      </Router>

    </>
  );
}