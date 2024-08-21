import React, { useEffect, useRef } from 'react'

import { CircleLoading } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { RootState } from '../../store/store'

import AbilityDetail from './components/AbilityDetail'
import StatsBar from './components/StatsBar' // Import the StatsBar component
import style from './PokemonDetail.module.css'
import { fetchPokemonDetail, getPokemonDetail } from './redux/pokemonDetailSlice'

function PokemonDetailPage(props: { name: string }) {
  const initialized = useRef(false)
  const { name } = props
  const dispatch = useAppDispatch()

  const pokemonDetail = useAppSelector((state: RootState) => getPokemonDetail(state, name))
  const { loading, error } = useAppSelector((state: RootState) => state.pokemonDetail)
  const capitallizeFirstLetter = (str: string) => {
    if (str.length === 0) {
      return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  useEffect(() => {
    if (!initialized.current && !pokemonDetail) {
      initialized.current = true
      dispatch(fetchPokemonDetail(name))
    }
  }, [dispatch, name, pokemonDetail])

  if (loading) {
    return (
      <div>
        <CircleLoading />
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!pokemonDetail) {
    return <div>No details available</div>
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
    <div className={style.pokemonDetail}>
      <h1>{capitallizeFirstLetter(pokemonDetail.name)}</h1>
      <div className={style.spritesContainer}>
        <img
          src={pokemonDetail.sprites.official_artwork}
          alt={`${pokemonDetail.name} official artwork`}
        />
      </div>

      <div className={style.pokemonTypes}>
        {pokemonDetail.types.map((type) => (
          <span key={type} className={`${style.pokemonTypeSpan} ${getTypeClass(type)}`}>
            {type}
          </span>
        ))}
      </div>
      <h2>Stats</h2>
      <div className={style.statsContainer}>
        <StatsBar statName="HP" statValue={pokemonDetail.stats[0].base_stat} />
        <StatsBar statName="ATK" statValue={pokemonDetail.stats[1].base_stat} />
        <StatsBar statName="DEF" statValue={pokemonDetail.stats[2].base_stat} />
        <StatsBar statName="STK" statValue={pokemonDetail.stats[3].base_stat} />
        <StatsBar statName="SEF" statValue={pokemonDetail.stats[4].base_stat} />
        <StatsBar statName="SPD" statValue={pokemonDetail.stats[5].base_stat} />
      </div>
      <h2>Abilities</h2>
      {pokemonDetail.abilities.map((ability) => (
        <AbilityDetail
          key={ability.name}
          abilityName={ability.name}
          pokemonName={pokemonDetail.name}
        />
      ))}

      <div>
        <img src={pokemonDetail.sprites.front_default} alt={`${pokemonDetail.name} front`} />
        <img src={pokemonDetail.sprites.back_default} alt={`${pokemonDetail.name} back`} />
        <img src={pokemonDetail.sprites.front_shiny} alt={`${pokemonDetail.name} shiny front`} />
        <img src={pokemonDetail.sprites.back_shiny} alt={`${pokemonDetail.name} shiny back`} />
      </div>
    </div>
  )
}

export default PokemonDetailPage
