import ReactMarkdown from 'react-markdown'

type Props = {
    recipe: string
}

export default function Recipe(props: Props){
    return <section className='suggested-recipe-container' aria-live='polite'>
    <h2>Chef Claude Recommends:</h2>
    <ReactMarkdown children={props.recipe} />
</section>
}