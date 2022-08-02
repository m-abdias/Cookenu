import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const RecipesDetailPage = () => {
  useProtectedPage()
  return <div>RecipesDetailPage</div>
}

export default RecipesDetailPage
