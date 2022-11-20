import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormHelperText, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FormSchema = Yup.object(
    { 
        book_id: Yup.number().integer().required('Required'),
        title: Yup.string().required('Required'),
        author: Yup.string().required('Required'),
        // pages: Yup.number().integer().required('Required'),
        // summary: Yup.string().required('Required'),
        img: Yup.string().url().required('Required'),
        category_id: Yup.number().integer().required('Required'),
    }    
)


export default function AdminBkForm({ book }) {

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
        book_id: book?.book_id ?? 0,
        title: book?.title ?? '',
        author: book?.author ?? '',
        pages: book?.pages ?? 0,
        summary: book?.summary ?? '',
        img: book?.img ?? '',
        category_id: book?.category_id ?? ''
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
        console.log("deleting book: ", book.title)
    }


    const formik = useFormik({
        initialValues,
        validationSchema: FormSchema,
        onSubmit: (values, {resetForm}) => handleSubmit(values, resetForm),
        enableReinitialization: true,
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                id="book_id"
                name="book_id"
                label="Book ID"
                placeholder="Book ID"
                type="book_id"
                value={formik.values.book_id}
                onChange={formik.handleChange}
                error={formik.touched.book_id && Boolean(formik.errors.book_id)}
                helperText={formik.touched.book_id && formik.errors.book_id}
            />       
            <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                id="title"
                name="title"
                label="Book Title"
                placeholder="Book Title"
                type="title"
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
                type="author"
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
                type="pages"
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
                type="summary"
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
                type="img"
                value={formik.values.img}
                onChange={formik.handleChange}
                error={formik.touched.img && Boolean(formik.errors.img)}
                helperText={formik.touched.img && formik.errors.img}
            />
            <FormControl fullwidth>
                <InputLabel id="category-label-id">Category</InputLabel>
                <Select
                    id = "category_id"
                    name = "category_id"
                    value = {formik.values.category_id}
                    type = "category-label-id"
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

            
            <Button type="submit" fullWidth sx={{ my: 1 }} variant="contained">{book.book_id ? "Create Book" : "Edit Book" }</Button>
            
            <Button fullWidth color="error" variant="contained" onClick={()=>handleDelete}>Delete</Button>
            

        </form>
    )
}