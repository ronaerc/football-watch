import React, {Component} from 'react';

import './App.css';

import {Header} from './components/header/header.component.jsx';

class App extends Component {
  constructor(){
    super();

    this.state = {
      siteName: 'Football',
      siteSubName: 'Watch'
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header siteName={this.state.siteName} siteSubName={this.state.siteSubName} />
      </div>
    )
  } 
    
}

export default App;
