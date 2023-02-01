import { useEffect, useState } from 'react'

const useCategoryJoke = (category) => {
  const [joke, setJoke] = useState('')

  useEffect(() => {
    const fetchJoke = async () => (
      await fetch(`https://api.chucknorris.io/jokes/search?query=${category}`)
      .then(res => res.json())
      .then(data => {
          const randomJoke = Math.floor(Math.random() * data.result.length) + 1
            setJoke(data.result[randomJoke].value)
      })
    )

    fetchJoke()
  }, [category])

  return joke
}

export default useCategoryJoke