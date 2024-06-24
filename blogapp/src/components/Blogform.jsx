import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Blogform = () => {
  return (
    <div>
        <Typography variant='h4'>Blog Form</Typography><br />
        <TextField label="Blog Name" variant="outlined" /><br /><br />
        <TextField label="Description" variant="outlined" /><br /><br />
        <TextField label="Author Name" variant="outlined" /><br /><br />
        <Button variant="contained">Submit</Button>

    </div>
  )
}

export default Blogform