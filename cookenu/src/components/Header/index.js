import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { StyledToolbar } from './styled'
import { goToLogin, goToRecipesList } from '../../routes/Coordinator.js'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
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
        <Button onClick={() => goToLogin(navigate)} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
