import React, { Component } from 'react';
import './FileTable.css';
import {withRouter} from "react-router";

class FileHeader extends Component {

    constructor(props) {
        super(props);
        this.displayText.bind(this);

        this.state = {direction: '', nameArrow: false, modArrow: false, sizeArrow: false, descArrow: false};
        //TODO: might have to give it an initial state
    }

    componentWillMount() {
        //This clears the arrows when you route to a new file path
        this.unlisten = this.props.history.listen((location, action) => {
            this.setState({direction: '', nameArrow: false, modArrow: false, sizeArrow: false, descArrow: false})
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }

    checkDirection(name, type, arrow) {
        // checks the direction but also if you clicked a new heading to sort by, it resets the arrow
        if (this.state.direction === 'desc' || this.state[arrow] ===false) {
            this.props.onSort(name, type, 'desc');
            this.setState({direction: 'asc'});
        } else {
            this.props.onSort(name, type, 'asc');
            this.setState({direction: 'desc'});
        }

        this.setState({nameArrow: false, modArrow: false, sizeArrow: false, descArrow: false});
        this.setState({[arrow]: true});
    }

    displayText(name, arrow) {
        if (this.state.direction === '' || arrow === false) {
            return name;
        } else if (this.state.direction === 'asc') {
            return name + "▼";
        } else {
            return name + "▲"
        }
    }


    render() {
        return (
            <tr>
                <td align="left" valign="top"><img src="" alt=""/></td>
                <th onClick={() => this.checkDirection("name", '', 'nameArrow')} className={"header-title"} align="left">{this.displayText(this.props.name, this.state.nameArrow)}</th>
                <th onClick={() =>  this.checkDirection('mod', Date, 'modArrow')} className={"header-title"} align="left">{this.displayText(this.props.mod, this.state.modArrow)}</th>
                <th onClick={() =>  this.checkDirection('size', 0, 'sizeArrow')} className={"header-title"} align="left">{this.displayText(this.props.size, this.state.sizeArrow)}</th>
                <th onClick={() =>  this.checkDirection('desc', "", 'descArrow')} className={"header-title"} align="left">{this.displayText(this.props.desc, this.state.descArrow)}</th>
            </tr>
        );
    }
}

export default withRouter(FileHeader);

