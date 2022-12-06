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
          tech marketing<span className={styleGeneral.digit1}>_</span>
        </div>
        <div className={style.subtitle}>Leadership
          <span className={style.space}>|</span>
          <span className={style.name}>
          Growth Hacking</span><span className={style.space}>|</span>
          Branding

        </div>
      </div>

      <div className={style.containerImage}>
        <img src="assets/nemoel.png" className={style.image} alt="nemoel" />
      </div>

    </section>
  );
}