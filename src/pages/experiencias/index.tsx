import style from "./Experiencias.module.scss";
import styleGeneral from "../../styles/Styles.module.scss";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { useState } from "react";
import experiencias from "../../data/experiencias.json";
import classNames from "classnames";


const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2007];


export default function Experiencias() {

  const [selected, setSelected] = useState("rede");

  const timelineLength = 100 / years.length;

  console.log(timelineLength);

  const jobs = experiencias.filter((r: any) => r.type === "job");
  const cursos = experiencias.filter((r: any) => r.type === "curso");



  return (
    <section className={styleGeneral.page__section}>
      <div className={styleGeneral.page__containerTitle}>

        <div className={styleGeneral["page__title--shadow1"]}>
          experiências
        </div>

        <div className={styleGeneral.page__title}>
          experiências<span className={styleGeneral.digit1}>_</span>
        </div>

        <div className={styleGeneral.line}>
          <hr className={styleGeneral.lights}></hr>
        </div>
      </div>
      <div className={styleGeneral.page__containerContent}>

        <div className={style.container}>


          <div className={style.inTime}>

            {jobs.map((r: any) =>
              <div className={classNames({
                [style.timeline__experience]: true,
                [selected === r.id ? style.active : ""]: true,
              })} style={{
                width: `${r.time * 80}px`
              }} onMouseEnter={() => setSelected(r.id)}>
                <FaLaptopCode className={classNames({
                  [style.timeline__icons]: true,
                })} />
                <hr className={classNames({
                  [style.hr]: true,
                  [selected === r.id ? style.activeHr : ""]: true,
                })}></hr>
              </div>
            )}

          </div>

          <div className={style.years}>
            {years.map((r: any) => <div className={style.year}>{r}</div>)}
          </div>


          <div className={style.inTime}>

            {cursos.map((r: any) =>
              <div className={classNames({
                [style.timeline__experience]: true,
                [selected === r.id ? style.active : ""]: true,
              })} style={{
                width: `${r.time * 80}px`
              }} onMouseEnter={() => setSelected(r.id)}>
                <hr className={classNames({
                  [style.hr]: true,
                  [selected === r.id ? style.activeHr : ""]: true,
                })}></hr>
                <FaGraduationCap className={classNames({
                  [style.timeline__icons]: true,
                })} />
                
              </div>
            )}

          </div>





          {experiencias.filter((r: any) => r.id === selected).map((r: any) =>

            <div className={style.info}>

              <div className={style.experience}>
                {r.name}
              </div>

              <div className={style.subtitle}>
                {r.subtitles} {r.subtitle === "" ? "|" : ""} {r.years}
              </div>

              <div className={style.text}>
                {r.text}
              </div>

            </div>)}

        </div>


      </div>
    </section>
  );
}