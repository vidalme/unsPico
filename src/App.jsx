import MenuCidades from "./components/MenuCidades";
import meuJSON from "./data/conteudo.json"; //para testes locais
import Logo from "../src/assets/imgs/generics/logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

const API_KEY = "$2b$10$A9ZfAqFqTvYD6l9KBYrkKOikHzCc30V/hHlrK.C0ajDLZ9BObsNJ2";
const url = "https://api.jsonbin.io/v3/b/63f506e7c0e7653a057be5f2";

//puxando os dados online tem limite de requisicoes,
//testes podem ser feitos trocando a incializacao por esse

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promessa = fetch(url, {
      headers: new Headers({
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <nav>
        <img src={Logo} alt="" />
        <MenuCidades cidades={{ data }} />
      </nav>
    </div>
  );
}

export default App;
