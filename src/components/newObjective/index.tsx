
import style from "./NewObjective.module.scss";

export default function NewObjective(){
  return(
    <section className={style.section}>

      <h1>Novo Objetivo</h1>
      <h3>Descreva o que gostaria de alcançar. (Simples e Qualitativo)</h3>

      <label>Objetivo:</label>
      <input></input>

      <label>Data Inicial:</label>
      <input></input>

      <label>Data Final:</label>
      <input></input>

    </section>
  );
}