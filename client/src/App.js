import './App.css';
import selfPortrait from './images/selfPortrait.png'
import Header from './components/Header';
import AsideSvg from './components/AsideSvg';
import RightAside from './components/RightAsideSvg';
function App() {
  return (
    <div className="App">
      <div className='fullDiv'>
      <Header />
      <AsideSvg />
      <RightAside />
      <img src={selfPortrait} className='selfPortrait'/>
      </div>
      <div className='fullDiv'>
      </div>
    </div>
  );
}

export default App;
