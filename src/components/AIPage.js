import OpenAI from "openai"
import { useState } from "react"

const APIkey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({apiKey: APIkey, dangerouslyAllowBrowser: true})

export default function AIPage (props) {
    const [response, setResponse] = useState('')
    const [prompt, setPrompt] = useState('')
    const [awaitingRequest, setAwaitingRequest] = useState(false)
    

    const makeRequest = async () => {
        setAwaitingRequest(true)
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: `${prompt}`}],
            model: "gpt-3.5-turbo",
        });
        setResponse(completion.choices[0].message.content)
        setAwaitingRequest(false)
    }

    return (
        <div>
            <h1>It's Robot Time!!</h1>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
            <div>
                <p>{awaitingRequest ? 'awaiting response...' : ''}</p>
                <p>{response ? response : ''}</p>
            </div>
            <button onClick={() => makeRequest()}>Ask the Robot</button>
        </div>
    )
}