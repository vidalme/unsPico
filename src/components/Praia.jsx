import Img1 from "../assets/imgs/fortaleza/praiadofuturo/pf02.jpg";

import meuJSON from "../data/conteudo.json";

export default function Praia() {
  const [{ praias }] = meuJSON;
  const [praia] = praias;

  return (
    <div className="praia-holder">
      <h3>Melhor epoca: </h3>
      <h4>{praia.epoca}</h4>
      <h3>Maré </h3>
      <h4>{praia.mare}</h4>
      <h3>Ondulação </h3>
      <h4>{praia.ondulacao}</h4>
      <h3>Vento </h3>
      <h4>{praia.vento}</h4>
      <h3>Descrição </h3>
      <h4>{praia.descricao}</h4>
      <img className="pico-img" src={Img1} alt="" />
    </div>
  );
}
