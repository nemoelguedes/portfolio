import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Contato from "./contato";
import Depoimentos from "./depoimentos";
import Experiencias from "./experiencias";
import Portfolio from "./portfolio";
import QuemSou from "./quem";
import Skills from "./skills";
import style from "./App.module.scss";
import { FaUserAlt, FaSuitcase, FaStar, FaLaptopCode, FaPhoneAlt, FaComments } from "react-icons/fa";

export default function App() {
  return (
    <>
      <Router>
        <>
          <section className={style.section}>
            <div className={style.menu}>
              <nav>
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
                  <li className={style.li}>
                    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? style.active : "")}>
                      <FaLaptopCode className={style.menu__icon} />
                      <div className={style.title}>
                        Portfólio
                      </div>
                    </NavLink>
                  </li>
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

            <div className={style.pages}>

              <Routes>
                <Route path="/" element={<QuemSou />} />
                <Route path="/experiencias" element={<Experiencias />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/depoimentos" element={<Depoimentos />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contato" element={<Contato />} />
              </Routes>

            </div>

          </section>

        </>

      </Router>

    </>
  );
}