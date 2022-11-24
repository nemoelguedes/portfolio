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
          <span className={style.name}> Nemoel</span>,
          <br />
          dev front-end<span className={styleGeneral.digit1}>_</span>
        </div>
        <div className={style.subtitle}>
          <span className={style.name}>
          UX/UI Designer</span><span className={style.space}>|</span>Leadership
          <span className={style.space}>|</span>
          Growth Hacking

        </div>
      </div>

      <div className={style.containerImage}>
        <img src="assets/nemoel.png" className={style.image} alt="nemoel" />
      </div>

    </section>
  );
}