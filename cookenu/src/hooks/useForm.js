import { useState } from 'react'

const useForm = initialState => {
  // Recebe um estado inicial que é um objeto com cada um dos campos, e ele cria esse estado
  const [form, setForm] = useState(initialState)

  // uma função que vai mudar o estado para funcionar precisa do: value, onChange e name
  const handleInputChange = event => {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }

  // função para limpar imput
  const clear = () => {
    setForm(initialState)
  }

  // retorna o estado, a função de onChange e a função de limpar os campos.
  return [form, handleInputChange, clear]
}

export default useForm
