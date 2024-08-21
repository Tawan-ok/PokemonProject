import React from 'react'

import PokemonCard from './PokemonCard'
type Pokemon = {
  name: string
  image: string
  types: string[]
}

type PokemonList = {
  pokemonList: Pokemon[]
}

function PokemonAllCard({ pokemonList }: PokemonList) {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonAllCard
