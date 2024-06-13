import { useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import './App.css'

function App() {

  const [word] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attemps, setAttemps] = useState(0);

  const checkLetter = (letter: string) => {

    if (!word.includes(letter)) {
      setAttemps(Math.min(attemps + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');
    
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));

  }

  return (
    <>
      <div className='App'>
        {/* Imagenes */}
        <HangImage imageNumber={attemps} />

        {/* Palabra oculta */}
        <h3>{hiddenWord}</h3>

        {/* Contador de intentos */}
        <h3>Intentos: {attemps}</h3>

        {/* Botones de letras */}
        {
          letters.map((letter) => (
            <button
              onClick={() => checkLetter(letter)}
              key={letter}
            >
              {letter}
            </button>
          ))
        }
      </div>
    </>
  )

};

export default App;
