import React, { Component } from 'react';
import './FileTable.css';
import {Link} from "react-router-dom";
import {bytesToSize} from '../Dummy Data/DummyData'

class FileRow extends Component {
    render() {
        return (
            <tr className={`file-row ${this.props.className}`}>
                <td valign="top"><img src={this.props.icon} alt=""/></td>
                <td className={"td-name"}><Link to={this.props.path}>{this.props.name}</Link></td>
                <td><Link to={this.props.path}>{this.props.mod}</Link></td>
                <td><Link to={this.props.path}>{bytesToSize(this.props.size)}</Link></td>
                {/*<td>{this.props.desc}</td>*/}
            </tr>
    );
    }
}

    export default FileRow;

