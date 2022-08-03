import { useEffect, useState } from 'react'
import axios from 'axios'

// o Get é pegar os dados e guardar em um estado pra mostrar na tela, como é sempre essa mesma ação, usa um estado inicial (Data)

// Precisa ter um header para essa requisição e vai ser o token que esta gravado no LocalStorage, o header se chama Authorization.

// Precisa pasar o initialData, como estado inicial e a url

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return (data)
}

export default useRequestData
