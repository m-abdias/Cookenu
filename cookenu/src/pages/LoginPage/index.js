import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignup } from '../../routes/Coordinator'
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer
} from './styled'
import logo from '../../assets/logo.png'
import { Button, TextField } from '@mui/material'
import useFrom from '../../hooks/useForm.js'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const LoginPage = () => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useFrom({ email: '', password: '' })
  const onSubmitForm = event => {
    event.preventDefault()
    login()
  }

  const login = () => {
    axios
      .post(`${BASE_URL}/user/login`, form)
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
            Fazer Login
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
