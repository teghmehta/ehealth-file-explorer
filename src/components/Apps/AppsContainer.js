import React, { Component } from 'react';
import './AppDiv.css';
import AppDiv from "./AppDiv";

class AppsContainer extends Component {
    render() {
        return (
            <div className="apps-container">
                <AppDiv path="/Medly" logoPath={require("../../res/MedlyS.png")} appName={"Medly"} isBantOrMedly={true}/>
                <AppDiv path="/bant" logoPath={require("../../res/logo-bant.svg")} appName={"bant"} isBantOrMedly={true}/>
                <AppDiv path="/Ned" logoPath={require("../../res/ned.JPG")} appName={"Ned"}/>
                <AppDiv path="/breathe" logoPath={require("../../res/breathe.jpg")} appName={"breathe"}/>
                <AppDiv path="/iCanCope" logoPath={require("../../res/icc.jpg")} appName={"iCanCope"}/>
            </div>
        );
    }
}

export default AppsContainer;