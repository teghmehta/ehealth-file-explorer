import React, { Component } from 'react';
import './AppDiv.css';
import {Link} from "react-router-dom";
import QuickLinks from "../File Explorer/QuickLinks";

class AppDiv extends Component {
    render() {
        return (
                <div className="app-logo">
                    <div className={`app-div-container ${ this.props.backgroundColor }`}>
                        <Link to={this.props.path}>
                            <img src={this.props.logoPath} alt={this.props.appName} className="app-logo-img"/>
                        </Link>

                    </div>
                        <div className={"quick-links-container"}>
                            {this.props.fileDataAndroid ?
                                <QuickLinks fileData={this.props.fileDataAndroid}/> : ""}
                            {this.props.fileDataIOS ?
                                <QuickLinks fileData={this.props.fileDataIOS}/> : ""}
                            {this.props.fileDataWeb ?
                                <QuickLinks fileData={this.props.fileDataWeb}/> : ""}
                        </div>

                </div>
        );
    }
}

export default AppDiv;

