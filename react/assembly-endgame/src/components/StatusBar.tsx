import clsx from "clsx"
import { getFarewellText, languages } from '../utils'

type Props = {
    isGameOver: boolean;
    isGameWon: boolean;
    isGameLost: boolean;
    wrongGuessCount: number;
    isLastGuessIncorrect: boolean;
}

export default function StatusBar(props: Props) {
    const gameStatusClass = clsx('game-status', {
        won: props.isGameWon,
        lost: props.isGameLost,
        farewell: !props.isGameOver && props.isLastGuessIncorrect
    })
    
    function renderGameStatus(): JSX.Element {
        if (!props.isGameOver && props.isLastGuessIncorrect) {
            return (
            <p className="farewell-message">
                {getFarewellText(languages[props.wrongGuessCount-1].name)}
            </p>
            )
        }

        if (props.isGameWon){
            return (
                <>
                <h2>You win!</h2>
                <p>Well done!🎉</p>
                </>
            )
        } 

        if (props.isGameLost) {
            return (
                <>
                <h2>Game over!</h2>
                <p>You lose! Better start learning Assembly!</p>
                </>
            )
        }
        return <></>
    }

    return (
        <section
        aria-live="polite"
        role="status"
        className={gameStatusClass}
        >
            {renderGameStatus()}
        </section>
    )
}