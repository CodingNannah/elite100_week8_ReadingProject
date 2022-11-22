import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CategoryBar(actCat, setActCat) {
    // dummy info:
    const categories = [
        {id:1, name:"Cooking"},
        {id:2, name:"Entertainment"},
        {id:3, name:"Marriage"},
        {id:4, name:"Marriage Advice"},
        {id:5, name:"Programming"},
        {id:6, name:"Science"},
        {id:7, name:"Self-Help"}
    ]

    const handleClick = (cat) => {
        // console.info("You clicked the Chip!");
        // to uncheck a checked category (from filled back to outlined)
        if (actCat.id === cat.id){
            setActCat({})
        } else {
            setActCat({cat})
        }
    };

    return (
        <Stack direction="row" spacing={1}>
            {categories.map((cat)=>( 
                cat.id === actCat.id ?
                <Chip key={cat.id} label={cat.name} color="primary" variant="filled" onClick={()=>handleClick(cat)} />
                :
                <Chip key={cat.id} label={cat.name} color="primary" variant="outlined" onClick={()=>handleClick(cat)} />
            ) )}
        </Stack>
    );
}