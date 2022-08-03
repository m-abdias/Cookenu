import React, { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

import { useNavigate } from 'react-router-dom'
import { InputsContainer, RecipeContainer, ScreenContainer } from './styled'

import { Button, TextField, Typography, CircularProgress } from '@mui/material'
import useForm from '../../hooks/useForm.js'
import { createRecipe } from '../../services/recipe'

const AddRecipesPage = () => {
  useProtectedPage()
  const navigate = useNavigate()

  // o estado inicial é falso, no início não esta fazendo nada
  const [isLoading, setIsLoading] = useState(false)

  const [form, onChange, clear] = useForm({
    title: '',
    description: '',
    image: ''
  })

  const onSubmitForm = event => {
    event.preventDefault()
    createRecipe(form, clear, setIsLoading)
  }

  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography
          gutterBottom
          variant={'h4'}
          align={'center'}
          color={'textPrimary'}
        >
          Adicionar Nova Receita
        </Typography>

        <InputsContainer>
          <form onSubmit={onSubmitForm}>
            <TextField
              name={'title'}
              value={form.title}
              onChange={onChange}
              label={'Título'}
              variant={'outlined'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
            <TextField
              name={'description'}
              value={form.description}
              onChange={onChange}
              label={'Descrição'}
              variant={'outlined'}
              fullWidth
              required
              margin={'normal'}
            />
            <TextField
              name={'image'}
              value={form.image}
              onChange={onChange}
              label={'Foto'}
              variant={'outlined'}
              fullWidth
              required
              margin={'normal'}
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
                <p>Adicionar Receita</p>
              )}
            </Button>
          </form>
        </InputsContainer>
      </RecipeContainer>
    </ScreenContainer>
  )
}

export default AddRecipesPage
