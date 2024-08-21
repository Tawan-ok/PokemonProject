import React from 'react'

import { Link } from 'react-router-dom'

import style from '../PokemoList.module.css'

type Pokemon = {
  name: string
  image: string
  types: string[]
}

type PokemonCard = {
  pokemon: Pokemon
}

// function PokemonCard({ pokemonList }: { pokemonList: Pokemon[] }) {
function PokemonCard({ pokemon }: PokemonCard) {
  const capitallizeFirstLetter = (str: string) => {
    if (str.length === 0) {
      return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  const getTypeClass = (type: string) => {
    switch (type.toLowerCase()) {
      case 'normal':
        return style.typeNormal
      case 'grass':
        return style.typeGrass
      case 'fire':
        return style.typeFire
      case 'water':
        return style.typeWater
      case 'electric':
        return style.typeElectric
      case 'rock':
        return style.typeRock
      case 'fighting':
        return style.typeFighting
      case 'psychic':
        return style.typePsychic
      case 'ghost':
        return style.typeGhost
      case 'poison':
        return style.typePoison
      case 'flying':
        return style.typeFlying
      case 'ground':
        return style.typeGround
      case 'dragon':
        return style.typeDragon
      case 'ice':
        return style.typeIce
      case 'bug':
        return style.typeBug
      case 'steel':
        return style.typeSteel
      case 'dark':
        return style.typeDark
      case 'fairy':
        return style.typeFairy
      case 'shadow':
        return style.typeShadow
      case '???':
        return style.typeUnknown
      case 'physical':
        return style.typePhysical
      case 'special':
        return style.typeSpecial
      case 'status':
        return style.typeStatus
      default:
        return style.typeDefault
    }
  }

  return (
    // <Grid container spacing={2}>
    //   {pokemonList.map((pokemon) => (
    //     <Grid item xs={6} sm={7} md={7} lg={4} key={pokemon.name}>
    //       <div className={style.pokemonCharacters}>
    //         <Link to={`/pokemon/${pokemon.name}`}>
    //           <img src={pokemon.image} alt={pokemon.name} className={style.pokemonImage} />
    //         </Link>
    //         <div className={style.textPart}>
    //           <h1>{capitallizeFirstLetter(pokemon.name)}</h1>
    //           <div className={style.pokemonTypes}>
    //             {pokemon.types.map((type) => (
    //               <span key={type} className={`${style.pokemonType} ${getTypeClass(type)}`}>
    //                 {capitallizeFirstLetter(type)}
    //               </span>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </Grid>
    //   ))}
    // </Grid>

    // <div>
    //   {pokemonList.map((pokemon) => (
    //     <div key={pokemon.name} className={style.pokemonCharacters}>
    //       <Link to={`/pokemon/${pokemon.name}`}>
    //         <img src={pokemon.image} alt={pokemon.name} className={style.pokemonImage} />
    //       </Link>
    //       <div className={style.textPart}>
    //         <h1>{capitallizeFirstLetter(pokemon.name)}</h1>
    //         <div className={style.pokemonTypes}>
    //           {pokemon.types.map((type) => (
    //             <span key={type} className={`${style.pokemonType} ${getTypeClass(type)}`}>
    //               {capitallizeFirstLetter(type)}
    //             </span>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div>
      <div className={style.pokemonCharacters}>
        <Link to={`/pokemon/${pokemon.name}`}>
          <img src={pokemon.image} alt={pokemon.name} className={style.pokemonImage} />
        </Link>
        <div className={style.textPart}>
          <h1>{capitallizeFirstLetter(pokemon.name)}</h1>
          <div className={style.pokemonTypes}>
            {pokemon.types.map((type) => (
              <span key={type} className={`${style.pokemonType} ${getTypeClass(type)}`}>
                {capitallizeFirstLetter(type)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
