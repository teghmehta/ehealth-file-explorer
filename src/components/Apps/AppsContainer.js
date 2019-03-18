import React, { Component } from 'react';
import './AppDiv.css';
import AppDiv from "./AppDiv";

class AppsContainer extends Component {
    render() {
        return (
            <div className="apps-container">
                <AppDiv path="/Medly" logoPath={require("../../res/MedlyS.png")} appName={"Medly"}/>
                <AppDiv path="/bant" logoPath={require("../../res/bantLogo.png")} appName={"bant"} backgroundColor={'background-color-bant'}/>
                <AppDiv path="/Ned" logoPath={require("../../res/nedLogo.png")} appName={"Ned"}/>
                <AppDiv path="/breathe" logoPath={require("../../res/breatheLogo.png")} appName={"breathe"}/>
                <AppDiv path="/iCanCope" logoPath={require("../../res/iCanCopeLogo.png")} appName={"iCanCope"} backgroundColor={'background-color-icc'}/>
            </div>
        );
    }
}

export default AppsContainer;