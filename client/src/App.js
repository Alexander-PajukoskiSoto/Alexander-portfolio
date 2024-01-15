import './App.css';
import Header from './components/Header';
import AsideSvg from './components/AsideSvg';
function App() {
  return (
    <div className="App">
      <div className='fullDiv'>
      <Header />
      <AsideSvg />
      </div>
      <div className='fullDiv'>
      </div>
    </div>
  );
}

export default App;
