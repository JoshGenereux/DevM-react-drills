import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('Write some text...')

  const handleChange =(e) =>{
      setInput(e.target.value)
  }

  return (
    <div className="App">
      <form>
        <input
            className='input'
            onChange={(e)=>handleChange(e)}/>
        <p className='p'>{input}</p>
      </form>
    </div>
  );
}

export default App;
