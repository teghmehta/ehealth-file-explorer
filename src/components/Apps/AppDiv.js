import React, { Component } from 'react';
import './AppDiv.css';
import {Link} from "react-router-dom";

class AppDiv extends Component {
    render() {
        return (
                <div className="app-logo">
                    <h2 className={"app-name"}>{this.props.appName}</h2>
                    <Link to={this.props.path}>
                        {this.props.isBantOrMedly ? (
                            <img src={this.props.logoPath} alt={this.props.appName} className="app-logo-img bant-medly-sizing"/>
                        ) : (
                            <img src={this.props.logoPath} alt={this.props.appName} className="app-logo-img"/>
                        )}
                    </Link>
                </div>
        );
    }
}

export default AppDiv;

