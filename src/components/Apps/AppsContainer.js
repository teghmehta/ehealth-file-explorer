import React, { Component } from 'react';
import './AppDiv.css';
import AppDiv from "./AppDiv";

class AppsContainer extends Component {
    render() {
        let logoPath = this.props.logoPath;
        //this.props.logoPath
        return (
            <div className="apps-container">
                <AppDiv path="http://apps.ehealthinnovation.org/medly" logoPath={require("../../res/MedlyS.png")} appName={"Medly"}/>
                <AppDiv path="http://apps.ehealthinnovation.org/bant" logoPath={require("../../res/bant.png")} appName={"bant"}/>
                <AppDiv path="http://apps.ehealthinnovation.org/ned" logoPath={require("../../res/ned.JPG")} appName={"Ned"}/>
                <AppDiv path="" logoPath={require("../../res/breathe.jpg")} appName={"breathe"}/>
                <AppDiv path="http://apps.ehealthinnovation.org/icc" logoPath={require("../../res/icc.jpg")} appName={"iCanCope"}/>
            </div>
        );
    }
}

export default AppsContainer;