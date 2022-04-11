import Headers from './components/Headers';
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Register from './loginCompo/Register';
import Login from './loginCompo/Login';
import Homepage from './loginCompo/Homepage';
import {BrowserRouter  } from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [user, loginuser] = useState({});
  return (
    

    <div>
        <Routes>
          <Route exact path="/*" element={user && user._id ? <Home loginuser={loginuser}/> :<Login loginuser={loginuser} /> } />
          <Route exact path="/login" element={<Login loginuser={loginuser}  />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </div>


  );
}

export default App;
