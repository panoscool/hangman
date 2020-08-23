export function showNotification(setter: (e: any) => void) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(word: string, correct: string[], wrong: string[]) {
  let status = 'win';

  // check for win
  word.split('').forEach((letter: string) => {
    if (!correct.includes(letter)) {
      status = '';
    }
  });

  // check for lose
  if (wrong.length === 6) status = 'lose';

  return status;
}