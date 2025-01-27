import { Button, TextField } from '@mui/material'
import React from 'react'

const Blogpage = () => {
  return (
    <div>
      <div className="container">
        <div className="formcontainer"><br />
        <h1>Add Details </h1>
            <TextField id="outlined-basic" label="Blog Name" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Description" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Author Name" variant="outlined" /><br /><br />
            <Button variant="contained">Submit</Button>
        </div>
        
      </div>
    </div>
  )
}

export default Blogpage
