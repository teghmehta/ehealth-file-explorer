import React, { Component } from 'react';
import './FileTable.css';

class FileRow extends Component {
    render() {
        return (
            <tr className={"file-row"}>
                <td valign="top"><img src={this.props.icon} alt=""/></td>
                <td><a href="?C=N;O=D">{this.props.name}</a></td>
                <td>{this.props.mod}</td>
                <td>{this.props.size}</td>
                <td>{this.props.desc}</td>
            </tr>
    );
    }
    }

    export default FileRow;

