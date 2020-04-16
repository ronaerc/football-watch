import React, {Component} from 'react';

import './App.scss';

import {Header} from './components/header/header.component.jsx';
import {About} from './components/about/about.component.jsx';
import PlayersList from './components/playerslist/playerslist.component.jsx';

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

        <main>
          <About />
          
          <PlayersList />
          
          <section>
            
          </section>
        </main>
      </div>
    )
  } 
    
}

export default App;
