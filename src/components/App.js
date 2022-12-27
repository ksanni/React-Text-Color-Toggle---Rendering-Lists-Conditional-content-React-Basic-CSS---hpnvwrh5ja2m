import React, { useState , useEffect } from "react";
import '../styles/App.css';



const App = () => {
  const[color,setColor]=useState(false);

const onChangeColor =()=>{
  setColor(!color); 
};

//code here 
  return (
    <div id="main">
      <p className={`${(color === true)? 'blueColor' : 'redColor'}`} >Newton School</p>
      <button id='button' onClick={onChangeColor}>Change Style</button>
    </div>
  )
}


export default App;
