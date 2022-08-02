import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddRecipesPage from '../pages/AddRecipesPage'
import LoginPage from '../pages/LoginPage'
import RecipesDetailPage from '../pages/RecipesDetailPage'
import RecipesListPage from '../pages/RecipesListPage'
import ErrorPage from '../pages/ErrorPage'
import SignupPage from '../pages/SignupPage'

const Router = ({ setRightButtonText }) => {
  return (
    <Routes>
      <Route
        path={'/login'}
        element={<LoginPage setRightButtonText={setRightButtonText} />}
      />
      <Route path={'/cadastro'} element={<SignupPage setRightButtonText={setRightButtonText} />} />
      <Route path={'/'} element={<RecipesListPage />} />
      <Route path={'/adicionar-receita'} element={<AddRecipesPage />} />
      <Route path={'/detalhe/:id'} element={<RecipesDetailPage />} />
      <Route path={'*'} element={<ErrorPage />} />
    </Routes>
  )
}

export default Router
