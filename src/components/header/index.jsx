import React from "react"
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from '@mui/material';


export const Header = () => {
  return (
    <AppBar
      position='fixed'
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}> 
        <Typography
          variant="h5"
          color='#fff'
        >Info Space</Typography>
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap:'50px'}}>
          <Link
            component="a"
            variant="body1"
            href="/asteroid"
            color='#fff'
            underline="hover"
          >
          asterioid
          </Link>
          <Link
            component="button"
            variant="body1"
            href="#"
            color='#fff'
            underline="hover"
          >
                      planets
          </Link>
          <Link
            component="button"
            variant="body1"
            href="#"
            color='#fff'
            underline="hover" 
          >
            missions
          </Link>
          <Link
            component="button"
            variant="body1"
            href="#"
            color='#fff'
            underline="hover" 
          >
            space-x
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}