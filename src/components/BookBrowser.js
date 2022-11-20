// This is ItemBrowser in Kevin's in-class project

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';


export default function BookBrowser() {

  const handleAddToList = (book) => {
    console.log('added', book.title, 'to list')
  }

  return (
    <ImageList>
      {book.map((book) => (
        <ImageListItem key={book.id}>
          <img
            src={book.img}
            srcSet={book.img}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={book.title}
            subtitle={book.author}
            actionIcon={
              <>
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${book.title}`}
                >
                  <InfoIcon />
                </IconButton>

                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${book.title}`}
                  onClick={()=>handleAddToList(book)}
                >
                  <LibraryAddTwoToneIcon />
                </IconButton>
              </>
            }
          />

        </ImageListItem>
      ))}
    </ImageList>
  );
}

const book = [
  {
    book_id: 70605,
    title: "The One Thing",
    author: "Gary Keller",
    pages: 212,
    summary: "Surprisingly simple means to achieve extraordinary results.",
    img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
    category: "Self-Help",
    category_id: 7
  },
  {
    book_id: 70606,
    title: "The One Thing",
    author: "Gary Keller",
    pages: 212,
    summary: "Surprisingly simple means to achieve extraordinary results.",
    img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
    category: "Self-Help",
    category_id: 7
  },
  {
    book_id: 70607,
    title: "The One Thing",
    author: "Gary Keller",
    pages: 212,
    summary: "Surprisingly simple means to achieve extraordinary results.",
    img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
    category: "Self-Help",
    category_id: 7
  },
  {
    book_id: 70608,
    title: "The One Thing",
    author: "Gary Keller",
    pages: 212,
    summary: "Surprisingly simple means to achieve extraordinary results.",
    img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
    category: "Self-Help",
    category_id: 7
  },
  {
    book_id: 70609,
    title: "The One Thing",
    author: "Gary Keller",
    pages: 212,
    summary: "Surprisingly simple means to achieve extraordinary results.",
    img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
    category: "Self-Help",
    category_id: 7
  },
  {
    book_id: 70610,
    title: "The One Thing",
    author: "Gary Keller",
    pages: 212,
    summary: "Surprisingly simple means to achieve extraordinary results.",
    img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
    category: "Self-Help",
    category_id: 7
  },
  {
    book_id: 70611,
    title: "The One Thing",
    author: "Gary Keller",
    pages: 212,
    summary: "Surprisingly simple means to achieve extraordinary results.",
    img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
    category: "Self-Help",
    category_id: 7
  },
  {
    book_id: 70612,
    title: "The One Thing",
    author: "Gary Keller",
    pages: 212,
    summary: "Surprisingly simple means to achieve extraordinary results.",
    img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
    category: "Self-Help",
    category_id: 7
  },
];