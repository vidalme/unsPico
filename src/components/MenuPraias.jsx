import meuJSON from "../data/conteudo.json";

const { praias } = meuJSON[0];

export const MenuPraias = ({ cidade }) => {
  console.log(cidade.praias);
  console.log("oi");
  // function handleClick(e) {
  //   // console.log(e);
  // }

  // return (
  //   <ul className="menu-praias">
  //     {praias.map((praia) => {
  //       return (
  //         <li
  //           onClick={handleClick}
  //           className="botao-menu-praias"
  //           key={praia.id}
  //         >
  //           {praia.nome}
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
};
