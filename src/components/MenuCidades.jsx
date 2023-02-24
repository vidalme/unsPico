import { useState } from "react";
import { MenuPraias } from "./MenuPraias";

function MenuCidades({ cidades }) {
  const cids = cidades.data.record;

  if (cids ?? false) {
    const [subMenu, setSubMenu] = useState({});

    const handleClick = (e) => {
      const clicado = cids.find((m) => m.id === e.target.id);
      clicado && setSubMenu(clicado);
      clicado === subMenu && setSubMenu({});
    };

    return (
      <ul className="menu-cidades">
        {cids.map((cidade) => {
          return (
            <li
              key={cidade.id}
              id={cidade.id}
              className="botao-menu-cidades"
              onClick={handleClick}
              style={{ backgroundColor: cidade === subMenu && "#4D455D" }}
            >
              <span>{cidade.nome}</span>
              {cidade === subMenu && <MenuPraias praias={cidade.praias} />}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MenuCidades;
