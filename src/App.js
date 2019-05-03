import React, { Component } from 'react';
import './App.css';
import Parent from "./components/Parent";
import listReactFiles from "list-react-files"
import {Switch} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import FileExplorer from "./components/File Explorer/FileExplorer";
import {getDummyData, getOS, getReleaseFolders} from './components/Dummy Data/DummyData'
const fs = require('fs');

class App extends Component {

  render() {
      try {
          console.log("App.js Try");


          if (process.argv.length <= 2) {
              console.log("Usage: " + process.env.PUBLIC_URL + " path/to/directory");
              process.exit(-1);
          }

          var path = process.argv[2];

          fs.readdir(process.env.PUBLIC_URL, function(err, items) {
              console.log(items);

              for (var i=0; i<items.length; i++) {
                  console.log(items[i]);
              }
          });
      } catch (e) {

      }
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={"/"} component={Parent}/>
              <Route exact path ={"/:app(Medly|bant|NedPatient|NedClinician|iCanCope|breathe)"}   render={(props)=> <FileExplorer fileData={getOS(props.match.params.app,
                   "", props.match.params.app)} />}/>


              <Route exact path ={"/:app(Medly|bant|NedPatient|NedClinician|iCanCope|breathe)/:os(iOS|Android|Web)/"}  render={(props)=> <FileExplorer fileData={getReleaseFolders(props.match.params.os,
                   props.match.params.app + "/",  props.match.params.app + "/" + props.match.params.os)} />}/>

              <Route exact path ={"/:app(Medly|bant|NedPatient|NedClinician|iCanCope|breathe)/:os(iOS|Android|Web)/:version(Dev|Staging|Release|Other|Feature)/"}  render={(props)=> <FileExplorer fileData={getDummyData(props.match.params.version,
                  props.match.params.app + "/" + props.match.params.os,
                  props.match.params.app + "/" + props.match.params.os + "/" + props.match.params.version )}/>} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
