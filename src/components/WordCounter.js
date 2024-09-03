import React, { useEffect, useState } from 'react'

const WordCounter = () => {
  const [text,setText] = useState('');
  const [wordCount,setWordCount] = useState(0);

  const handleChange = (e)=>{
    setText(e.target.value);  
  }

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  useEffect(() => {
    setWordCount(countWords(text));
  }, [text]);

  return (
    <main>
        <div className='word-counter'>
        <textarea 
            className='input-box' 
            value={text} 
            onChange={handleChange} 
            rows="10"
            cols="50"
            placeholder='Type or paste your text'>
        </textarea>
        <button className='clear-btn' onClick={()=>setText("")}>CLEAR</button>
        </div>
        <div className='btns'>
          <h4 className='btn'>Character : {text.length}</h4>
          <h4 className='btn'>Words : {wordCount}</h4>
        </div>
    </main>
  )
}

export default WordCounter;
