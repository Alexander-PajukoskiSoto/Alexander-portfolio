import './App.css';
import selfPortrait from './images/selfPortrait.png'
import Header from './components/Header';
import AsideSvg from './components/AsideSvg';
import RightAside from './components/RightAsideSvg';
import ProjectHeader from './components/ProjectHeaderSvg';
import SideBlob from './components/SideBlobSvg';
import ProjectBlob from './components/ProjectBlobSvg';
import ProjectFooterSvg from './components/ProjectFooterSvg';
function App() {
  return (
    <div className="App">
      <div className='fullDiv'>
        <Header />
        <AsideSvg />
        <RightAside />
        <img src={selfPortrait} className='selfPortrait' alt='self-portrait'/>
      </div>
      <div className="fullDiv">
        <SideBlob className="sideBlob"/>
        <ProjectHeader className="projectHeader"/>
        <ProjectBlob className="projectBlob"/>
        <div className="doubleFullDiv">
          <div className="fullDiv"></div>
          <div className="fullDiv footerDiv">
          <ProjectFooterSvg className="footer" id="contact"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
