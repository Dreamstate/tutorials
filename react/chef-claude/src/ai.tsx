import { HfInference } from '@huggingface/inference'

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const systemPrompt = import.meta.env.VITE_SYSTEM_PROMPT;

if (!accessToken || !systemPrompt) {
  throw new Error('Missing required environment variables');
}

const hf = new HfInference(accessToken)

export async function getRecipeFromMistral(ingredientsArr: string[]) {
    const ingredients = ingredientsArr.join(', ')
    try {
        const response = await hf.chatCompletion({
            model: 'mistralai/Mistral-7B-Instruct-v0.3',
            messages: [
                {
                    role: 'system',
                    content: systemPrompt
                },
                {
                    role: 'user',
                    content: `I have ${ingredients}. Please give me a recipe you'd recommend I make.`
                }
            ],
            max_tokens: 1024
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error('Error:', err instanceof Error ? err.message : err)
    }
}   