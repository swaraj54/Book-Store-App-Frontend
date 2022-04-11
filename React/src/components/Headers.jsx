import React,{useState} from 'react';
import {AppBar,Typography, Toolbar,Tabs, Tab,Button} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from "react-router-dom";

const Headers = ({loginuser}) => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar position="sticky">
            <Toolbar>
                <NavLink to="/" style={{color:"white"}} >
                <Typography> <MenuBookIcon/> </Typography>  
                </NavLink>
                <Tabs sx={{ml:"auto"}} textColor="inherit" value={value} indicatorColor="secondary" onChange={(e,val)=>setValue(val)} >
                    <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                    <Tab LinkComponent={NavLink} to="/add" label="Add Book"/>
                    <Tab LinkComponent={NavLink} to="/about" label="About us"/>
                    <Tab LinkComponent={NavLink} to="/cart" label="Cart"/>
                    <Button variant="contained" onClick={()=>loginuser({})}>Logout</Button>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Headers;