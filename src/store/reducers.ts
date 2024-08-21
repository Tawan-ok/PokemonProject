import { combineReducers } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/redux/counterSlice'
import pokemonDetailReducer from '../features/pokemonDetail/redux/pokemonDetailSlice'
import pokemonListReducer from '../features/pokemonList/redux/pokemonListSlice'
import redditDetailReducer from '../features/redditDetail/redux/redditDetailSlice'
import redditListReducer from '../features/redditList/redux/redditListSlice'
import layoutReducer from '../layout/redux/layoutSlice'
const rootReducers = combineReducers({
  layout: layoutReducer,
  counter: counterReducer,
  redditList: redditListReducer,
  redditDetail: redditDetailReducer,
  pokemonList: pokemonListReducer,
  pokemonDetail: pokemonDetailReducer,
})

export default rootReducers
