// Kevin's ItemForm

import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormHelperText, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FormSchema = Yup.object(
    { 
        // book: title vs name
        title: Yup.string().required('Required'),
        author: Yup.string().required('Required'),
        pages: Yup.number().integer(),
        summary: Yup.string(),
        img: Yup.string().url().required('Required'),
        // category or category_id = subject in API
        subject: Yup.number().integer().required('Required'),
    }    
)


export default function BookForm({ book }) {

    // dummy data for drop-down menu creation
    const categories = [
        {id:1, name:"Cooking"},
        {id:2, name:"Entertainment"},
        {id:3, name:"Marriage"},
        {id:4, name:"Marriage Advice"},
        {id:5, name:"Programming"},
        {id:6, name:"Science"},
        {id:7, name:"Self-Help"}
    ]

    const initialValues = {
        // book_id: book?.book_id ?? 0,
        title: book?.title ?? '',
        author: book?.author ?? '',
        pages: book?.pages ?? 0,
        summary: book?.summary ?? '',
        img: book?.img ?? '',
        subject: book?.subject ?? ''
    }

    const handleSubmit = (values, resetForm) => {
        if (book) {
            console.log("Editing", values)
        } else {
            console.log("Creating", values)
        }
        resetForm(initialValues)
    }

    const handleDelete = () => {
        console.log("deleting book: ", book.book_id)
    }


    const formik = useFormik({
        initialValues,
        validationSchema: FormSchema,
        onSubmit: (values, {resetForm}) => handleSubmit(values, resetForm),
        enableReinitialize: true,
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                id="title"
                name="title"
                label="Book Title"
                placeholder="Book Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                id="author"
                name="author"
                label="Author"
                placeholder="Author"
                value={formik.values.author}
                onChange={formik.handleChange}
                error={formik.touched.author && Boolean(formik.errors.author)}
                helperText={formik.touched.author && formik.errors.author}
            />
            <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                id="pages"
                name="pages"
                label="Pages"
                placeholder="Pages"
                value={formik.values.pages}
                onChange={formik.handleChange}
                error={formik.touched.pages && Boolean(formik.errors.pages)}
                helperText={formik.touched.pages && formik.errors.pages}
            />
            <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                id="summary"
                name="summary"
                label="Summary"
                placeholder="Summary"
                value={formik.values.summary}
                onChange={formik.handleChange}
                error={formik.touched.summary && Boolean(formik.errors.summary)}
                helperText={formik.touched.summary && formik.errors.summary}
            />
            <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                id="img"
                name="img"
                label="Book Image URL"
                placeholder="Book Image URL"
                value={formik.values.img}
                onChange={formik.handleChange}
                error={formik.touched.img && Boolean(formik.errors.img)}
                helperText={formik.touched.img && formik.errors.img}
            />
            <FormControl fullwidth>
                <InputLabel id="category-label-id">Category</InputLabel>
                <Select
                    labelId= "category-label-id"
                    id = "category-id"
                    name = "subject"
                    value = {formik.values.subject}
                    placeholder = "Category"
                    label = "Category"
                    onChange = {formik.handleChange}
                    error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                >
                    <MenuItem value = {0}><em>None</em></MenuItem>

                    {
                        categories.map((cat) => (
                        <MenuItem key = {cat.id} value = {cat.id}> {cat.id} | {cat.name} </MenuItem>
                        ))
                    }

                </Select>
                <FormHelperText>{formik.touched.category_id  && formik.errors.category_id }</FormHelperText>
            </FormControl>

            
            <Button type="submit" fullWidth sx={{ my: 1 }} variant="contained">{book ? "Edit Book" : "Create Book" }</Button>
            {book ?
            <Button fullWidth color="error" variant="contained" onClick={()=>handleDelete}>Delete</Button>
            : ''}

        </form>
    )
}