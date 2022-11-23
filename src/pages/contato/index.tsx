import styleGeneral from "../../styles/Styles.module.scss";

export default function Contato(){
  return(
    <section className={styleGeneral.page__section2}>
      <div className={styleGeneral.page__container}>

        <div className={styleGeneral["page__title--shadow"]}>
          contato
        </div>

        <div className={styleGeneral.page__title2}>
          contato<span className={styleGeneral.digit}>_</span>
        </div>

        <div className={styleGeneral.line}>
          <hr className={styleGeneral.lights}></hr>
        </div>



      </div>
    </section>
  )
}