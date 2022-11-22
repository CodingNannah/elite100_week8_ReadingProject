import React from 'react';
import {useState, useEffect} from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ChangeCartItemQuantity from './ChangeCartItemQuantity';
import CartCard from '/CartCard';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CartItem({item}) {
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
        <Grid container spacing={2} sx={{m:1, pr:2, border:'1px solid', borderRadius:1, alignItems: 'stretch' }}>
            <Grid item xs={12} s={6} md={4}>
                <Item sx={{ height: '100%'}}>
                    <Avatar alt={item.name} sx={{ height: '100%', width: '100%' }} variant="rounded" src={item.img}/>
                </Item>
            </Grid>

            <Grid item xs={12} s={6} md={3}>
                <Item sx={{height:'100%', alignContent:'center' }}>
                    <CartCard item={item}/>
                </Item>
            </Grid>

            <Grid item xs={12} s={6} md={2}>
                <Item sx={{height:'100%', alignContent:'center' }}>
                    <ChangeCartItemQuantity item={item}/> //COME BACK
                </Item>
            </Grid>

            <Grid item xs={12} s={6} md={2}>
                <Item sx={{height:'100%', alignContent:'center' }}>
                    <div>
                        <strong>Item Subtotal</strong><br/>
                        PRICE GOES HERE
                    </div> 
                </Item>
            </Grid>
           
        </Grid>
    );
}