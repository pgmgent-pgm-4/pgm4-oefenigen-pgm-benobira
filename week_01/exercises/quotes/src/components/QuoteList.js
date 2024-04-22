import React from 'react'
import QuoteListeItem from './QuoteListeItem'

export default function QuoteList({quotes}) {
  return (
    <ul>
      {quotes.map((quote, index) => (
        <QuoteListeItem key={index} content={quote.content} cite={quote.cite} />
      ))}
    </ul>
  )
}
