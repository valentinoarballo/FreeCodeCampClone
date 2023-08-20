import logo from './logo.svg';
import './App.css';
import Testimonio from './components/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>  
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
        nombre=""
        pais=""
        imagen=""
        cargo=""
        empresa=""
        testimonio="" />
      </div>
    </div>
  );
}

export default App;
