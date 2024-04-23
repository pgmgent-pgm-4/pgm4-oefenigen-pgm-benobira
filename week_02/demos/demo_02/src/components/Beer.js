import React from 'react'
import {Card, CardContent} from '@mui/material';

export default function Beer({ beer }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <h2>{beer.name}</h2>
        <p>Description: {beer.description}</p>
        <p>Alcohol: {beer.alchool}</p>
      </CardContent>
    </Card>
  )
}
