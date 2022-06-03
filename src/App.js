import "./styles.css";
import Kanye from "./kanye.png";
import axios from "axios";
import { useState, useEffect } from "react";
export default function App() {
  const [text, setText] = useState([]);
  const Api = () => {
    axios.get(`https://api.kanye.rest/`).then((response) => {
      setText(response.data.quote);
    });
  };
  useEffect(() => {
    Api();
  }, []);
  return (
    <div className="App">
      <header>
        <h1 translate="no">Ye Api</h1>
        <h2> Click no botão e receba uma frase motivacional do Ye </h2>
      </header>
      <img src={Kanye} alt="Rosto do Kanye West olhando sério" />
      <button
        onClick={() => {
          Api();
        }}
      >
        Nova Frase
      </button>
      <h2>{text}</h2>
      <iframe
        src="https://open.spotify.com/embed/album/5CnpZV3q5BcESefcB3WJmz?utm_source=generator"
        width="70%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
}
