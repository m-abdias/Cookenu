import React from 'react'
import RecipeCard from '../../components/RecipeCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { AddRecipeButton, RecipeListContainer } from './styled'
import { Add } from '@mui/icons-material'
import { goToAddRecipes, goToRecipeDetail } from '../../routes/Coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'

// Passando as props que esta recebendo do componente RecipeCard
// Chama a requisição useRequestDat pra chamar o GET da requisição, passando o estado inicial que é um array vazio, porque vai receber uma lista.

const RecipesListPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  const onClickCard = id => {
    goToRecipeDetail(navigate, id)
  }

  // transformar array de objetos em array de componentes: cria o map
  // método slice traz só a quantidade de ítens que deseja trazer o array.
  const recipeCards = recipes.slice(0, 20).map(recipe => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    )
  })

  return (
    <RecipeListContainer>
      {recipeCards.length > 0 ? recipeCards : <Loading />}
      <AddRecipeButton
        color={'primary'}
        onClick={() => goToAddRecipes(navigate)}
      >
        <Add />
      </AddRecipeButton>
    </RecipeListContainer>
  )
}

export default RecipesListPage
