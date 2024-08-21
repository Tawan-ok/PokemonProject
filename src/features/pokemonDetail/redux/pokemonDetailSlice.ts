import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { RootState } from '../../../store/store'

type Stat = {
  base_stat: number
  stat: {
    name: string
  }
}

type Ability = {
  name: string
  effect: string
  short_effect: string
}

type Sprites = {
  front_default: string
  back_default: string
  front_shiny: string
  back_shiny: string
  official_artwork: string
}

type PokemonDetail = {
  name: string
  sprites: Sprites
  types: string[]
  abilities: Ability[]
  stats: Stat[] // Add stats array to hold HP, ATK
}

type PokemonState = {
  abilityDetails: string
  pokemonDetail: Record<string, PokemonDetail>
  loading: boolean
  error: string | null
}

const initialState: PokemonState = {
  pokemonDetail: {}, // Initialize as an empty object
  loading: false,
  error: null,
  abilityDetails: '',
}

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonDetail',
  async (name: string) => {
    const response = await axios.get<{
      name: string
      sprites: {
        front_default: string
        back_default: string
        front_shiny: string
        back_shiny: string
        other: { 'official-artwork': { front_default: string } }
      }
      types: { type: { name: string } }[]
      abilities: { ability: { name: string; url: string } }[]
      stats: Stat[] // Include stats in the response
    }>(`https://pokeapi.co/api/v2/pokemon/${name}`)

    // Fetch detailed information for each ability
    const abilities = await Promise.all(
      response.data.abilities.map(async (a) => {
        const abilityResponse = await axios.get<{
          name: string
          effect_entries: { effect: string; short_effect: string; language: { name: string } }[]
        }>(a.ability.url)

        const effectEntry = abilityResponse.data.effect_entries.find(
          (entry) => entry.language.name === 'en',
        )

        return {
          name: abilityResponse.data.name,
          effect: effectEntry?.effect || 'No effect available',
          short_effect: effectEntry?.short_effect || 'No short effect available',
        }
      }),
    )

    return {
      name: response.data.name,
      sprites: {
        front_default: response.data.sprites.front_default,
        back_default: response.data.sprites.back_default,
        front_shiny: response.data.sprites.front_shiny,
        back_shiny: response.data.sprites.back_shiny,
        official_artwork: response.data.sprites.other['official-artwork'].front_default,
      },
      types: response.data.types.map((t) => t.type.name),
      abilities,
      stats: response.data.stats, // Include stats in the returned data
    }
  },
)

const pokemonDetailSlice = createSlice({
  name: 'pokemonDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.loading = false
        state.pokemonDetail[action.payload.name] = action.payload
      })
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch Pokémon details'
      })
  },
})

export const getPokemonDetail = (state: RootState, pokemonName: string) => {
  return state.pokemonDetail.pokemonDetail[pokemonName] || null
}

export default pokemonDetailSlice.reducer
