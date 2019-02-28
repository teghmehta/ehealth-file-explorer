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
              {console.log((getDummyData("Title")))}
              <Route exact path={"/"} component={Parent}/>
              <Route path ="/medly"  render={()=> <FileExplorer fileData={getOS("Medly")} />}/>
              <Route path ="/bant"  render={()=> <FileExplorer fileData={getOS("bant")}/>} />
              <Route path ="/ned"  render={()=> <FileExplorer fileData={getOS("Ned")}/>} />
              <Route path ="/breathe"  render={()=> <FileExplorer fileData={getOS("Breathe")}/>} />
              <Route path ="/icc"  render={()=> <FileExplorer fileData={getOS("iCanCope")}/>} />


              <Route path ="/ios"  render={()=> <FileExplorer fileData={getReleaseFolders("ios")} />}/>
              <Route path ="/android"  render={()=> <FileExplorer fileData={getReleaseFolders("android")}/>} />

              <Route path ="/feature"  render={()=> <FileExplorer fileData={getDummyData("feature")}/>} />
              <Route path ="/dev"  render={()=> <FileExplorer fileData={getDummyData("dev")}/>} />
              <Route path ="/staging"  render={()=> <FileExplorer fileData={getDummyData("staging")}/>} />
              <Route path ="/release"  render={()=> <FileExplorer fileData={getDummyData("release")}/>} />
              <Route path ="/other"  render={()=> <FileExplorer fileData={getDummyData("other")}/>} />

            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
