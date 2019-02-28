import React, { Component } from 'react';
import './AppDiv.css';
import AppDiv from "./AppDiv";

class AppsContainer extends Component {
    render() {
        return (
            <div className="apps-container">
                <AppDiv path="/medly" logoPath={require("../../res/MedlyS.png")} appName={"Medly"} isBantOrMedly={true}/>
                <AppDiv path="/bant" logoPath={require("../../res/bant.png")} appName={"bant"} isBantOrMedly={true}/>
                <AppDiv path="/ned" logoPath={require("../../res/ned.JPG")} appName={"Ned"}/>
                <AppDiv path="/breathe" logoPath={require("../../res/breathe.jpg")} appName={"breathe"}/>
                <AppDiv path="/icc" logoPath={require("../../res/icc.jpg")} appName={"iCanCope"}/>
            </div>
        );
    }
}

export default AppsContainer;