import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import { Greet } from './components/Greet'
import Counter  from './components/Counter'
import Parent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parent />
        <Counter />
        <Greet name="ahmet" />
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
