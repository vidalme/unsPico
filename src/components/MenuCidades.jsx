import { useState } from "react";
import Cidade from "./Cidade";
import { MenuPraias } from "./MenuPraias";

const MenuCidades = ({ cidades }) => {
  // const cids = cidades.data.record;

  const cids = cidades.meuJSON;

  if (cids ?? false) {
    cids.map((cid) => (cid.aberto = false));

    const [subMenu, setSubMenu] = useState({});

    const handleClick = (e) => {
      const acionado = cids.find((m) => m.nome === e.target.innerText);

      if (acionado === subMenu) {
        console.log("mesmobotao");
      } else {
        // console.log(acionado.nome);
        acionado.aberto = true;
        setSubMenu(() => {
          return acionado;
        });
      }
    };

    return (
      <ul className="menu-cidades">
        {cids.map((cidade) => {
          return (
            <li
              key={cidade.id}
              className="botao-menu-cidades"
              onClick={handleClick}
            >
              {cidade.nome}
              {cidade.aberto && cidade !== subMenu
                ? console.log("abriu")
                : console.log("nada")}
            </li>
          );
        })}
      </ul>
    );
  }
};

export default MenuCidades;
