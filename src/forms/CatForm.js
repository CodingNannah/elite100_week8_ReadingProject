import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormSchema = Yup.object(
    { name: Yup.string().required('Required') }
)


export default function CatForm({ category }) {

    const initialValues = {
        name: category?.name ?? '',
    }

    const handleSubmit = (values, resetForm) => {
        if (category) {
            console.log("Editing", values)
        } else {
            console.log("Creating", values)
        }
        resetForm(initialValues)
    }

    const handleDelete = () => {
        console.log("deleting category: ", category.name)
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
                id="name"
                name="name"
                label="Category Name"
                placeholder="Name"
                type="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />

            <Button type="submit" fullWidth sx={{ my: 1 }} variant="contained">{category ? "Edit Category" : "Create Category"}</Button>
            {category ?
                <Button fullWidth color="error" variant="contained" onClick={()=>handleDelete}>Delete</Button>
                : ""}

        </form>
    )
}