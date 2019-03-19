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
              <Route exact path ={"/:app(Medly|bant|Ned|iCanCope|breathe)"}   render={(props)=> <FileExplorer fileData={getOS(props.match.params.app,
                   "", props.match.params.app)} />}/>

              <Route exact path ={"/:app(Medly|bant|Ned|iCanCope|breathe)/:os(iOS|Android|Web)/"}  render={(props)=> <FileExplorer fileData={getReleaseFolders(props.match.params.os,
                   props.match.params.app + "/",  props.match.params.app + "/" + props.match.params.os)} />}/>

              <Route exact path ={"/:app(Medly|bant|Ned|iCanCope|breathe)/:os(iOS|Android|Web)/:version(Dev|Staging|Release|Other|Feature)/"}  render={(props)=> <FileExplorer fileData={getDummyData(props.match.params.version,
                  props.match.params.app + "/" + props.match.params.os,
                  props.match.params.app + "/" + props.match.params.os + "/" + props.match.params.version )}/>} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
