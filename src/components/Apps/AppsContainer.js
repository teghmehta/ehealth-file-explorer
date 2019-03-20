import React, { Component } from 'react';
import './AppDiv.css';
import AppDiv from "./AppDiv";
import {getLatestReleaseFolders} from "../Dummy Data/DummyData";

class AppsContainer extends Component {
    render() {
        return (
            <div className="apps-container">
                <AppDiv path="/Medly" logoPath={require("../../res/MedlyS.png")} appName={"Medly"}
                        fileDataAndroid={getLatestReleaseFolders("Latest Releases", "/", "Medly", "Android")}
                        fileDataIOS={getLatestReleaseFolders("Latest Releases", "/", "Medly", "iOS")}/>

                <AppDiv path="/bant" logoPath={require("../../res/bantLogo.png")} appName={"bant"} backgroundColor={'background-color-bant'}
                        fileDataAndroid={getLatestReleaseFolders("Latest Releases", "/", "bant", "Android")}
                        fileDataIOS={getLatestReleaseFolders("Latest Releases", "/", "bant", "iOS")}/>

                 <AppDiv path="/breathe" logoPath={require("../../res/breatheLogo.png")} appName={"breathe"}
                         fileDataAndroid={getLatestReleaseFolders("Latest Releases", "/", "breathe", "Android")}
                         fileDataIOS={getLatestReleaseFolders("Latest Releases", "/", "breathe", "iOS")}/>

                <AppDiv path="/iCanCope" logoPath={require("../../res/iCanCopeLogo.png")} appName={"iCanCope"} backgroundColor={'background-color-icc'}
                        fileDataAndroid={getLatestReleaseFolders("Latest Releases", "/", "iCanCope", "Android")}
                        fileDataIOS={getLatestReleaseFolders("Latest Releases", "/", "iCanCope", "iOS")}/>

                <AppDiv path="/NedPatient" logoPath={require("../../res/nedLogoPatient.png")} appName={"NedPatient"}
                        fileDataAndroid={getLatestReleaseFolders("Latest Releases", "/", "NedPatient", "Android")}
                        fileDataIOS={getLatestReleaseFolders("Latest Releases", "/", "NedPatient", "iOS")}
                        fileDataWeb={getLatestReleaseFolders("Latest Releases", "/", "NedPatient", "Web")}/>

                <AppDiv path="/NedClinician" logoPath={require("../../res/nedLogoClinician.png")} appName={"NedClinician"}
                        fileDataAndroid={getLatestReleaseFolders("Latest Releases", "/", "NedClinician", "Android")}
                        fileDataIOS={getLatestReleaseFolders("Latest Releases", "/", "NedClinician", "iOS")}
                        fileDataWeb={getLatestReleaseFolders("Latest Releases", "/", "NedClinician", "Web")}/>

            </div>
        );
    }
}

export default AppsContainer;