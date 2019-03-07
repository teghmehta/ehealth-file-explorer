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
              <Route exact path ={"/:app(medly|bant|ned|icc|breathe)"}   render={(props)=> <FileExplorer fileData={getOS(props.match.params.app,
                   props.match.params.app)} />}/>


              <Route exact path ={"/:app(medly|bant|ned|icc|breathe)/:os(ios|android)/"}  render={(props)=> <FileExplorer fileData={getReleaseFolders(props.match.params.os,
                   props.match.params.app + "/" + props.match.params.os)} />}/>

              <Route path ={"/:app(medly|bant|ned|icc|breathe)/:os(ios|android)/:version/"}  render={(props)=> <FileExplorer fileData={getDummyData(props.match.params.version,
                  "TEGH test")}/>} />

            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
