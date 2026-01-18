import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, type LetterUsedProps } from "./components/LettersUsed";

import { WORDS, type Challenge } from "./utils/words";

function App() {
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [lettersUsed, setLetterUsed] = useState<LetterUsedProps[]>([]);
  const [letter, setLetter] = useState("");
  const [score, setScore] = useState(0);

  const ATTEMPTS_MARGIN = 2;

  function handleRestartGame() {
    startGame();
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);

    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setScore(0);
    setLetter("");
    setLetterUsed([]);
  }

  function handleConfirm() {
    if (!challenge) return;

    if (!letter.trim()) return alert("Digite letra valida");

    if (!Number.isNaN(Number(letter))) return alert("Digite uma letra");

    const value = letter.toLocaleUpperCase();

    const exists = lettersUsed.find(
      (used) => used.value.toUpperCase() === value
    );

    if (exists) {
      setLetter("");
      return alert("Voce ja utilizou esta letra " + value);
    }

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setScore(currentScore);

    setLetterUsed((prevState) => [...prevState, { value, correct }]);

    setLetter("");
  }

  function endGame(message: string) {
    startGame();
    return alert(message);
  }

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challenge) return;

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns, voce descobriu a palavra");
      }

      if (lettersUsed.length === challenge.word.length + ATTEMPTS_MARGIN) {
        return endGame("Que pena, voce usou todas as tentativa");
      }
    }, 200);
  }, [score, lettersUsed]);

  if (!challenge) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.length}
          max={challenge.word.length + ATTEMPTS_MARGIN}
          onRestart={handleRestartGame}
        />
        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find((used) => {
              return used.value.toUpperCase() === letter.toUpperCase();
            });

            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                color={letterUsed?.correct ? "correct" : "default"}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            name="letter"
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}

export { App };
