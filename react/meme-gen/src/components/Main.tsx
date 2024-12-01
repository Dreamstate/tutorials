import { useState, useEffect } from 'react'

type MemeObj = {
    topText: string;
    bottomText: string;
    imgURL: string;
}

type Meme = {
    url: string;
}
export default function Main() {
    const [memeObj, setMemeObj] = useState({
        topText: "",
        bottomText: "",
        imgURL: "http://i.imgflip.com/1bij.jpg"
    } as MemeObj)

    const [allMemes, setAllMemes] = useState<Meme[]>([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                setAllMemes(response.data.memes)
            })
        
    }, [])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget
        setMemeObj(prevMemeObj => ({
                ...prevMemeObj,
                [name]: value
        }))
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * allMemes.length)
        const randMemeImg = allMemes[randNum].url
        setMemeObj(prevMemeObj => ({
            ...prevMemeObj,
            imgURL: randMemeImg
        }))
    }
    
    return (
        <main> 
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={memeObj.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeObj.bottomText}
                    />
                </label>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeObj.imgURL} />
                <span className="top">{memeObj.topText}</span>
                <span className="bottom">{memeObj.bottomText}</span>
            </div>
        </main>
    )
}