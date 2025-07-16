import "./App.css";
import PersonagensRickMorty from "./PersonagensRickMorty";
import CarinhaMudar from "./CarinhaMudar";

function App() {
  return (
    <>
      <h1 style={{ fontSize: "39px" }}>
        Carinha Mudar + Buscador de Personagens de Rick & Morty
      </h1>

      <CarinhaMudar />

      <PersonagensRickMorty />
    </>
  );
}

export default App;
