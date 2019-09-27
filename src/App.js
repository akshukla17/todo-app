import React, { Component } from "react";
// import logo from "./logo.svg";
import FirstComponent, { SecondComponent } from './components/learning-examples/FirstComponent';
import Counter from './components/counter/Counter';
import "./App.css";

function App() {
  return (
    <div className='App'>
      My todo application
      <Counter />
    </div>
  );
}



const ThirdComponent = () => {
  return (<div>Third Component</div>)
}

export default App;
