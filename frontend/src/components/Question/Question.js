import React,{useState,useEffect} from 'react'; 
import ReactDOM from 'react-dom'; 
import axios from 'axios';
  
function Question()
{
    const question = useState('');

    useEffect(() =>{
        fetch('/api').then(
            response => response.json().then(data => console.log(data))
        )
    });
 
    return (
  <h1>Write any question</h1>

  )
}
  
export default Question;