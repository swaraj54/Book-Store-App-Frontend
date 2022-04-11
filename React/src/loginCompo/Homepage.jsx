import React from 'react';

const Homepage = ({loginuser}) => {
  return (
    <div>
      <h1>This is home page</h1>
      <button onClick={()=>loginuser({})}>Logout</button>
    </div>
  )
}

export default Homepage;