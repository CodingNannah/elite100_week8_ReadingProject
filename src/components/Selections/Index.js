// Selections/selections = Cart/cart
// SelectionsBook was ListBook = CartItem
// SelectionsPage was ListPage = CartPage
// Book/book = Item/item
// Books/books = Items/items
// ReadingList needs to be more permanent version of My Reading List

import Box from "@mui/material/Box"
import SelectionsBook from './SelectionsBook'


export default function Index() {

  const selections = [{
      id: 70605,
      title: "The One Thing",
      author: "Gary Keller",
      pages: 212,
      summary: "Surprisingly simple means to achieve extraordinary results.",
      img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
      category: "Self-Help",
      category_id: 7
    },{
      id: 70606,
      title: "The Doubled One Thing",
      author: "Gary Keller",
      pages: 212,
      summary: "Surprisingly simple means to achieve extraordinary results.",
      img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
      category: "Self-Help",
      category_id: 7
    },{
      id: 70606,
      title: "The Doubled One Thing",
      author: "Gary Keller",
      pages: 212,
      summary: "Surprisingly simple means to achieve extraordinary results.",
      img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
      category: "Self-Help",
      category_id: 7
    },{
      id: 70607,
      title: "The One Thing",
      author: "Gary Keller",
      pages: 212,
      summary: "Surprisingly simple means to achieve extraordinary results.",
      img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
      category: "Self-Help",
      category_id: 7
    }
  ]

  return (
      <Box sx={{mb:5}}>
        {
          // selections = Kevin's cart 
          [...new Set(selections?.map(JSON.stringify))]?.map(JSON.parse)?.map(
          (book)=><SelectionsBook key={book.id} book={book}/>
          )
        }

      </Box>
    )
}


