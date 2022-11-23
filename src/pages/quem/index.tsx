import style from "./Quem.module.scss";
import styleGeneral from "../../styles/Styles.module.scss";

export default function QuemSou() {
  return (
    <section className={style.section}>

      <div className={style.containerText}>
        <div className={style.title}>
          Olá,
          <br />
          sou
          <span className={style.name}> Nemoel.</span>
        </div>
        <div className={style.subtitle}>
          <span className={style.name}>
            Product-Led Growth<span className={styleGeneral.digit}>_</span>
          </span>
          <br />
          Leadership
          <span className={style.space}>|</span>
          Front-end Developer
          <span className={style.space}>|</span>
          Growth Hacking
          <span className={style.space}>|</span>
          UI UX Design

        </div>
      </div>

      <div className={style.containerImage}>
        IMAGEM
      </div>

    </section>
  );
}