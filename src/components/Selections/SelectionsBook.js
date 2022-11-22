// Selections/selections = Cart/cart
// SelectionsBook was ListBook = CartItem
// SelectionsPage was ListPage = CartPage
// Book/book = Item/item
// Books/books = Items/items
// ReadingList needs to be more permanent version of My Reading List

import React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ChangeSelectionsBookQuantity from './ChangeSelectionsBookQuantity';
import SelectionsCard from './SelectionsCard'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SelectionsBook({ book }) {
    // dummy cart
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

    useEffect(()=> {
        setQty(selections.filter((SelectedBook) => SelectedBook.id === book.id).length)
    },[selections, book])

    const [qty, setQty] = useState(selections.filter((SelectedBook) => SelectedBook.id === book.id).length)

return (
    <Grid container spacing={2} sx={{ m: 1, pr: 2, border: '1px solid', borderRadius: 1, alignItems: 'stretch' }}>
        <Grid item xs={12} s={6} md={4}>
            <Item sx={{ height: '100%' }}>
                <Avatar alt={book.title} sx={{ height: '100%', width: '100%' }} variant="rounded" src={book.img} />
            </Item>
        </Grid>

        <Grid item xs={12} s={12} md={12}>
            <Item sx={{ height: '100%', alignContent: 'center' }}>
                <SelectionsCard book={book} />
            </Item>
        </Grid>

        <Grid item xs={12} s={6} md={2}>
            <Item sx={{ height: '100%', alignContent: 'center' }}>
                <ChangeSelectionsBookQuantity book={book} /> //COME BACK
            </Item>
        </Grid>

    </Grid>
);
}