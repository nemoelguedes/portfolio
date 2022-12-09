import styleGeneral from "../../styles/Styles.module.scss";
import style from "./Contato.module.scss";
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contato() {
  return (
    <section className={styleGeneral.page__section2}>
      <div className={styleGeneral.page__containerTitle}>

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
      <div className={styleGeneral.page__containerContent}>

        <div className={style.container}>
          <div className={style.data}>
            <div className={style.name}>
              Nemoel Guedes
            </div>
            <div className={style.links}>
              <a href="https://www.linkedin.com/in/nemoelguedes/" target="blank">
                <FaLinkedin className={style.social} />
              </a>
              <a href="https://github.com/nemoelguedes" target="blank">
                <FaGithub className={style.social} />
              </a>
            </div>
            <div className={style.info}>
              <FaWhatsapp className={style.icon} />
              (48) 98455-0797
            </div>
            <div className={style.info}>
              <FaEnvelope className={style.icon} />
              nemoelguedes@outlook.com
            </div>
            <div className={style.info}>
              <FaMapMarkerAlt className={style.icon} />
              Florianópolis/SC
            </div>



          </div>
        </div>



      </div>
    </section>
  )
}