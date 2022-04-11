import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Book from "./Book";
import './Book.css';

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res)=>res.data)
}

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(()=>{
    fetchHandler().then((data)=> setBooks(data.books))
  },[]);
  return (
    <div>
      <div className="ul">
      {books && books.map((book, i)=>(
        <div className="li" key={i}>
          <Book book={book} key={i}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Books