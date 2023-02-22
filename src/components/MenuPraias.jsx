import { useState } from "react";
import Praia from "./Praia";

export const MenuPraias = ({ praias }) => {
  const [picoDisplay, setPicoDisplay] = useState({});

  function handleClick(e) {
    const pico = praias.find((p) => {
      return p.id === Number(e.target.id);
    });

    pico &&
      setPicoDisplay(() => {
        return pico;
      });

    // console.log(pico);
    // console.log(picoDisplay);
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
            <span>{praia.nome}</span>
            {praia === picoDisplay && <Praia praia={praia} />}
          </li>
        );
      })}
    </ul>
  );
};
