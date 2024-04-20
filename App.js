import logo from './logo.svg';
import './App.css';
import Manoj from './components/functional/first';
import ManojKumar from './components/fakestore';
import Buttonname from './components/functional/button';
import ButtonComponent from './components/Class-componenet/button';
import Click from './components/Class-componenet/Click';




function App() {
  return (
    <div className="App">
      <Buttonname></Buttonname>
      <ButtonComponent></ButtonComponent>
      <Click></Click>

     {/* <ManojKumar/> */}








      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
