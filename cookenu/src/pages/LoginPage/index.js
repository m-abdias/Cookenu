import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignup } from '../../routes/Coordinator'
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer
} from './styled'
import logo from '../../assets/logo.png'
import { Button, CircularProgress, TextField } from '@mui/material'
import useForm from '../../hooks/useForm.js'
import { login } from '../../services/user'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({ setRightButtonText }) => {
  useUnprotectedPage()
  const navigate = useNavigate()

  // o estado inicial é falso, no início não esta fazendo nada
  const [isLoading, setIsLoading] = useState(false)

  const [form, onChange, clear] = useForm({ email: '', password: '' })
  const onSubmitForm = event => {
    event.preventDefault()
    //chamar a requisição de login
    login(form, clear, navigate, setRightButtonText, setIsLoading)
  }

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={'email'}
            value={form.email}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'email'}
          />
          <TextField
            name={'password'}
            value={form.password}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'password'}
          />
          <Button
            type={'submit'}
            fullWidth
            variant={'contained'}
            color={'primary'}
            margin={'normal'}
          >
            {isLoading ? (
              <CircularProgress color="inherit" />
            ) : (
              <p>Fazer Login</p>
            )}
          </Button>
        </form>
      </InputsContainer>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignup(navigate)}
          type={'submit'}
          fullWidth
          variant={'text'}
          color={'primary'}
          margin={'normal'}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage
