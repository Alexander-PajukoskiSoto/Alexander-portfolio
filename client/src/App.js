import './App.css';
import React,{useState, useEffect} from 'react';
import selfPortrait from './images/selfPortrait.png'
import Header from './components/Header';
import AsideSvg from './components/AsideSvg';
import RightAside from './components/RightAsideSvg';
import ProjectHeader from './components/ProjectHeaderSvg';
import SideBlob from './components/SideBlobSvg';
import ProjectBlob from './components/ProjectBlobSvg';
import ProjectFooterSvg from './components/ProjectFooterSvg';
import AboutMe from './components/AboutMeSvg';
function App() {
  const [isLoaded,setIsLoaded] = useState(false)

  useEffect(() => {
    try{
      setIsLoaded(true)
      console.log("blablabla")
    }catch(error){
      console.error(error)
    }

  },[])
  return (
    <div className="App">
      <div className='fullDiv'>
        <Header />
        <AsideSvg />
        <RightAside />
        <img src={selfPortrait} className='selfPortrait' alt='self-portrait'/>
        <AboutMe className="aboutMeContainer"/>
      </div>
      <div className="fullDiv">
        <SideBlob className="sideBlob"/> 
        <ProjectHeader className="projectHeader"/> 
        <ProjectBlob className="projectBlob" id="project"/> 

          {isLoaded ? (
                      <ProjectFooterSvg className="footer" id="contact"/>

          )
        :
        (
          console.log("hi")
        )}
      </div>
    </div>
  );
}

export default App;
