import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { API_ERROR_RESPONSE } from '../../../constants/constants'
import { RootState } from '../../../store/store'
import { axios, resolveApiError } from '../../../utils'

// const REDDIT_API = import.meta.env.VITE_REDDIT_API_URL
const REDDIT_API = window?.env?.REDDIT_API_URL

export const fetchRedditDetail = createAsyncThunk(
  'redditDetail/fetchRedditDetail',
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${REDDIT_API}/by_id/${name}.json`)
      return response.data.data.children[0].data
    } catch (error) {
      return rejectWithValue(resolveApiError(error))
    }
  },
)

interface RedditDetailState {
  detail: {
    title: string
    subreddit: string
  }
  isFetching: boolean
  error: API_ERROR_RESPONSE | null
}

const emptyData = {
  detail: {
    title: '',
    subreddit: '',
  },
  isFetching: false,
  error: false,
}

const initialState: { [k: string]: RedditDetailState } = {}

const redditDetailSlice = createSlice({
  name: 'redditDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchRedditDetail.pending, (state, action) => {
        state[action.meta.arg] = {
          detail: {
            title: '',
            subreddit: '',
          },
          isFetching: true,
          error: null,
        }
      })
      .addCase(fetchRedditDetail.fulfilled, (state, action) => {
        state[action.meta.arg] = {
          detail: {
            title: action.payload.title,
            subreddit: action.payload.subreddit,
          },
          isFetching: false,
          error: null,
        }
      })
      .addCase(fetchRedditDetail.rejected, (state, action) => {
        state[action.meta.arg] = {
          detail: {
            title: state[action.meta.arg].detail.title,
            subreddit: state[action.meta.arg].detail.subreddit,
          },
          isFetching: false,
          error: action.payload as API_ERROR_RESPONSE,
        }
      }),
})

export const getRedditDetail = (state: RootState, redditName: string) =>
  state.redditDetail[redditName] || emptyData

export default redditDetailSlice.reducer
