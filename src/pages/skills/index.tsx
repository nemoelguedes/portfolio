import style from "./Skills.module.scss";
import styleGeneral from "../../styles/Styles.module.scss";

export default function Skills() {
  return (
    <section className={styleGeneral.page__section2}>
      <div className={styleGeneral.page__containerTitle}>

        <div className={styleGeneral["page__title--shadow"]}>
          skills
        </div>

        <div className={styleGeneral.page__title2}>
          skills<span className={styleGeneral.digit}>_</span>
        </div>

        <div className={styleGeneral.line}>
          <hr className={styleGeneral.lights}></hr>
        </div>

      </div>
      <div className={styleGeneral.page__containerContent}>

        <div className={style.containerSkills}>


          <div className={style.title}>FRONT-END CODE</div>
          <div className={style.container}>

            <div className={style.skill__div}>
              <img src="assets/js.png" className={style.skill__img} alt="JavaScript" />
              <div className={style.skill__title}>JavaScript</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/ts.png" className={style.skill__img} alt="TypeScript" />
              <div className={style.skill__title}>TypeScript</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/react.png" className={style.skill__img} alt="React" />
              <div className={style.skill__title}>React</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/sass.png" className={style.skill__img} alt="Sass" />
              <div className={style.skill__title}>Sass</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/html.png" className={style.skill__img} alt="HTML" />
              <div className={style.skill__title}>HTML 5</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/css.png" className={style.skill__img} alt="CSS" />
              <div className={style.skill__title}>CSS 3</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/git.png" className={style.skill__img} alt="Git" />
              <div className={style.skill__title}>Git</div>
            </div>
          </div>

          <div className={style.title}>UI/UX DESIGN</div>
          <div className={style.container}>


            <div className={style.skill__div}>
              <img src="assets/figma.png" className={style.skill__img} alt="Figma" />
              <div className={style.skill__title}>Figma</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/ai.png" className={style.skill__img} alt="Illustrator" />
              <div className={style.skill__title}>Illustrator</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/ps.png" className={style.skill__img} alt="Photoshop" />
              <div className={style.skill__title}>Photoshop</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/branding.png" className={style.skill__img} alt="Branding" />
              <div className={style.skill__title}>Branding</div>
            </div>

            <div className={style.skill__div}>
              <img src="assets/seo.png" className={style.skill__img} alt="SEO" />
              <div className={style.skill__title}>SEO</div>
            </div>
          </div>

        </div>





      </div>
    </section>

  );
}