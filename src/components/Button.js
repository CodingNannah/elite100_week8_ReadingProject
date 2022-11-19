import React from 'react'
import MUIButton from '@mui/material/Button';

export default function Button({children, ...props}) {
  return (
    <MUIButton variant="contained" {...props}>{children}</MUIButton>
  )
}
