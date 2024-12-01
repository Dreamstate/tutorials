import { languages } from "../utils";
import clsx from "clsx";

type Props = {
    wrongGuessCount: number;
}

export default function LangChips(props: Props) {
    const langEls = languages.map(((lang, index) => {
        const styles = {
                backgroundColor: lang.backgroundColor,
                color: lang.color,
        }

        const isLost = props.wrongGuessCount > index

        const className = clsx("chip", isLost && "lost")

        return (
        <span
            key={lang.name}
            style={styles}
            className={className}
        >
            {lang.name}
        </span>
        )
    }))

    return <section className="lang-chips">{langEls}</section>;
}
