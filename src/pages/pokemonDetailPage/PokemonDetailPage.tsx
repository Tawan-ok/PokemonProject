import React from 'react'

import { useParams } from 'react-router-dom'

import PokemonDetail from '../../features/pokemonDetail/PokemonDetail'
import PageContainer from '../PageContainer'

function PokemonDetailPage() {
  const { name } = useParams()
  const nameParam = name || ''
  return (
    <PageContainer>
      <PokemonDetail name={nameParam} />
    </PageContainer>
  )
}

export default PokemonDetailPage
