import React, { Component } from 'react';
import './AppDiv.css';
import {Link} from "react-router-dom";
import QuickLinks from "./QuickLinks";

class AppDiv extends Component {
    render() {
        return (
                <div className="app-logo">
                    <div className={`app-div-container ${ this.props.backgroundColor }`}>
                        <Link className={'app-div-link'} to={this.props.path}>
                            <img src={this.props.logoPath} alt={this.props.appName} className="app-logo-img"/>
                            <h2 className={`see-all-files ${this.props.textColor}`}>Click to See All Files</h2>
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

