import clsx from "clsx"

type Props = {
    wordLetters: string[]
    guessedLetters: string[]
    isGameOver: boolean
    guessLetter: (letter: string) => void
}

export default function Keyboard(props: Props) {
    const keyEls = 'abcdefghijklmnopqrstuvwxyz'.split('')
    .map(letter => {
        const isGuessed = props.guessedLetters.includes(letter) && props.wordLetters.includes(letter)
        const isWrong = props.guessedLetters.includes(letter) && !props.wordLetters.includes(letter)
        const className = clsx({
            correct: isGuessed,
            wrong: isWrong
        })
    
        return (
        <button
        disabled={props.isGameOver}
        aria-disabled={props.guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        className={className}
        key={letter}
        onClick={() => props.guessLetter(letter)}
        >{letter.toUpperCase()}
        </button>
        )
    })

    
    return (
        <section className="keyboard">
            {keyEls}
        </section>
    )
}