import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('hello')

  const handleChange =(e) =>{
      setInput(e.target.value)
  }

  return (
    <div className="App">
      <form>
        <input onChange={(e)=>handleChange(e)}/>
        <p>{input}</p>
      </form>
    </div>
  );
}

export default App;
