import React from 'react';
import { showNotification as show } from '../helpers';

interface Props {
  selectedWord: string[];
  correctLetters: string[];
  wrongLetters: string[];
  setCorrectLetters: (e: any) => void;
  setWrongLetters: (e: any) => void;
  setShowNotification: () => void;
}

function ScreenKeyboard({ selectedWord, correctLetters, wrongLetters, setCorrectLetters, setWrongLetters, setShowNotification }: Props) {
  function handleLetterClick(letter: string) {
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters((correctLetters: any) => [...correctLetters, letter]);
      } else {
        show(setShowNotification);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters((wrongLetters: any) => [...wrongLetters, letter]);
      } else {
        show(setShowNotification);
      }
    }
  }

  const letters = [...Array(26)].map((_, idx) => String.fromCharCode(idx + 65));
  return (
    <div className="screen-letters">
      {letters.map((letter, index) => {
        const letterKey = letter.toLowerCase();
        return (
          <span key={index} onClick={() => handleLetterClick(letterKey)}>{letter}</span>
        );
      })}
    </div>
  );
}

export default ScreenKeyboard;