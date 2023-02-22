import { useState } from "react";
import meuJSON from "../data/conteudo.json";

const { praias } = meuJSON[0];

export const MenuPraias = ({ praias }) => {
  const [picoDisplay, setPicoDisplay] = useState({});

  function handleClick(e) {
    //console.log(praias.filter((p) => console.log(p.nome)));
    // console.log(praias.filter((p) => p.name === e.target.innerText));
  }
  return (
    <ul className="menu-praias">
      {praias.map((praia) => {
        return (
          <li
            onClick={handleClick}
            className="botao-menu-praias"
            key={praia.id}
            id={praia.id}
          >
            {praia.nome}
          </li>
        );
      })}
    </ul>
  );
};
