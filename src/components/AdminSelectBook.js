import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import BookForm from '../forms/BookForm'

const books = [
    {
      id: 70605,
      title: "The One Thing",
      author: "Gary Keller",
      pages: 212,
      summary: "Surprisingly simple means to achieve extraordinary results.",
      img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
      category: "Self-Help",
      category_id: 7
    },
    {
      id: 70606,
      title: "The One Thing",
      author: "Gary Keller",
      pages: 212,
      summary: "Surprisingly simple means to achieve extraordinary results.",
      img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
      category: "Self-Help",
      category_id: 7
    },
]

export default function AdminSelectBook() {

    // empty string retuns False; empty object returns True
    const [book, setBook] = useState('')
  
    const handleChange = (event) => {
        console.log(event.target.value)
        if(event.target.value === 'default'){
            console.log("No book selected")
            setBook('')
        } else {
            // bookSelected is Kevin's newBook
            const bookSelected = books.filter((b) => b.id === event.target.value)[0]
            console.log("Book Selected", bookSelected)
            setBook(bookSelected)
        }
    }

  return (
    <>
     <FormControl fullwidth>
        <InputLabel id="book-label-id">Book</InputLabel>
            <Select
                labelId= "book-label-id"
                id = "book-id"
                // book_id is just id in API
                name = "book_id"
                value = {book ? book.id : 'default'}
                placeholder = "Book"
                label = "Book"
                onChange = {(event) => handleChange(event)}
            >
                <MenuItem value = {'default'}><em>Select Book to Edit</em></MenuItem>
                {
                    books.map((b) => (
                    <MenuItem key = {b.id} value = {b.id}> {b.id} | {b.name} </MenuItem>
                    ))
                }
             
            </Select>
        </FormControl>
        {
            book ?
            <>
            <Typography sx = {{p:4}} variant = 'h5'>
                Edit {book.title}
            </Typography>
            <BookForm book = {book}/> 
            </>
            :
            <>
            <Typography sx = {{p:4}} variant = 'h5'>
                Create
            </Typography>
            <BookForm/>
            </>
        }
    </>

  )
}
