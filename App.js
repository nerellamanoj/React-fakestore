import logo from './logo.svg';
import './App.css';
import Manoj from './components/functional-components/first';
import ManojKumar from './components/fakestore';
import Buttonname from './components/functional-components/button';
import ButtonComponent from './components/Class-componenet/button';
import Click from './components/Class-componenet/Click';
import ImageCustom from './components/Class-componenet/image';
import ImageCustoms from './components/functional-components/image';




function App() {
  return (
    <div className="App">
      
      <ButtonComponent></ButtonComponent>
      <Click></Click>
      <ImageCustom></ImageCustom>
      <ImageCustoms></ImageCustoms>
      <Buttonname></Buttonname>
      

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
