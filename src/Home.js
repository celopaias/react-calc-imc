import styles from "./Home.module.css";
import { useState } from "react";
import poweredImage from "./assets/powered.png";
import leftArrowImg from "./assets/leftarrow.png";
import { levels, calculateIMC } from "./helpers/imc";

import { GridItem } from "./components/GridItem";
const Home = () => {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState(null);

  const cleanAll = () => {
    setHeightField(0);
    setWeightField(0);
    setToShow(null);
  };

  const getResult = () => {
    if (heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField));
      console.log(toShow);
    } else {
      alert("Digite todos os campos");
    }
  };
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} width="150px" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Exemplo: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(e.target.value)}
            disabled={toShow ? true : false}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Exemplo: 75.3 (em Kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(e.target.value)}
            disabled={toShow ? true : false}
          />

          <button disabled={toShow ? true : false} onClick={() => getResult()}>
            Calcular
          </button>
        </div>

        <div className={styles.rightside}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}>
                <img
                  src={leftArrowImg}
                  onClick={() => cleanAll()}
                  alt="arrow"
                  width="20"
                />
              </div>
              <GridItem item={toShow} />
              {console.log(toShow)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
