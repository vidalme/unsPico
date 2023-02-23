import Mare from "../assets/imgs/generics/praias_icons/mare.svg";
import Onda from "../assets/imgs/generics/praias_icons/onda.svg";
import Vent from "../assets/imgs/generics/praias_icons/vent.svg";
import PicsLoader from "./PicsLoader";

// import meuJSON from "../data/conteudo.json";

export default function Praia(praia) {
  const { praia: pico } = praia;

  return (
    <section className="praia-holder">
      <div className="praia-holder-div">
        <h3>Melhor epoca: </h3>
        <h4>{pico.epoca}</h4>

        <div className="condicoes">
          <img className={"img-icon-praia"} src={Mare} alt="" />
          <div>
            <h3>Maré </h3>
            <h4>{pico.mare}</h4>
          </div>
        </div>

        <div className="condicoes">
          <img className={"img-icon-praia"} src={Onda} alt="" />
          <div>
            <h3>Ondulação </h3>
            <h4>{pico.ondulacao}</h4>
          </div>
        </div>

        <div className="condicoes">
          <img className={"img-icon-praia"} src={Vent} alt="" />
          <div>
            <h3>Vento </h3>
            <h4>{pico.vento}</h4>
          </div>
        </div>

        <h3>Descrição </h3>
        <h4>{pico.descricao}</h4>
      </div>

      <PicsLoader urls={pico.pics} />
    </section>
  );
}
