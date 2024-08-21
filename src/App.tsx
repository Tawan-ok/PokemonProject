import React from 'react'

import { Provider } from 'react-redux'

import AppTheme from './AppTheme'
import { store } from './store/store'

import './styles/app.scss'

function App() {
  return (
    <Provider store={store}>
      <AppTheme />
    </Provider>
  )
}

export default App
