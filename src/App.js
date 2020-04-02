import React from 'react';
import './App.css';
import Jsontools from './components/jsontools';
import Cssvalidator from './components/cssvalidator';
import Csstools from './components/csstools';
import Htmltools from './components/htmltools';
import Jstools from './components/jstools';
import Baseencoderdecoder from './components/baseencoderdecoder';

function App() {

  return (
    <div className="App">
      <h1>Assignmetn Project For Aspire TECH By<br /> <a href='https://www.twitter.com/_khansofficial'>Mahdi Khan</a><br /> (work in Progress)</h1>
   <Jsontools />
   {/* <Cssvalidator /> */}
   <Csstools />
   <Htmltools />
   <Jstools />
   <Baseencoderdecoder />
    </div>
  );
}

export default App;
