import React, { Component } from 'react';
import './AppDiv.css';
import { BrowserRouter, Route, Link, } from "react-router-dom";
import FileExplorer from "../File Explorer/FileExplorer";
import Parent from "../Parent";
import App from "../../App";
import {Switch} from "react-router";

class AppDiv extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app-logo">
                    <h2 className={"app-name"}>{this.props.appName}</h2>
                    <Link to={this.props.path}>
                        {this.props.isBantOrMedly ? (
                            <img src={this.props.logoPath} alt={this.props.appName} className="app-logo-img bant-medly-sizing"/>
                        ) : (
                            <img src={this.props.logoPath} alt={this.props.appName} className="app-logo-img"/>
                        )}
                    </Link>
                    <Switch>
                        <Route path="/medly"  component={FileExplorer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppDiv;

