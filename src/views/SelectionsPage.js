// Selections/selections = Cart/cart
// SelectionsBook was ListBook = CartItem
// SelectionsPage was ListPage = CartPage
// Book/book = Item/item
// Books/books = Items/items
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

