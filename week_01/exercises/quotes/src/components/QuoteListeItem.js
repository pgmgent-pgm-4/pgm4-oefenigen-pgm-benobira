import React from 'react'

export default function QuoteListeItem(quote) {
  return (
    <li>
      {quote.content} - {quote.cite}
    </li>
  )
}
