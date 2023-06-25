import React, { useState, useEffect } from 'react'
import Text from './Text'
import Author from './Author'
import Genre from './Genre'

const Quote = ( ) =>{    

  const [quoteText, setQuoteText] = useState('')
  const [quoteAuthor, setQuoteAuthor] = useState('')
  const [quoteGenre, setQuoteGenre] = useState('')
  const [isLoading, setIsLoading] = useState('')

  useEffect(() => {

    fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
      // Resposta da API convertida para json
      .then(response => response.json()) 

      // Utilizando os dados obtidos da API
      .then(data => { 
        setQuoteText(data.data[0].quoteText)
        setQuoteAuthor(data.data[0].quoteAuthor)
        setQuoteGenre(data.data[0].quoteGenre)
        setIsLoading(true)
      })

      .catch(error => {
        // Tratando possíveis erros
        console.log('An error ocurred. Try again later.')
        setIsLoading(false)
      })

  }, [])

    return(
      <div>
      <Text text={quoteText} />
        <div className='info'>
          <Author author={quoteAuthor} />
          <Genre genre={quoteGenre} />
        </div>
      </div>      
    )
  }

  export default Quote;
