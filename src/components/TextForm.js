import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState('');
    const handleUpClick=()=>{  
        setText(text.toUpperCase());
        props.showAlert('Converted to UpperCase', 'success')
    }
    const handleLoClick=()=>{ 
        setText(text.toLowerCase())
        props.showAlert('Converted to LowerCase', 'success')
    }
    const handleClear=()=>{
        setText('');
        props.showAlert('Text cleared', 'success')
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard', 'success')
    }
    const handleSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed', 'success')
    }

    
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }

    return (
        <div className="Container" style={{color:props.mode ===`dark` ? `white`: `black`}}>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="7" style={{backgroundColor:props.mode ==='dark' ? 'dark': 'light', color:props.mode==='dark'? 'grey':'black'}}></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lower case</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra space</button>

        </div>

        <div className="container my-2">
            <h2>Text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008* text.split(' ').length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length==0? 'Enter something to preview': text}</p>
        </div>
        </div>
    )
}
