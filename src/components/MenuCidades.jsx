import { useState } from "react";
import Cidade from "./Cidade";
import { MenuPraias } from "./MenuPraias";

const MenuCidades = ({ cidades }) => {
  // const cids = cidades.data.record;

  const cids = cidades.meuJSON;

  if (cids ?? false) {
    const [subMenuShow, setSubMenuShow] = useState(false);

    const handleClick = (e) => {
      setSubMenuShow((lastShow) => {
        return !lastShow;
      });
    };

    return (
      <ul className="menu-cidades">
        {cids.map((cidade, idx) => {
          return (
            <li className="botao-menu-cidades" key={idx} onClick={handleClick}>
              {cidade.nome}
              {subMenuShow && <MenuPraias />}
            </li>
          );
        })}
      </ul>
    );
  }
};

export default MenuCidades;
