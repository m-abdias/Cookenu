import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { StyledToolbar } from './styled'
import { goToLogin, goToRecipesList } from '../../routes/Coordinator.js'
import { useNavigate } from 'react-router-dom'

// recebe a props que ta vindo do App.js no header desestruturado
const Header = ({ rightButtonText, setRightButtonText }) => {
  const navigate = useNavigate()

  // Grava no token, o token salvado no localStorage
  const token = localStorage.getItem('token')

  // função para remover o token do localStorage ao dar logout
  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText('Login')
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button
          onClick={() => goToRecipesList(navigate)}
          color="inherit"
          variant="h6"
        >
          Cookenu
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
