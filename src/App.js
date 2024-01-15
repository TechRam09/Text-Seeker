
import './App.css';
// import About from './components/About';
import Formtext from './components/Formtext';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
    const darkMode = ()=>{
      if(mode === 'light'){
        setmode("dark")
        document.body.style.backgroundColor="#00182c"
      }
      else{
        setmode("light")
        document.body.style.backgroundColor="white"
      }
    }
  return (
    <>
    {/* <Router> */}
     <Navbar title="Text-Seeker" mode={mode} togglemode={darkMode}/>
     <div className="container mt-3">
      <Formtext heading="Enter The text to Analyze" mode={mode}/>
     </div>
     {/* </Router> */}
    </>
  
  );
}

export default App;
