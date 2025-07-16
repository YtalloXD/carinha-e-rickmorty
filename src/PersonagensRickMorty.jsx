import { useEffect, useState } from "react";

export default function PersonagensRickMorty() {
  const [personagens, setPersonagens] = useState([]);
  const [nomePersonagemFiltro, setNomePersonagemFiltro] = useState("");

  useEffect(() => {
    getPersonagens();
  }, []);

  useEffect(() => {
    getPersonagens(nomePersonagemFiltro);
  }, [nomePersonagemFiltro]);

  async function getPersonagens(filtroPesquisa = "") {
    try {
      const urlAPI = `https://rickandmortyapi.com/api/character/?name=${filtroPesquisa}`;
      const charactersReq = await fetch(urlAPI);
      const charactersJson = await charactersReq.json();
      setPersonagens(charactersJson.results);
    } catch (error) {
      console.log("Erro ao buscar personagens:", error);
    }
  }

  return (
    <ul>
      <li style={{ listStyle: "none" }}>
        <h1>Lista de Personagens de Rick & Morty</h1>
        <input
          type="text"
          placeholder="Buscar personagem..."
          value={nomePersonagemFiltro}
          onChange={(e) => setNomePersonagemFiltro(e.target.value)}
          style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
        />
        {personagens.map((personagem) => (
          <div key={personagem.id}>
            <img src={personagem.image} alt={personagem.name} />
            <div>
              <h3>Nome: {personagem.name}</h3>
              <p>Espécie: {personagem.species}</p>
              <p></p>
            </div>
          </div>
        ))}
      </li>
    </ul>
  );
}
