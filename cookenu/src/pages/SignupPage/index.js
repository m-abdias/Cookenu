import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer
} from './styled'
import logo from '../../assets/logo.png'
import { Button, TextField } from '@mui/material'
import useFrom from '../../hooks/useForm.js'

const SignupPage = () => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useFrom({ name: '', email: '', password: '' })

  const onSubmitForm = event => {
    event.preventDefault()
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
            Fazer Cadastro
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  )
}

export default SignupPage
