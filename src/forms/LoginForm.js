import React from 'react';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// const FormSchema and initialValues - do not req from state; can live out of function
const FormSchema = Yup.object(
    {
        email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: Yup.string('Enter your password').required('Password is required'),
    }
)

const initialValues = {
    email: '',
    password: '',
}


export default function LoginForm() {

    const handleSubmit = (values, resetForm) => {
        console.log(values)
        resetForm(initialValues)
    }

    const formik = useFormik({
        initialValues,
        validationSchema: FormSchema,
        onSubmit: (values, {resetForm}) => handleSubmit(values, resetForm),
    })

    return (
        <form onSubmit={formik.handleSubmit}>
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
            <Button type="submit" fullWidth variant="contained">Login</Button>
        </form>
    )
}