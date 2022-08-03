import React from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'

import useProtectedPage from '../../hooks/useProtectedPage'
import { RecipeContainer, RecipeImage, ScreenContainer } from './styled'
import { Typography } from '@mui/material'
import Loading from '../../components/Loading'

// para pegar o id que esta na URL, usa o useParams

const RecipesDetailPage = () => {
  useProtectedPage()
  const params = useParams()
  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

  return (
    <ScreenContainer>
      {recipe ? (
        <RecipeContainer>
          <RecipeImage src={recipe.image} />
          <Typography gutterBottom align="center" variante="h5" color="primary">
            {recipe.title}
          </Typography>
          <Typography align="center">{recipe.description}</Typography>
        </RecipeContainer>
      ) : (
        <Loading />
      )}
    </ScreenContainer>
  )
}

export default RecipesDetailPage
