import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(
      ()=>setAlert(null),1500
    )

  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(7 42 71)';
      showAlert('Dark Mode has been enabled','success')

    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been enabled','success')  
    }
  }
  return (
    <>
  <Router>
  <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
        <Routes>
              <Route exact path="/about" element={<About mode={mode} />}>
                
              </Route>
  
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze" mode={mode}/>}>
                
              </Route>
        </Routes>
    </div>
  </Router>
    

    
    </>
  );
}

export default App;
