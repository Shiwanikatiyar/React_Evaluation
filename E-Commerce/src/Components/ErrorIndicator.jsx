import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
function ErrorIndicator() {
  return (
    <div><Alert status='error'>
    <AlertIcon />
    <AlertTitle>Something went Wrong!</AlertTitle>
    
  </Alert></div>
  )
}

export default ErrorIndicator