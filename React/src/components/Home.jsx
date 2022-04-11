import React from 'react';
import {Box,Button,Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import AddBook from "./AddBook";
import Books from "./Book/Books";
import About from "./About";
import BookDetail from "./Book/BookDetail";
import Headers from './Headers';
import {Routes,Route} from "react-router-dom";
import Cart from './Cart';



const Home = ({loginuser}) => {
  return (
    <div>
        <header>
          <Headers loginuser={loginuser}/>
            
      {/* <Box display="flex" flexDirection="column" alignItems="center">
        <Button LinkComponent={Link} to='/books' sx={{ marginTop: 5}} variant="contained">
          <Typography varient='h3'>Welcome</Typography>  
        </Button>
      </Box> */}
        </header>  
        <main>
          <Routes>
            <Route path="/add" element={<AddBook/>} loginuser={loginuser} exact />
            <Route path="/books" element={<Books/>} loginuser={loginuser} exact />
            <Route path="/about" element={<About/>} loginuser={loginuser} exact />
            <Route path="/books/:id" element={<BookDetail/>} loginuser={loginuser} exact />
            <Route path="/cart" element={<Cart/>} loginuser={loginuser} exact />
          </Routes>
      </main> 
      {/* <button onClick={()=>loginuser({})}>Logout</button> */}
    </div>
  )
}

export default Home