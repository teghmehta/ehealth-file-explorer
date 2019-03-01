import React, { Component } from 'react';
import './App.css';
import Parent from "./components/Parent";
import {Switch} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import FileExplorer from "./components/File Explorer/FileExplorer";
import {getDummyData, getOS, getReleaseFolders} from './components/Dummy Data/DummyData'

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={"/"} component={Parent}/>
              <Route path ="/medly"  render={()=> <FileExplorer fileData={getOS("Medly")} />}/>
              <Route path ="/bant"  render={()=> <FileExplorer fileData={getOS("bant")}/>} />
              <Route path ="/ned"  render={()=> <FileExplorer fileData={getOS("Ned")}/>} />
              <Route path ="/breathe"  render={()=> <FileExplorer fileData={getOS("Breathe")}/>} />
              <Route path ="/icc"  render={()=> <FileExplorer fileData={getOS("iCanCope")}/>} />


              <Route path ="/ios"  render={()=> <FileExplorer fileData={getReleaseFolders("iOS")} />}/>
              <Route path ="/android"  render={()=> <FileExplorer fileData={getReleaseFolders("Android")}/>} />

              <Route path ="/feature"  render={()=> <FileExplorer fileData={getDummyData("Feature")}/>} />
              <Route path ="/dev"  render={()=> <FileExplorer fileData={getDummyData("Dev")}/>} />
              <Route path ="/staging"  render={()=> <FileExplorer fileData={getDummyData("Staging")}/>} />
              <Route path ="/release"  render={()=> <FileExplorer fileData={getDummyData("Release")}/>} />
              <Route path ="/other"  render={()=> <FileExplorer fileData={getDummyData("Other")}/>} />

            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
