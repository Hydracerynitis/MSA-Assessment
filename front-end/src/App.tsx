import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header,userstate} from './stories/Header/Header';
import {Button} from './stories/Button';
import { Footer } from './stories/Footer/Footer';

function App() {
  const [state, setState] =React.useState<userstate>(userstate.LOGIN);
  const [Name,setName]=useState("");
  const [ImgUrl,setUrl]=useState("");
  const toggleState = () => {
    switch(state){
      case undefined:
      case userstate.LOGIN:{
        setState(userstate.NORMAL);
      }
      break;
      case userstate.NORMAL:{
        setState(userstate.ClOSECONTACT);
      }
      break;
      case userstate.ClOSECONTACT:{
        setState(userstate.INFECTED);
      }
      break;
      case userstate.INFECTED:{
        setState(userstate.LOGIN);
      }
      break;
    }
  };
  return (
    <div className="App">
      <Header UserState={state} Name={Name} ImgUrl={ImgUrl}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={toggleState} label="test" backgroundColor="white"/>
        <Footer UserState={state}/>
      </header>
    </div>
  );
}

export default App;
