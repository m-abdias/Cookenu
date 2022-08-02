import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToRecipesList } from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    // pega o token do LocalStorage, se não existir token, leva pra página de login
    const token = localStorage.getItem('token')
    if (token) {
      goToRecipesList(navigate)
    }
  }, [navigate])
}

export default useUnprotectedPage
