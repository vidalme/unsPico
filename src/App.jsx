import { useEffect, useState } from "react";
import MenuCidades from "./components/MenuCidades";
import meuJSON from "./data/conteudo.json";
import "./App.css";
import Praia from "./components/Praia";
import { MenuPraias } from "./components/MenuPraias";

const API_KEY = "$2b$10$A9ZfAqFqTvYD6l9KBYrkKOikHzCc30V/hHlrK.C0ajDLZ9BObsNJ2";
const url = "https://api.jsonbin.io/v3/b/63f506e7c0e7653a057be5f2";

function App() {
  return (
    <div className="App">
      <nav>
        <MenuPraias />
        {/* <MenuCidades cidades={{ meuJSON }} /> */}
      </nav>
    </div>
  );
}

// puxando os dados online tem limite de requisicoes,
//entao vou deixar comentado aqui pra nao gastar
//por enquanto os testes vao ser com arquivos locais

// function App() {
//   console.log(meuJSON);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const promessa = fetch(url, {
//       headers: new Headers({
//         "Content-Type": "application/json",
//         "X-Master-Key": API_KEY,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
//   return (
//     <div className="App">
//       <nav>
//         <MenuCidades cidades={{ data }} />
//       </nav>
//     </div>
//   );
// }

export default App;
