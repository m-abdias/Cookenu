import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const AddRecipesPage = () => {
  useProtectedPage()
  return <div>AddRecipesPage</div>
}

export default AddRecipesPage
