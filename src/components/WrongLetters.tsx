import React from 'react';

function WrongLetters({ wrongLetters }: any) {
  return (
    <div className="wrong-letters">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter: string, idx: number) => <span key={idx}>{letter}</span>)
          .reduce((prev: string, curr: string) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  );
}

export default WrongLetters;