import { Typography, Box } from '@mui/material'
import React, {useState} from 'react'
import CategoryBar from '../components/CategoryBar'
import BookBrowser from '../components/BookBrowser'

export default function BookMenu() {
    const [actCat, setActCat] = useState({})

  return (
      <>
        <Typography variant = "h3">Browse Our Books!</Typography>
        <Box sx ={{minWidth:"300px", maxWidth:"1000", display: "flex", justifyContent:"center", mx:"auto"}}>
          <CategoryBar actCat={actCat} setActCat={setActCat}/>
        </Box>
        <Box sx ={{minWidth:"300px", maxWidth:"1000", display: "flex", justifyContent:"center", mx:"auto"}}>
          <BookBrowser category_id={actCat?.id}/>
        </Box>
      </>
  )
}
