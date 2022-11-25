import styleGeneral from "../../styles/Styles.module.scss";
import style from "./Depoimentos.module.scss";
import { FaLinkedin, FaQuoteLeft, FaQuoteRight, FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import depoimentosList from "../../data/depoimentos.json";
import classNames from "classnames";
import { useState } from "react";

export default function Depoimentos() {

  const [number, setNumber] = useState(0);

  console.log(number);

  const depoimentos = depoimentosList;

  function clickArrowLeft() {
    if (number > 0) {
      setNumber(number - 1);
      console.log(number);
    }
  }

  function clickArrowRight() {
    if (depoimentosList.length > number + 1) {
      setNumber(number + 1);
      console.log(number);
    }
  }


  return (
    <section className={styleGeneral.page__section2}>
      <div className={styleGeneral.page__containerTitle}>

        <div className={styleGeneral["page__title--shadow"]}>
          depoimentos
        </div>

        <div className={styleGeneral.page__title2}>
          depoimentos<span className={styleGeneral.digit}>_</span>
        </div>

        <div className={styleGeneral.line}>
          <hr className={styleGeneral.lights}></hr>
        </div>
      </div>
      <div className={styleGeneral.page__containerContent}>

        <div className={style.depoimentos}>

          <div className={classNames({
            [style.arrow__left]: true,
            [number > 0 ? style["arrow--active"] : style["arrow--inactive"]]: true,
          })}><FaArrowAltCircleLeft className={style.arrow} onClick={clickArrowLeft} /></div>

          <div className={classNames({
            [style.arrow__right]: true,
            [depoimentosList.length > number + 1 ? style["arrow--active"] : style["arrow--inactive"]]: true,
            [style.arrow__mobile]: true,
          })}><FaArrowAltCircleRight className={style.arrow} onClick={clickArrowRight} /></div>

          {[depoimentos[number]].map((r: any, index: any) => <div className={style.single__depoimento} key={index}>

            <div className={style.person}>
              <img className={style.img} alt={r.nome} src={r.foto} />

            </div>

            <div className={style.data}>
              <div className={style.nome}>{r.nome}</div>
              <div className={style.cargo}>{r.cargo}</div>
              <div className={style.empresa}>{r.empresa}</div>

              <a href={r.linkedin} target="_blank">
                <FaLinkedin className={style.social} />
              </a>

            </div>

            <div className={style.text}>
              <FaQuoteLeft className={style.quote__left} />
              <div className={style.text__margin}>{r.depoimento}</div>
              <FaQuoteRight className={style.quote__right} />
            </div> </div>)}

          <div className={classNames({
            [style.arrow__right]: true,
            [depoimentosList.length > number + 1 ? style["arrow--active"] : style["arrow--inactive"]]: true,
            [style.arrow__desktop]: true,
          })}><FaArrowAltCircleRight className={style.arrow} onClick={clickArrowRight} /></div>
        </div>





      </div>
    </section>
  )
}