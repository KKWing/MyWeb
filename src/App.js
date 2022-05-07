import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet'
import  Welcome  from './components/Welcome'
import  Hello  from './components/Hello'
import  Message  from './components/Message'
import  Counter  from './components/Counter'
import  FunctionClick  from './components/FunctionClick'
import  ClassClick  from './components/ClassClick'
import  EventBind  from './components/EventBind'
import  ParentComponent  from './components/ParentComponent'
import  UserGreeting  from './components/UserGreeting'
import NameList from './components/NameList'

function App() {
  return (
     <div className="App">
       <NameList></NameList>
       {/*<<UserGreeting />

      ParentComponent></ParentComponent>
       <EventBind></EventBind>
       <Counter></Counter> 
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
       <Message />

        <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
       </Greet>
       <Greet name="Clark" heroName="Superman">
        <button>Action</button>
       </Greet>
       <Greet name="Diana" heroName="Wonderwoman"/>

      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="Superman"></Welcome> 
      <Greet name="Diana" heroName="Wonder Woman"></Greet>
      <Welcome name="Bruce" heroName="Batman"></Welcome>

        <Hello></Hello>  */}
    </div>
  );
}

export default App;
