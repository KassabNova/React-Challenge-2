import React from "react";

export const PokeCard = (props) => {
  const { pokeMock } = props;

  let sprite = pokeMock.sprites.front_default;
  let spriteShiny = pokeMock.sprites.front_shiny;

  sprite ? sprite : (sprite = pokeMock.sprites.back_default);
  spriteShiny ? spriteShiny : (spriteShiny = pokeMock.sprites.back_shiny);

  return (
    <div>
      <h1>Pokemon name: {pokeMock.name}</h1>
      <div>
        <img src={sprite} alt="" />
        <img src={spriteShiny} alt="" />
      </div>
      <a href={pokeMock.videoLink}>This is a video link</a>
    </div>
  );
};
