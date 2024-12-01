import { useState } from "react"
import Ingredients from "./Ingredients"
import Recipe from "./Recipe"
import { getRecipeFromMistral} from "../ai.tsx"

export default function Main() {
    const [ingredients, setIngredients] = useState<string[]>([])
    const [recipe, setRecipe] = useState<string>("")

    function addIngredient(formData: FormData) {
        const newIngredient = formData.get('ingredient')
        // if you want to change the previous state, it's common practice to use a function
        // directly changing the state variable can lead to bugs, because React may batch state updates
        // when updating objects you can also spread the previous object and overwrite the changed properties
        // in javascpirt and typescript duplicate properties are overwritten by the last one
        setIngredients(prevIngredients => newIngredient ? [...prevIngredients, newIngredient as string] : prevIngredients)
    }

    async function getRecipe() { 
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(typeof generatedRecipe === 'string' ? generatedRecipe : "No recipe found")
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                aria-label="Add ingredient"
                type="text" 
                placeholder="e.g. oregano" 
                name="ingredient"
                />
                <button >Add ingredient</button>
            </form>
            {ingredients.length > 0 ? <Ingredients ingredients={ingredients} getRecipe={getRecipe} /> : null}
            {recipe != "No recipe found" ? <Recipe recipe={recipe} /> :recipe}
        </main>
    )
}