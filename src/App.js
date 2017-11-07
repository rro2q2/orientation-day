// main app controller for Slide Show App
// Adam Starr 
// 2017 June 30

import React, { Component } from 'react';
import Slide from './Slide';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


class App extends Component {
   getSlideShows(path) {
        var request = new XMLHttpRequest();
        request.open("GET", path, false);
        request.send(null)
        return JSON.parse(request.responseText).slideShowArray;
    }
    showArray = this.getSlideShows('/Slides/SlideShows.json')
  render() {
    return (
    <Router>
      <div className="Slide Show" style={{padding:"30px"}}>
      
      <Route exact={true} path="/" render = { (match) => <ul> 
        {this.showArray.map(show => (
     <Link key={show} to={"Slides/"+show+'/'}><li><p> <font size="30 0">{show}</font></p></li></Link>
    ))}
       </ul>} />
       <div>
      <Route path="/Slides/:slideName" render = {({ match }) => (<Slide slideName={match.params.slideName} fileType = ".png"/>)}/>
      </div>
      </div>
     </Router>
    );
  }
}

export default App;


