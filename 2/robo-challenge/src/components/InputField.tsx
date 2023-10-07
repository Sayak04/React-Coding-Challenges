import React, { useState, ChangeEvent } from 'react';
import '../App.css';
import useStore from './../../store';

const InputField: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const { setTitle } = useStore();

  const handleInput = (event : ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }

  const handleSubmit = () => {
    setTitle(inputText);
  }
  
  return (
    <div>
      <input type="text" className="input-field" placeholder='Generate Robot' onChange={handleInput}/>
      <button className='btn' onClick={handleSubmit}>Enter</button>
    </div>
  )
}

export default InputField;
