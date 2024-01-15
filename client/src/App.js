import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
function App() {
  return (
    <div className="App">
      <div className='fullDiv'>
      <Header />
      <Aside />
      </div>
      <div className='fullDiv'>
      </div>
    </div>
  );
}

export default App;
