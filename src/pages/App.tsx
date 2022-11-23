import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
                    <Link to="/">
                      <FaUserAlt className={style.menu__icon} />
                      <div className={style.title}>
                        Quem Sou
                      </div>
                    </Link>
                  </li>
                  <li className={style.li}>
                    <Link to="/experiencias">
                      <FaSuitcase className={style.menu__icon} />
                      <div className={style.title}>
                        Experiências
                      </div>
                    </Link>
                  </li>
                  <li className={style.li}>
                    <Link to="/skills">
                      <FaStar className={style.menu__icon} />
                      <div className={style.title}>
                        Skills
                      </div>
                    </Link>
                  </li>
                  <li className={style.li}>
                    <Link to="/depoimentos">
                      <FaComments className={style.menu__icon} />
                      <div className={style.title}>
                        Depoimentos
                      </div>
                    </Link>
                  </li>
                  <li className={style.li}>
                    <Link to="/portfolio">
                      <FaLaptopCode className={style.menu__icon} />
                      <div className={style.title}>
                        Portfólio
                      </div>
                    </Link>
                  </li>
                  <li className={style.li}>
                    <Link to="/contato">
                      <FaPhoneAlt className={style.menu__icon} />
                      <div className={style.title}>
                        Contato
                      </div>
                    </Link>
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