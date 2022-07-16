import React, { useState } from 'react';
import dotenv from  'dotenv'


const Meme = ({ meme, setMeme }) => {

    const [form, setForm] = useState({
        template_id: meme.id,
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_PASSWORD,
        boxes: []
    });

    const generateMemes = () => {

        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box, index) => {
           return url += `&boxes[${index}][text]=${box.text}`;
        })
        fetch(url).then(res => res.json())
            .then(xyz => {

                if (xyz.success === true) {
                    setMeme({ ...meme, url: xyz.data.url })
                }
            })
        console.log(url);
    }

    return (
        <>
            <div className="meme">
                <img src={meme.url} alt="meme " />
                <div className="input">
                    {
                        [...Array(meme.box_count)].map((_, index) => (
                            <input key={index} type="text"
                                placeholder={`Meme Caption ${index + 1}`}
                                onChange={(e) => {
                                    const newBoxes = form.boxes;
                                    newBoxes[index] = { text: e.target.value };
                                    setForm({ ...form, boxes: newBoxes })
                                }} />
                        ))
                    }
                </div>
                <div className="buttons">
                    <button onClick={generateMemes}>Generate Meme</button>
                    <button onClick={() => {
                        setMeme(null);
                    }}>
                        Choose Template</button>
                </div>
            </div>

        </>
    )
}

export default Meme
