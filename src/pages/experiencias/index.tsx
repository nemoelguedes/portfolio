import style from "./Experiencias.module.scss";
import styleGeneral from "../../styles/Styles.module.scss";
import { FaGraduationCap, FaDotCircle } from "react-icons/fa";
import { CgEditBlackPoint } from "react-icons/cg";
import experienciasList from "../../data/experiencias.json";
import classNames from "classnames";
import { useState } from "react";

export default function Experiencias() {

  const [filtroJobs, setFiltroJobs] = useState(true);
  const [filtroCursos, setFiltroCursos] = useState(true);

  const experienciasFiltros = experienciasList.filter(
    (r: any) => filtroJobs === false ? r.type === "job" : r).filter(
      (r: any) => filtroCursos === false ? r.type === "curso" : r);


  const experiencias = experienciasFiltros.sort(function (a: any, b: any) {
    if (a.yearEnd > b.yearEnd) { return 1; } if (a.yearEnd < b.yearEnd) { return -1; } return 0;
  }).reverse();

  return (
    <section className={styleGeneral.page__section2}>
      <div className={styleGeneral.page__containerTitle}>

        <div className={styleGeneral["page__title--shadow"]}>
          experiências
        </div>

        <div className={styleGeneral.page__title2}>
          experiências<span className={styleGeneral.digit}>_</span>
        </div>

        <div className={styleGeneral.line}>
          <hr className={styleGeneral.lights}></hr>
        </div>
      </div>

      <div className={styleGeneral.page__containerContent}>

        <div className={style.container}>

          <div className={style.filtros}>
            <button type="button" className={classNames({
              [filtroJobs === true && filtroCursos === true ? style["filter--selected"] : style["filter--notSelected"]]: true,
            })} onClick={() => { setFiltroJobs(true); setFiltroCursos(true) }}>
              TODAS AS EXPERIÊNCIAS
            </button>
            <button type="button" className={classNames({
              [filtroJobs === false && filtroCursos === true ? style["filter--selected"] : style["filter--notSelected"]]: true,
            })} onClick={() => { setFiltroJobs(false); setFiltroCursos(true) }}>
              APENAS TRABALHOS
            </button>
            <button type="button" className={classNames({
              [filtroJobs === true && filtroCursos === false ? style["filter--selected"] : style["filter--notSelected"]]: true,
            })} onClick={() => { setFiltroJobs(true); setFiltroCursos(false) }}>
              APENAS CURSOS
            </button>
          </div>

          <div className={classNames({
            [style.borderColor__empty]: true,
          })}>
            <span className={style.spacing}>
            </span>
          </div>


          {experiencias.map((r: any) => <>

            {r.type === "job"
              ? <div className={classNames({
                [style.singleExperience]: true,
                [style.borderColor__job]: true,
              })}>
                <div className={style.timeline__job}>
                  <CgEditBlackPoint className={style.dot__job} />
                  <hr className={style.spacer__job}></hr>
                  <img src={r.img} className={style.img} alt={r.name} />
                </div>

                <div className={style.titles}>
                  <div className={style.experience}>
                    {r.name}
                  </div>
                  <div className={style.subtitle}>
                    {r.subtitles}
                  </div>
                  <div className={style.years}>
                    {r.yearStart === r.yearEnd ? r.yearStart : r.yearStart + " | " + r.yearEnd}
                  </div>
                </div>

                <div className={style.data__job}>
                  <div className={style.text}>
                    {r.text.map((r: any) => <>{r}<br /><br /></>)}
                  </div>
                </div>
              </div>
              : <div className={classNames({
                [style.singleExperience]: true,
                [style.borderColor__curso]: true,
              })}>
                <div className={style.timeline__curso}>
                  <CgEditBlackPoint className={style.dot__curso} />
                  <hr className={style.spacer__curso}></hr>
                  <FaGraduationCap className={style.icon__curso} />
                </div>

                <div className={style.data__curso}>
                  <div className={style.title__curso}>
                    {r.name} - {r.yearStart === r.yearEnd ? r.yearStart : r.yearStart + " | " + r.yearEnd}
                  </div>
                  <div className={style.text}>
                    {r.text.map((r: any) => <>{r}<br /><br /></>)}
                  </div>
                </div>
              </div>
            }




          </>)}

          <div className={classNames({
            [style.borderColor__empty]: true,
          })}>
            <span className={style.spacing}>
            </span>
          </div>

        </div>
      </div>




    </section >
  );
}