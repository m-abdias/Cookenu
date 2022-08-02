import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLogin } from '../routes/Coordinator'

const useProtectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    // pega o token do LocalStorage, se não existir token, leva pra página de login
    const token = localStorage.getItem('token')
    if (!token) {
      goToLogin(navigate)
    }
  }, [navigate])
}

export default useProtectedPage
