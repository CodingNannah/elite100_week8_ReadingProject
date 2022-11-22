import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import CatForm from '../forms/CatForm'

const categories = [
    {id:1, name:"Cooking"},
    {id:2, name:"Entertainment"},
    {id:3, name:"Marriage"},
    {id:4, name:"Marriage Advice"},
    {id:5, name:"Programming"},
    {id:6, name:"Science"},
    {id:7, name:"Self-Help"}
]


export default function AdminSelectCat() {

    // empty string retuns False; empty object returns True
    const [cat, setCat] = useState('')
  
    const handleChange = (event) => {
        console.log(event.target.value)
        if(event.target.value === 'default'){
            console.log("No category selected")
            setCat('')
        } else {
            // catSelected is Kevin's newCat
            const catSelected = categories.filter((c) => c.id === event.target.value)[0]
            console.log("Category Selected", catSelected)
            setCat(catSelected)
        }
    }

  return (
    <>
     <FormControl fullwidth>
        <InputLabel id="category-label-id">Category</InputLabel>
            <Select
                labelId= "category-label-id"
                id = "category-id"
                name = "category_id"
                value = {cat ? cat.id : 'default'}
                placeholder = "Category"
                label = "Category"
                onChange = {(event) => handleChange (event)}
            >
                <MenuItem value = {'default'}><em>Select Category to Edit</em></MenuItem>
                {
                    categories.map((cat1) => (
                    <MenuItem key = {cat1.id} value = {cat1.id}> {cat1.id} | {cat1.name} </MenuItem>
                    ))
                }
             
            </Select>
        </FormControl>
        {
            cat ?
            <>
            <Typography sx = {{p:4}} variant = 'h5'>
                Edit {cat.name}
            </Typography>
            <CatForm category = {cat}/> 
            </>
            :
            <>
            <Typography sx = {{p:4}} variant = 'h5'>
                Create
            </Typography>
            <CatForm/>
            </>
        }
    </>

  )
}

