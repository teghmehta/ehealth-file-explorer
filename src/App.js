import React, { Component } from 'react';
import './App.css';
import Parent from "./components/Parent";
import {Switch} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import FileExplorer from "./components/File Explorer/FileExplorer";
import {getDummyData} from './components/Dummy Data/DummyData'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              {console.log((getDummyData("Title")))}
              <Route exact path={"/"} component={Parent}/>
              <Route path ="/medly"  render={()=> <FileExplorer fileData={getDummyData("Medly")} />}/>
              <Route path ="/bant"  render={()=> <FileExplorer fileData={getDummyData("bant")}/>} />
              <Route path ="/ned"  render={()=> <FileExplorer fileData={getDummyData("Ned")}/>} />
              <Route path ="/breathe"  render={()=> <FileExplorer fileData={getDummyData("Breathe")}/>} />
              <Route path ="/icc"  render={()=> <FileExplorer fileData={getDummyData("iCanCope")}/>} />
              //TODO: Input file data for all
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
