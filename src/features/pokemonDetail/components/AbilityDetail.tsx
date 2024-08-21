import React from 'react'

import { useAppSelector } from '../../../hooks/store'
import { RootState } from '../../../store/store'
import { getPokemonDetail } from '../redux/pokemonDetailSlice'

type Ability = {
  name: string
  effect: string
  short_effect: string
}

type AbilityDetailProps = {
  abilityName: string
  pokemonName: string
}

const AbilityDetail: React.FC<AbilityDetailProps> = ({ abilityName, pokemonName }) => {
  const pokemonDetail = useAppSelector((state: RootState) => getPokemonDetail(state, pokemonName))

  if (!pokemonDetail) return null

  const ability = pokemonDetail.abilities.find((a: Ability) => a.name === abilityName)

  if (!ability) return <div>Ability details not found.</div>

  const capitallizeFirstLetter = (str: string) => {
    if (str.length === 0) {
      return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  return (
    <div>
      <h3>{capitallizeFirstLetter(ability.name)}</h3>
      <p>
        <strong>Short Effect:</strong> {ability.short_effect}
      </p>
      <p>
        <strong>Effect:</strong> {ability.effect}
      </p>
    </div>
  )
}

export default AbilityDetail
