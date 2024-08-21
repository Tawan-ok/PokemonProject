import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../store/store'

export interface LayoutState {
  isDarkMode: boolean
  projectName: string
}

const initialState: LayoutState = {
  isDarkMode: false,
  projectName: 'oneapp',
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    updateDarkmode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload
    },
    updateProject(state, action: PayloadAction<string>) {
      state.projectName = action.payload
    },
  },
})

export const { updateDarkmode } = layoutSlice.actions
export const { updateProject } = layoutSlice.actions
export const getProjectName = (state: RootState) => state.layout.projectName
export default layoutSlice.reducer
