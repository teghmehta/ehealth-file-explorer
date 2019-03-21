import React, { Component } from 'react';
import AppsContainer from "./Apps/AppsContainer";
import Header from "./Header/Header";
import PopupBox from "../App";

class Parent extends Component {
    constructor(props) {
        super(props);

        this.state={show: true};
    }

    componentWillMount() {
        let password;
        do {

            password = prompt("Enter your password: ");
        } while(password !== "ehealth")
    }

    render() {
        return (
            <div className="App">
                <Header  title={"eHealth Innovations - App Download Links"} showTitle={true}/>
                <AppsContainer/>
            </div>
        );
    }
}

export default Parent;
