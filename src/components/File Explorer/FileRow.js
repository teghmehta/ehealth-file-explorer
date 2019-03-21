import React, { Component } from 'react';
import './FileTable.css';
import {Link} from "react-router-dom";
import {bytesToSize, getRandomTime} from '../Dummy Data/DummyData'

class FileRow extends Component {
    render() {
        return (
            <tr className={`file-row ${this.props.className}`}>
                <td valign="top"><img src={this.props.icon} alt=""/></td>
                <td><Link to={this.props.path}>{this.props.name}</Link></td>
                <td>{this.props.mod}</td>
                <td>{bytesToSize(this.props.size)}</td>
                {/*<td>{this.props.desc}</td>*/}
            </tr>
    );
    }
}

    export default FileRow;

