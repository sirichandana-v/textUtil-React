import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState('');
    const handleUpClick=()=>{  
        setText(text.toUpperCase())
    }
    const handleLoClick=()=>{ 
        setText(text.toLowerCase())
    }
    const handleClear=()=>{
        setText('');
    }
    
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }

    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="7"></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lower case</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>

        </div>

        <div className="container my-2">
            <h2>Text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008* text.split(' ').length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
