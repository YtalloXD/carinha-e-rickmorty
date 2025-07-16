import { useState } from "react";

export default function CarinhaMudar() {
  const [carinha, setCarinha] = useState(true);
  const [qtClique, setQtClique] = useState(0);

  function mudarCarinhaEQt() {
    setCarinha(!carinha);
    setQtClique(qtClique + 1);
    console.log(`A carinha está feliz? ${!carinha ? "Sim" : "Não"}`);
  }

  return (
    <>
      <div
        onClick={mudarCarinhaEQt}
        style={{ cursor: "pointer", fontSize: "3rem" }}
      >
        {carinha ? ":D" : ":c"}
      </div>
      <p style={{ fontSize: "2rem" }}>
        Quantidade de vezes que você clicou na carinha: {qtClique}
      </p>
    </>
  );
}
