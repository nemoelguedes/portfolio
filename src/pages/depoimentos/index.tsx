import styleGeneral from "../../styles/Styles.module.scss";
import style from "./Depoimentos.module.scss";

export default function Depoimentos() {

  return (
    <section className={styleGeneral.page__section2}>
      <div className={styleGeneral.page__container}>

        <div className={styleGeneral["page__title--shadow"]}>
          depoimentos
        </div>

        <div className={styleGeneral.page__title2}>
          depoimentos<span className={styleGeneral.digit}>_</span>
        </div>

        <div className={styleGeneral.line}>
          <hr className={styleGeneral.lights}></hr>
        </div>

        <div className={style.depoimentos}>
          Depoimentos aqui
        </div>



      </div>
    </section>
  )
}