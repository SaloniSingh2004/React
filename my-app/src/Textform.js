import React,{useState} from 'react'

export default function Textform() {
    const handleUpClick=()=>{
      let newText=text.toUpperCase();
      setText(newText);
    }
    const handleLowClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
    }
    function handleRemoveClick(){
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  }
    const handleClearClick=()=>{
      setText("");
    }
    // const handleCopyClick=()=>{
    //   let newText=document.getElementById
    // }
    const handleOnChange=(event) =>{
      setText(event.target.value);
    }

    const[text,setText]=useState('Enter your text here')

  return (
    <>
    <div>
        <textarea name="form-control my3" id="floatingTestArea" placeholder='Leave a comment' rows={8} value={text} onChange={handleOnChange}></textarea>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary' onClick={handleLowClick}>Convert to LowerCase</button>
        <button className='btn btn-primary' onClick={handleRemoveClick}>Remove Extra Space</button>
        <button className='btn btn-primary' onClick={handleClearClick}>Clear Space</button>
        {/* <button className='btn btn-primary' onClick={handleCopyClick}>Copy Space</button> */}
    </div>
    <div className='container my-3'>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the box"}</p>
    </div>
    </>
  );
}
