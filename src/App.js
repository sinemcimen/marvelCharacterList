import React, { Component } from 'react';
import MChrcts from './comp-folder/characterList';
import {Header} from './comp-folder/header';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CharDetail from './comp-folder/char-detail';

function App(){
  return(
    <div className="App">
      <Header/>
      <Router>
          <Route path="/" component={MChrcts} exact/>
          <Route path="/character/:id" component={CharDetail}/>
      </Router> 
    </div>

  );

}

export default App;