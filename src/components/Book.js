// This is Item.js in Kevin's class example

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Book() {
    // dummy book
    const book = {
        "id": 70605,
        "cat": "Self-Help",
        "title": "The One Thing",
        "author": "Gary Keller",
        "pages": 212,
        "summary": "Surprisingly simple means to achieve extraordinary results.",
        "img": "https://res.cloudinary.com/drgbhwpia/image/upload/v1668882753/Reading%20Lists/one_nwoxnz.jpg"
    }
    return (
        <Grid container spacing={1} sx={{m:1, pr:1, pb:1, border:'1px solid', borderRadius:1 }}>
            <Grid item xs={12} s={12} md={12}>
                <Item sx={{ display:'flex', justifyContent:'center'}}>
                    <Avatar alt={book.title} sx={{ height: "30%", width: "30%" }} variant="rounded" src={book.img}></Avatar>
                </Item>
            </Grid>
            <Grid item xs={12} s={12} md={12}>
                <Item sx={{height:'100%', alignContent:'center' }}>
                    <Typography variant='subtitle1'><strong>Book Title:</strong></Typography>
                    <Typography variant='body1'>{book.title}</Typography>
                </Item>
            </Grid>
            <Grid item xs={12} s={12} md={12}>
                <Item sx={{height:'100%', alignContent:'center' }}>
                    <Typography variant='subtitle1'><strong>Author:</strong></Typography>
                    <Typography variant='body1'>{book.author}</Typography>
                </Item>
            </Grid>
            <Grid item xs={6} s={6} md={6}>
                <Item sx={{height:'100%', alignContent:'center' }}>
                    <Typography variant='subtitle1'><strong>Book ID:</strong></Typography>
                    <Typography variant='body1'>{book.id}</Typography>
                </Item>
            </Grid>
            <Grid item xs={6} s={6} md={6}>
                <Item sx={{height:'100%', alignContent:'center' }}>
                    <Typography variant='subtitle1'><strong>Category:</strong></Typography>
                    <Typography variant='body1'>{book.cat}</Typography>
                </Item>
            </Grid>
            <Grid item xs={12} s={12} md={12}>
                <Item sx={{height:'100%', alignContent:'center' }}>
                    <Typography variant='subtitle1'><strong>Summary:</strong></Typography>
                    <Typography variant='body1'>{book.summary}</Typography>
                </Item>
            </Grid>
        </Grid>
    );
}