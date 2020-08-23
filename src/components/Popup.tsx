import React, { useEffect } from 'react';
import { checkWin } from '../helpers';

interface Props {
  selectedWord: string;
  correctLetters: string[]
  wrongLetters: string[]
  setPlayable: (e: any) => void;
  playAgain: () => void;
}

function Popup({ selectedWord, correctLetters, wrongLetters, setPlayable, playAgain }: Props) {
  let playable = true;
  let finalMessage = '';
  let finalMessageRevealWord = '';

  if (checkWin(selectedWord, correctLetters, wrongLetters) === 'win') {
    playable = false;
    finalMessage = 'Congratulations! You won! 😃';
    // setPlayable(false) ERROR: cannot update state rendering another component
  } else if (checkWin(selectedWord, correctLetters, wrongLetters) === 'lose') {
    playable = false;
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;