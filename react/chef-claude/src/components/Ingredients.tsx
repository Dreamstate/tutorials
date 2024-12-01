type Props = {
    ingredients: string[]
    getRecipe: () => void
}

export default function Ingredients(props : Props) {
    const ingredientElements = props.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));
    return (
        <section> 
            <h2>Ingredients on hand:</h2>
            <ul className="ingredientList">{ingredientElements}</ul>
            {props.ingredients.length > 3 ? <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div> : null}
            </section>
    )
}