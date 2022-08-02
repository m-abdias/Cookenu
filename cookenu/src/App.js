import React, { useState } from 'react'
import Router from './routes/Router'
import theme from './constants/theme'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  // Grava no token, o token salvado no localStorage
  const token = localStorage.getItem('token')

  // Faz um ternário pro botão aparecer Logout se tiver token, ou Login se não tiver token
  const [rightButtonText, setRightButtonText] = useState(
    token ? 'Logout' : 'Login'
  )

  /* Passando o botão como prop pra dentro do header */
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />
        <Router setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
