import React, { Component } from 'react';
import './AppDiv.css';
import {Link} from "react-router-dom";
import QuickLinks from "../File Explorer/QuickLinks";
import {getBuilds, getLatestReleaseFolders} from "../Dummy Data/DummyData";
import FileTable from "../File Explorer/FileTable";

class AppDiv extends Component {
    render() {
        return (
                <div className="app-logo">
                    <div className={"app-div-container"}>
                        <Link to={this.props.path}>
                            {/*<h2 className={"app-name"}>{this.props.appName}</h2>*/}
                            <img src={this.props.logoPath} alt={this.props.appName} className="app-logo-img"/>
                        </Link>
                        <div className="vl"/>

                    </div>
                        <div className={"quick-links-container"}>
                            <QuickLinks fileData={getLatestReleaseFolders("Latest Releases", "/", "/")}/>
                        </div>

                </div>
        );
    }
}

export default AppDiv;

