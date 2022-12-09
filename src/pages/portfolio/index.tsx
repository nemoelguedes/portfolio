import styleGeneral from "../../styles/Styles.module.scss";
import style from "./Portfolio.module.scss";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaGithub, FaLink } from "react-icons/fa";
import portfolioList from "../../data/portfolio.json";
import classNames from "classnames";
import { useState } from "react";

export default function Portfolio() {

  const [number, setNumber] = useState(0);

  const portfolio = portfolioList;

  function clickArrowLeft() {
    if (number > 0) {
      setNumber(number - 1);
      console.log(number);
    }
  }

  function clickArrowRight() {
    if (portfolioList.length > number + 1) {
      setNumber(number + 1);
      console.log(number);
    }
  }

  return (
    <section className={styleGeneral.page__section2}>
      <div className={styleGeneral.page__containerTitle}>

        <div className={styleGeneral["page__title--shadow"]}>
          portfólio
        </div>

        <div className={styleGeneral.page__title2}>
          portfólio<span className={styleGeneral.digit}>_</span>
        </div>

        <div className={styleGeneral.line}>
          <hr className={styleGeneral.lights}></hr>
        </div>
      </div>
      <div className={styleGeneral.page__containerContent}>

        <div className={style.portfolio}>

          <div className={classNames({
            [style.arrow__left]: true,
            [number > 0 ? style["arrow--active"] : style["arrow--inactive"]]: true,
          })}><FaArrowAltCircleLeft className={style.arrow} onClick={clickArrowLeft} /></div>

          <div className={classNames({
            [style.arrow__right]: true,
            [portfolioList.length > number + 1 ? style["arrow--active"] : style["arrow--inactive"]]: true,
            [style.arrow__mobile]: true,
          })}><FaArrowAltCircleRight className={style.arrow} onClick={clickArrowRight} /></div>

          {[portfolio[number]].map((r: any, index: any) => <div className={style.single__portfolio} key={index}>

            <div className={style.dataA}>

              <div className={style.title}>{r.title}</div>
              <div className={style.text}>{r.text}</div>
              <div className={style.icons}>
                {r.tools.map((e: any, index: any) => <><img src={e} alt="index" className={style.icon} /></>)}
              </div>
              <div className={style.actions}>
                <a href={r.link} target="_blank">
                  <button type="button" className={style.button}>
                    <FaLink className={style.link} />
                    Visualizar Demonstração
                  </button>
                </a>
                <a href={r.github} target="_blank">
                  <button type="button" className={style.gitButton}>
                    <FaGithub className={style.github} />
                    Ver no Github
                  </button>

                </a>
              </div>


            </div>

            <div className={style.dataB}>
              <img src={r.img} alt={r.title} className={style.image} />

            </div>
          </div>)}

          <div className={classNames({
            [style.arrow__right]: true,
            [portfolioList.length > number + 1 ? style["arrow--active"] : style["arrow--inactive"]]: true,
            [style.arrow__desktop]: true,
          })}><FaArrowAltCircleRight className={style.arrow} onClick={clickArrowRight} /></div>
        </div>



      </div>
    </section >
  );
}