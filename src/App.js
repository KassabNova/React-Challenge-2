import React from "react";
import "./styles.css";
import { mockPokemonsData } from "./mock/pokeData";
import { PokeCard } from "./components/PokeCards";

export default function App() {
  return (
    <div className="App">
      <h1>2o. Challenge: Loopsa</h1>
      <ul>
        {mockPokemonsData.map((poke) => (
          <div>
            <PokeCard pokeMock={poke} />
          </div>
        ))}
      </ul>
    </div>
  );
}
