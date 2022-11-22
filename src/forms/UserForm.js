import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const FormSchema = Yup.object(
    {
        first_name: Yup.string().required('Required'),
        last_name: Yup.string().required('Required'),
        email: Yup.string('Enter your email').email('Enter a valid email').required('Required'),
        password: Yup.string('Create a password').required('Required'),
    }
)


export default function UserForm({ user }) {

    const initialValues = {
        // ? for STOP! if undefined, don't keep looking for info
        // ?? if left is undefined, do the right
        firstName: user?.firstName ?? '',
        lastName: user?.lastName ?? '',
        email: user?.email ?? '',
        password: user?.password ?? '',
    }

    const handleSubmit = (values, resetForm) => {
        if (user) {
            console.log("Editing", values)
        } else {
            console.log("Creating", values)
        }
        resetForm(initialValues)
    }

    const handleDelete = () => {
        console.log("deleting user: ", user.email)
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
                id="firstName"
                name="first_name"
                label="First Name"
                placeholder="First Name"
                type="first_name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                id="lastName"
                name="last_name"
                label="Last Name"
                placeholder="Last Name"
                type="last_name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                id="email"
                name="email"
                label="Email"
                placeholder="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                fullWidth
                sx={{ mb: 2 }}
                id="password"
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" fullWidth sx={{ my: 1 }} variant="contained">{user ? "Edit" : "Register"}</Button>
            {user ?
                <Button fullWidth color="error" variant="contained" onClick={()=>handleDelete}>Delete</Button>
                : ""}
        </form>
    )
}