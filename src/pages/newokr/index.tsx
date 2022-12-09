import NewObjective from "components/newObjective";
import RandomObjectives from "components/randomObjectives";
import style from "./NewOkr.module.scss";

export default function NewOkr() {
  return (
    <section className={style.section}>

      <div className={style.containerA}>
        <NewObjective />
      </div>
      <div className={style.containerB}>
        <RandomObjectives />
      </div>

    </section>
  );
}