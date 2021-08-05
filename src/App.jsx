import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home';
import Meme from './components/meme';
function App() {

  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);

      });
  }, []);
  return (
    <>
      <div className="App">
        <p>Welcome To The Meme-Nation!!</p>

        {meme === null ? (<Home templates={templates} setMeme={setMeme} />)
          : <Meme meme={meme} setMeme={setMeme} />}

      </div>
    </>
  );
}

export default App;
