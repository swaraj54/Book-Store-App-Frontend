import React from 'react';
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';
import './Book.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useCart} from 'react-use-cart';

const Book = (props) => {
  const {addItem} = useCart();
    const history = useNavigate();
    const {_id, name, author, description, price, image} = props.book;
    const deleteHandler = async () => {
        await axios.delete(`http://localhost:5000/books/${_id}`)
        .then(res=> res.data)
        .then(()=> history("/"))
        .then(()=> history("/books"))
    }
  return (
    <div className="card">
        <img src={image} />
        <article>{author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>{price}</h3>
        <Button variant="contained" LinkComponent={Link} to={`./${_id}`} sx={{mt:0,height:"20px"}}>Update</Button>
        <Button variant="contained" onClick={deleteHandler} sx={{mt:0.5,height:"20px"}}>Delete</Button>
        <Button variant="contained" sx={{mt:0.5, height:"20px"}} onClick={()=>addItem(props.book)}>Add to Cart</Button>
        
    </div>
  )
}

export default Book