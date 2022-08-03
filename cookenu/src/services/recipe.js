import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const createRecipe = (body, clear, setIsLoading) => {
  setIsLoading(true)
  axios
    .post(`${BASE_URL}/recipe`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(res => {
      alert(res.data.message)
      setIsLoading(false)
      clear()
    })
    .catch(err => {
      setIsLoading(false)
      alert(err.data.message)
    })
}
