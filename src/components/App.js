import React, { useState } from "react";
import '../styles/App.css';



const App = () => {
  const[color,setColor]=useState(false);

const onChangeColor =()=>{
  setColor(!color); 
};
const handleOnChange = (event) => {
  setText(event.target.value);
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
