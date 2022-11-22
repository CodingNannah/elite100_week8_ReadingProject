// SelectedBook was ListBook == Kevin's CartItem
// SelectionsPage was ListPage == Kevin's CartPage
// Selections = Kevin's cart or Cart
// SelectionCard = Kevin's CartCard
// book = Kevin's item
// ReadingList needs to be more permanent version of My Reading List
import React from 'react';
import {useState, useEffect} from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ChangeSelectionBookQuantity from './ChangeSelectionBookQuantity';
import SelectionCard from '/SelectionCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SelectedBook({book}) {
  // dummy book
  // const book = {
  //     book_id: 70605,
  //     title: "The One Thing",
  //     author: "Gary Keller",
  //     pages: 212,
  //     summary: "Surprisingly simple means to achieve extraordinary results.",
  //     img: "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg",
  //     category: "Self-Help",
  //     category_id: 7 
  // }
  return (
      <Grid container spacing={2} sx={{m:1, pr:2, border:'1px solid', borderRadius:1 , alignItems: 'stretch'}}>
          <Grid item xs={12} s={6} md={4}>
              <Item sx={{ height: '100%'}}>
                  <Avatar alt={book.title} sx={{ height: '100%', width: '100%' }} variant="rounded" src={book.img}/>
              </Item>
          </Grid>

          <Grid item xs={12} s={12} md={12}>
              <Item sx={{height:'100%', alignContent:'center' }}>
                  <SelectionCard book={book}/>
              </Item>
          </Grid>

          <Grid item xs={12} s={6} md={2}>
              <Item sx={{height:'100%', alignContent:'center' }}>
                  <ChangeSelectionBookQuantity book={book}/> //COME BACK
              </Item>
          </Grid>
         
      </Grid>
  );
}