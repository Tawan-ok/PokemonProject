import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { API_ERROR_RESPONSE } from '../../../constants/constants'
import { RootState } from '../../../store/store'
import { axios, resolveApiError } from '../../../utils'

// const REDDIT_API = import.meta.env.VITE_REDDIT_API_URL
const REDDIT_API = window?.env?.REDDIT_API_URL

// const SUBREDDIT = 'all'

export const fetchRedditList = createAsyncThunk(
  'redditList/fetchRedditList',
  async (userData: { subreddit: string }, { rejectWithValue }) => {
    try {
      const { subreddit } = userData
      const response = await axios.get(`${REDDIT_API}/r/${subreddit}/hot.json`)
      return response.data.data.children
    } catch (error) {
      return rejectWithValue(resolveApiError(error))
    }
  },
)
interface RedditDetailState {
  list: {
    data: {
      title: string
      name: string
    }
  }[]
  isFetching: boolean
  error: API_ERROR_RESPONSE | null
}

const initialState: RedditDetailState = {
  list: [],
  isFetching: false,
  error: null,
}

const redditListSlice = createSlice({
  name: 'redditList',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchRedditList.pending, (state) => {
        state.list = []
        state.isFetching = true
        state.error = null
      })
      .addCase(fetchRedditList.fulfilled, (state, action) => {
        state.isFetching = false
        state.list = action.payload
      })
      .addCase(fetchRedditList.rejected, (state, action) => {
        state.isFetching = false
        state.error = action.payload as API_ERROR_RESPONSE
      }),
})

export const getRedditList = (state: RootState) => state.redditList.list
export const getRedditStatus = (state: RootState) => state.redditList.isFetching
export const getRedditError = (state: RootState) => state.redditList.error

export default redditListSlice.reducer
