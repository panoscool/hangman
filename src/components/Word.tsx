import React from 'react';

function Word({ selectedWord, correctLetters }: any) {
  return (
    <div className="word">
      {selectedWord.split('').map((letter: string, idx: number) => (
        <span key={idx} className="letter">
          {correctLetters.includes(letter) ? letter : ''}
        </span>
      ))}
    </div>
  );
}

export default Word;