const home = ({ templates, setMeme }) => {
    return (
        <div className="templates">
            {templates.map((template) => (
                <div key={template.id} className="temp" onClick={() => {
                    setMeme(template);
                }} >
                    <div className="images" >
                        <img src={template.url} alt="meme" className="image" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default home
