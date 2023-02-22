import meuJSON from "../data/conteudo.json";

const { praias } = meuJSON[0];

export const MenuPraias = () => {
  return (
    <ul className="menu-praias">
      {praias.map((praia) => {
        return (
          <li className="botao-menu-praias" key={praia.id}>
            {praia.nome}
          </li>
        );
      })}
    </ul>
  );
};
