import React, {useState}from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './Components/navBar';
import News from './Components/news';
import LoadingBar from "react-top-loading-bar";


const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light'); //Dark mode enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3b3b3bff';
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      }
  }


    return (
      <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="general" pageSize={pageSize} country="us" category="general" mode={mode} />} />
          <Route exact path="/general" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="general" pageSize={pageSize} country="us" category="general" mode={mode} />} />
          <Route exact path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="business" pageSize={pageSize} country="us" category="business" mode={mode} />} />
          <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="entertainment" pageSize={pageSize} country="us" category="entertainment" mode={mode} />} />
          <Route exact path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="health" pageSize={pageSize} country="us" category="health" mode={mode} />} />
          <Route exact path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="science" pageSize={pageSize} country="us" category="science" mode={mode} />} />
          <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="sports" pageSize={pageSize} country="us" category="sports" mode={mode} />} />
          <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="technology" pageSize={pageSize} country="us" category="technology" mode={mode} />} />
        </Routes>
      </Router>
      </div>
    )


}
export default App;
