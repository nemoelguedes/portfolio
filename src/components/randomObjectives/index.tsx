import style from "./RandomObjectives.module.scss";
import objectivesList from "../../data/randomObjectives.json";
import { useState } from "react";
import { FaCaretRight, FaCodeBranch, FaRandom } from "react-icons/fa";

export default function RandomObjectives() {

  const [random, setRandom] = useState(1);

  const objectives = objectivesList;

  const randomNumber = (e: any) => {
    e.preventDefault()
    const randomMin = Math.ceil(1);
    const randomMax = Math.floor(objectives.length);
    const first = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;

    const randomNumber = first - 1;

    if (randomNumber !== random) {
      setRandom(randomNumber);

    } else if (randomNumber === random && randomNumber === 0) {
      setRandom(randomNumber + 1);

    } else if (randomNumber === random && randomNumber !== 0) {
      setRandom(randomNumber - 1);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.o}>

        <FaCodeBranch className={style.item} />
        O - {objectives[random].objetivo}
      </div>

      <div className={style.kr}>
        <FaCaretRight className={style.item} />
        KR 1 - {objectives[random].krs[0]}
      </div>

      <div className={style.kr}>
        <FaCaretRight className={style.item} />
        KR 2 - {objectives[random].krs[1]}
      </div>

      <div className={style.kr}>
        <FaCaretRight className={style.item} />
        KR 3 - {objectives[random].krs[2]}
      </div>


      <div className={style.container__button}>


        <button type="button" className={style.button} onClick={randomNumber}>
          <FaRandom className={style.item__button} />
          Gerar OKR Aleatório
        </button>
      </div>
    </div>
  );
}