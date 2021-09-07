import React,{useState} from 'react';
import {Header} from './stories/Header/Header';
import {userstate} from './stories/Header/UserState';
import {Button} from './stories/Button';
import { Footer } from './stories/Footer/Footer';
import { Diary } from './Pages/Diary';
import { Submit } from './Pages/Submit';
import { Home } from './Pages/Home';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import { Entry } from './stories/EntryDiary/EntryDiary';


function App() {
  const [state, setState] = useState<userstate>(userstate.LOGIN);
  const [Name,setName]=useState("");
  const [ImgUrl,setUrl]=useState("");
  const [Entries,setEntries]=useState<Entry[]>([])
  const [interests,setInterest]=useState<string[]>([])
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
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home" >
            <Home user={{Name:Name,ImgUrl:ImgUrl,state:state,Entries:Entries}} interest={interests} />
          </Route>
          <Route path="/Submit" >
            <Submit user={{Name:Name,ImgUrl:ImgUrl,state:state,Entries:Entries}} interest={interests} />
          </Route>
          <Route path="/Entry">
            <Diary user={{Name:Name,ImgUrl:ImgUrl,state:state,Entries:Entries}} interest={interests} />
          </Route>
        </Switch>
      </Router>
      <Button onClick={toggleState} label="test" backgroundColor="white"/>
      <Footer UserState={state}/>
    </div>
  );
}

export default App;
