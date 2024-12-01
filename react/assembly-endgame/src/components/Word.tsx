import clsx from "clsx"

type Props = {
    wordLetters: string[];
    guessedLetters: string[];
    lastGuessedLetter: string;
    numberGuesses: number;
    isGameLost: boolean;
}

export default function Word(props: Props) {
    const letterEls = props.wordLetters.map((letter, index) => {
        const letterClassName = clsx(
            props.isGameLost && !props.guessedLetters.includes(letter) && "missedLetter",
        )
        return (
            <span key={index} className={letterClassName}>
                {props.isGameLost ? letter.toUpperCase() : (props.guessedLetters.includes(letter) && letter.toUpperCase())}
            </span>
        )
    })

    return (
        <>
        <section className="word">
            {letterEls}
        </section>
        {/* Combined visually-hidden aria-live region for status updates */}
        <section className="sr-only" aria-live="polite" role="status">
            <p>
                {props.wordLetters.includes(props.lastGuessedLetter) ? 
                `Correct, the letter ${props.lastGuessedLetter} is in the word!` :
                `Sorry, the letter ${props.lastGuessedLetter} is not in the word!`   
            }
            You have {props.numberGuesses} attempts left.
            </p>
            <p>Current word: {props.wordLetters.map(letter => 
            props.guessedLetters.includes(letter) ? letter + "." : "blank.")
            .join(" ")}</p>
        </section>
        </>
    )
}