// SelectedBook was ListBook == Kevin's CartItem
// SelectionsPage was ListPage == Kevin's CartPage
// Selections was BookList = Kevin's cart or Cart
// ReadingList needs to be more permanent version of My Reading List
import React from 'react'
import Selections from '../components/Selections/Index'
import Typography from '@mui/material/Typography'

export default function SelectionsPage() {
  return (
    <>
        <Typography variant='h3'>My Reading List Selections</Typography>
        <Selections/> 
    </>
  )
}

