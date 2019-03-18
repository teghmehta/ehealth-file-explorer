import React, { Component } from 'react';
import AppsContainer from "./Apps/AppsContainer";
import Header from "./Header/Header";

class Parent extends Component {
    render() {
        return (
                <div className="App">
                    <Header  title={"Quick Links"} showTitle={true}/>
                    <AppsContainer/>
                </div>
        );
    }
}

export default Parent;
