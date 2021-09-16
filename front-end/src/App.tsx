import React,{useEffect, useState} from 'react';
import {Header} from './stories/Header/Header';
import {userstate,DecodeEnum} from './stories/Header/UserState';
import {Button} from './stories/Button';
import { Footer } from './stories/Footer/Footer';
import { Diary } from './Pages/Diary';
import { Submit } from './Pages/Submit';
import { Home } from './Pages/Home';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import { Entry } from './stories/EntryDiary/EntryDiary';
import { useQuery } from '@apollo/client';
import { SELF } from './api/Queries';
import { Self } from './api/__generated__/Self';

function App() {
  const { loading, error, data } = useQuery<Self>(SELF);
  const user = data==undefined? {name:"",imgUrl:"",state:userstate.LOGIN,Entries:[]} : data!.self
  return (
    <div className="App">
      <Header UserState={DecodeEnum(user.state)} Name={user.name} ImgUrl={user.imgUrl}/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home" >
            <Home user={{Name:user.name,ImgUrl:user.imgUrl,state:DecodeEnum(user.state),Entries:[]}} interest={[]} />
          </Route>
          <Route path="/Submit" >
            <Submit user={{Name:user.name,ImgUrl:user.imgUrl,state:DecodeEnum(user.state),Entries:[]}} interest={[]} />
          </Route>
          <Route path="/Entry">
            <Diary user={{Name:user.name,ImgUrl:user.imgUrl,state:DecodeEnum(user.state),Entries:[]}} interest={[]} />
          </Route>
        </Switch>
      </Router>
      <Footer UserState={DecodeEnum(user.state)}/>
    </div>
  );
}

export default App;
