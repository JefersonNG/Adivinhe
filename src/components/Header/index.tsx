import logo from "../../assets/logo.png";
import restart from "../../assets/restart.svg";
import styles from "./style.module.css";

type Props = {
  current: number;
  max: number;
  onRestart: () => void;
};

function Header({ current, max, onRestart }: Props) {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />
      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>
        <button type="button" onClick={onRestart}>
          <img src={restart} alt="Reiniciar" />
        </button>
      </header>
    </div>
  );
}

export { Header };
