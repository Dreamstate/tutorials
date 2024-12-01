import { useState } from 'react'
import { languages, getRandomWord } from './utils'
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import LangChips from './components/LangChips'
import Word from './components/Word'
import Keyboard from './components/Keyboard'

export default function App() {
  const [currentWord, setWord] = useState(() => getRandomWord().split(''))
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const numberGuesses = languages.length - 1
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon = currentWord.every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= numberGuesses
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  function guessLetter(letter: string) {
    setGuessedLetters(prevLetters => 
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
      // or create a Set which doesn't allow duplicates
      // convert bacк to array to return it
    )
  }

  function resetGame() {
    setGuessedLetters([])
    setWord(getRandomWord().split(''))
  }

  return (
    <main>
      <Header />
      <StatusBar 
      isGameOver={isGameOver}
      isGameWon={isGameWon}
      isGameLost={isGameLost}
      wrongGuessCount={wrongGuessCount}
      isLastGuessIncorrect={isLastGuessIncorrect as boolean}
      />
      <LangChips
      wrongGuessCount={wrongGuessCount}
      />
      <Word
      isGameLost={isGameLost}
      wordLetters={currentWord}
      guessedLetters={guessedLetters}
      lastGuessedLetter={lastGuessedLetter}
      numberGuesses={numberGuesses}
      />
      <Keyboard 
      guessLetter={guessLetter}
      wordLetters={currentWord}
      guessedLetters={guessedLetters}
      isGameOver={isGameOver}
      />
      {isGameOver && <button
      className='new-game'
      onClick={resetGame}
      >New Game</button>}
    </main>
  )
}
