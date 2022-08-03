import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer
} from './styled'
import logo from '../../assets/logo.png'
import { Button, CircularProgress, TextField } from '@mui/material'
import useForm from '../../hooks/useForm.js'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { signUp } from '../../services/user'

const SignupPage = ({ setRightButtonText }) => {
  useUnprotectedPage()
  const navigate = useNavigate()

  // o estado inicial é falso, no início não esta fazendo nada
  const [isLoading, setIsLoading] = useState(false)

  const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })

  const onSubmitForm = event => {
    event.preventDefault()
    console.log(form)
    signUp(form, clear, navigate, setRightButtonText, setIsLoading)
  }

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={'name'}
            value={form.name}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            autoFocus
            type={'text'}
          />
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
              <p>Fazer Cadastro</p>
            )}
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  )
}

export default SignupPage
