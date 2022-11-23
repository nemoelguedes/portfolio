import style from "./Experiencias.module.scss";
import styleGeneral from "../../styles/Styles.module.scss";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { useState } from "react";
import experiencias from "../../data/experiencias.json";


const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2007];


export default function Experiencias() {

  const [selected, setSelected] = useState("rede");

  const timelineLength = 100 / years.length;

  console.log(timelineLength);

  const jobs = experiencias.filter((r:any) => r.type === "job");
  const cursos = experiencias.filter((r:any) => r.type === "curso");



  return (
    <section className={styleGeneral.page__section}>
      <div className={styleGeneral.page__container}>

        <div className={styleGeneral.page__title}>
          minhas<span className={styleGeneral.page__name}> experiências</span>
        </div>


        <div className={style.inTime}>

          {jobs.map((r: any) =>
            <div className={style.timeline__experience} style={{
              width: `${r.time * 80}px`
            }} onMouseEnter={() => setSelected(r.id)}>
              <FaLaptopCode className={style.timeline__icons} />
              <hr className={style.hr}></hr>
            </div>
          )}

        </div>

        <div className={style.years}>
          {years.map((r: any) => <div className={style.year}>{r}</div>)}
        </div>

        <div className={style.inTime}>


          {years.map((r: any) =>
            <div className={style["timeline__experience--curso"]} style={{
              width: `80px`
            }}><hr className={style.hr__curso}></hr>
              {cursos.filter((e: any) => e.years === r).map((x: any) =>
                <FaGraduationCap className={style["timeline__icons--curso"]} onMouseEnter={() => setSelected(x.id)} />)}
            </div>
          )}


        </div>



        

        {experiencias.filter((r: any) => r.id === selected).map((r: any) =>

          <div className={style.info}>

            <div className={style.experience}>
              {r.name}
            </div>

            <div className={style.subtitle}>
              {r.subtitles} | {r.years}
            </div>

            <div className={style.text}>
              {r.text}
            </div>

          </div>)}


      </div>
    </section>
  );
}