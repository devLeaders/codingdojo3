import * as React from "react";
import styled from "styled-components";
import PokemonItem from "../components/PokemonItem";
import { getPokemon } from "../enums/PokemonArray";
import { useEffect, useState } from "react";
import PokebalImgBig from '../components/PokebalImgBig'

const Wrapper = styled.div`
box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding-left: 5px;
  padding-right: 5px;
`;
const Nav = styled.div`
  width: 100%;
  height: 15%;
`;
const PokemonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: space-around;
`;
const Title = styled.h1`
  margin-left: 10px;
  color: #303943;
  font-size: 30px;
`;

export default function Pokedex() {
  const [pokemonArray, setPokemonArray] = useState<Array<Object>>([]);

  useEffect(() => {
    setPokemonArray(getPokemon());
  }, []);

  return (
    <Wrapper>
      <Nav />
      <PokebalImgBig color="#3039430f"/>
      <Title> Pokedex </Title>
      <PokemonWrapper>
        {pokemonArray.map((el:any) => {
          return (
            <PokemonItem
              key={el.name}
              name={el.name}
              image={el.image}
              type={el.type}
            />
          );
        })}
      </PokemonWrapper>
    </Wrapper>
  );
}
