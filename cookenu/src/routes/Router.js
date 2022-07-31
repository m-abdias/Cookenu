import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AddRecipesPage from '../pages/AddRecipesPage'
import LoginPage from '../pages/LoginPage'
import RecipesDetailPage from '../pages/RecipesDetailPage'
import RecipesListPage from '../pages/RecipesListPage'
import ErrorPage from '../pages/ErrorPage'
import SignupPage from '../pages/SignupPage'
import Header from '../components/Header'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/cadastro'} element={<SignupPage />} />
        <Route path={'/'} element={<RecipesListPage />} />
        <Route path={'/adicionar-receita'} element={<AddRecipesPage />} />
        <Route path={'/detalhe/:id'} element={<RecipesDetailPage />} />
        <Route path={'*'} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
