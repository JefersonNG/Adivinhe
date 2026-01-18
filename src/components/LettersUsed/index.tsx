import { Letter } from "../Letter";
import styles from "./styles.module.css";

export type LetterUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LetterUsedProps[];
};

function LettersUsed({ data }: Props) {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras usadas</h5>
      <div>
        {data.map(({ value, correct }) => (
          <Letter
            key={value}
            value={value}
            size="small"
            color={correct ? "correct" : "wrong"}
          />
        ))}
      </div>
    </div>
  );
}

export { LettersUsed };
