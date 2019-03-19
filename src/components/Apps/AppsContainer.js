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
                        fileDataAndroid={getLatestReleaseFolders("Latest Releases", "/", "icc", "Android")}
                        fileDataIOS={getLatestReleaseFolders("Latest Releases", "/", "icc", "iOS")}/>

                <AppDiv path="/Ned" logoPath={require("../../res/nedLogoPatient.png")} appName={"Ned"}
                        fileDataAndroid={getLatestReleaseFolders("Latest Releases", "/", "Ned", "Android")}
                        fileDataIOS={getLatestReleaseFolders("Latest Releases", "/", "Ned", "iOS")}
                        fileDataWeb={getLatestReleaseFolders("Latest Releases", "/", "Ned", "Web")}/>

                <AppDiv path="/Ned" logoPath={require("../../res/nedLogoClinician.png")} appName={"Ned"}
                        fileDataAndroid={getLatestReleaseFolders("Latest Releases", "/", "Ned", "Android")}
                        fileDataIOS={getLatestReleaseFolders("Latest Releases", "/", "Ned", "iOS")}
                        fileDataWeb={getLatestReleaseFolders("Latest Releases", "/", "Ned", "Web")}/>

            </div>
        );
    }
}

export default AppsContainer;