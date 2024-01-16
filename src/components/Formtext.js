import React,{useState} from 'react'

export default function Formtext(props) {
    const[text,setText] = useState("")
    const uppercase =()=>{
       let newText = text.toUpperCase();
        setText( newText)

    }
    const lowercase =()=>{
       let newText = text.toLowerCase();
        setText( newText)

    }
    const clearText =()=>{
       let newText ='';
        setText( newText)

    }
   

    const handleOnChange =(e)=>{
        setText(e.target.value)
    }

  return (
    <>
    <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3 ">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} style={{backgroundColor:props.mode ==='light'?'white':'#00182c',color:props.mode === 'light'?'black':'white'}} onChange={handleOnChange}></textarea>
    </div>
    <button disabled={text.length === 0 } className="btn btn-primary mx-2" onClick={uppercase}>Convert to uppercase</button>
    <button disabled={text.length === 0 } className="btn btn-primary mx-2" onClick={lowercase}>Convert to lowercase</button>
    <button disabled={text.length === 0 } className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p><b>{text.split(" ").filter((element)=>{ return element.length !== 0}).length}</b> words and <b>{text.length}</b> charcters</p>
      <p>It took <b>{0.008 * text.split(" ").filter((element)=>{ return element.length !== 0}).length}</b> minutes to read</p>
    </div>
    </>
  )
}
