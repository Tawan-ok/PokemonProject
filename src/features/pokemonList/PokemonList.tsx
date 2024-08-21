import React, { useEffect, useState } from 'react'

import SearchNotFound from '../../assets/notFound.png'
import Icon from '../../assets/searchIcon.png'
import { CircleLoading } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { RootState } from '../../store/store'

import PokemonAllCard from './components/PokemonAllCard'
import style from './PokemoList.module.css'
import { fetchPokemon, filterSearchPokemon, filterTypePokemon } from './redux/pokemonListSlice'

function PokemonList() {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const { filterpokemonList, loading, error } = useAppSelector(
    (state: RootState) => state.pokemonList,
  )
  const pokemonTypes = [
    'All',
    'Normal',
    'Grass',
    'Fire',
    'Water',
    'Electric',
    'Rock',
    'Fighting',
    'Psychic',
    'Ghost',
    'Poison',
    'Flying',
    'Ground',
    'Dragon',
    'Ice',
    'Bug',
    'Steel',
    'Dark',
    'Fairy',
  ]
  useEffect(() => {
    dispatch(fetchPokemon())
  }, [dispatch])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    dispatch(filterSearchPokemon(value))
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value
    setSelectedType(type)
    dispatch(filterTypePokemon({ query: search, type }))
  }

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

  return (
    <div className={style.pokemonItem}>
      <div className={style.inputBox}>
        <img src={Icon} alt="Search Icon" className={style.searchIcon} />
        <input
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={handleSearchChange}
          className={style.searchInput}
        />
        <select className={style.typeDropdown} value={selectedType} onChange={handleTypeChange}>
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      {filterpokemonList.length > 0 ? (
        <PokemonAllCard pokemonList={filterpokemonList} />
      ) : (
        <div className={style.notFoundContainer}>
          <div className={style.notFound}>No Pokémon found.</div>
          <img src={SearchNotFound} alt="Not Found" />
        </div>
      )}
    </div>
  )
}

export default PokemonList
