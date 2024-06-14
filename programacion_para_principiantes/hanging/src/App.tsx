import { useEffect, useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWords';
import './App.css'

function App() {

  const [word, setWord] = useState(getRandomWord);
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attemps, setAttemps] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  // DETERMINAR SI LA PERSONA PERDIO
  useEffect(() => {
    if (attemps >= 9) {
      setLose(true);
    }
  }, [attemps]);

  // DETERMINAR SI LA PERDIO GANO
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord == word) {
      setWon(true);
    }
  }, [hiddenWord])

  const checkLetter = (letter: string) => {

    if (lose || won) return;

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

  const newGame = () => {
    const newWord = getRandomWord();
    setWord( newWord );
    setHiddenWord('_ '.repeat(word.length));
    setAttemps(0);
    setLose(false);
    setWon(false);
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

        {/* Mensajes si perdio */}
        {
          (lose)
            ? <h3>Perdio, la palabra era {word}</h3>
            : ''
        }

        {/* MENSAJE DE SI GANO */}
        {
          (won)
            ? <h3>Ganaste!!</h3>
            : ''
        }

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

        {/* BOTON DE REINICIAR */}
        <br /><br />
        <button onClick={ newGame }>¿Nuevo juego?</button>

      </div>
    </>
  )

};

export default App;
