import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type Pokemon = {
  name: string
  image: string
  types: string[]
}

type PokemonState = {
  pokemonList: Pokemon[] // Add this to store the unfiltered list
  filterpokemonList: Pokemon[]
  loading: boolean
  error: string | null
}

const initialState: PokemonState = {
  pokemonList: [],
  filterpokemonList: [],
  loading: false,
  error: null,
}

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
  const response = await axios.get<{ results: { name: string; url: string }[] }>(
    'https://pokeapi.co/api/v2/pokemon?limit=250',
  )
  const pokemonDetails: Pokemon[] = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const pokemonData = await axios.get<{
        name: string
        sprites: { front_default: string }
        types: { type: { name: string } }[]
      }>(pokemon.url)
      return {
        name: pokemonData.data.name,
        image: pokemonData.data.sprites.front_default,
        types: pokemonData.data.types.map((t) => t.type.name),
      }
    }),
  )
  return pokemonDetails
})
const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    filterTypePokemon(state, action) {
      const { query, type } = action.payload
      const searchQuery = query.toLowerCase()

      state.filterpokemonList = state.pokemonList.filter((pokemon: Pokemon) => {
        const matchesName = pokemon.name.toLowerCase().includes(searchQuery)
        const matchesType = type === 'All' || pokemon.types.includes(type.toLowerCase())
        return matchesName && matchesType
      })
    },
    filterSearchPokemon(state, action) {
      const searchQuery = action.payload.toLowerCase()

      state.filterpokemonList = state.pokemonList.filter((pokemon: Pokemon) => {
        return pokemon.name.toLowerCase().includes(searchQuery)
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false
        state.pokemonList = action.payload // เก็บรายการต้นฉบับทั้งหมด
        state.filterpokemonList = action.payload // ใช้รายการนี้ในการกรอง
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch Pokémon list'
      })
  },
})

export const { filterTypePokemon, filterSearchPokemon } = pokemonListSlice.actions
export default pokemonListSlice.reducer
