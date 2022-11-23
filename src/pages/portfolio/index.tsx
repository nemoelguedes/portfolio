import styleGeneral from "../../styles/Styles.module.scss";
import style from "./Portfolio.module.scss";

export default function Portfolio(){
  return(
    <section className={styleGeneral.page__section2}>
      <div className={styleGeneral.page__container}>

        <div className={styleGeneral["page__title--shadow"]}>
          portfólio
        </div>

        <div className={styleGeneral.page__title2}>
          portfólio<span className={styleGeneral.digit}>_</span>
        </div>

        <div className={styleGeneral.line}>
          <hr className={styleGeneral.lights}></hr>
        </div>


        <div className={style.portfolio}>

          Portfolio aqui



        </div>



      </div>
    </section>
  );
}