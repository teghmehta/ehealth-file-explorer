import React, { Component } from 'react';
import './FileTable.css';

class FileHeader extends Component {

    render() {
        return (
            <tr>
                <td align="left" valign="top"><img src="" alt=""/></td>
                <th onClick={() => this.props.onSort('name', "")} className={"header-title"} align="left">{this.props.name}</th>
                <th onClick={() =>  this.props.onSort('mod', Date)} className={"header-title"} align="left">{this.props.mod}</th>
                <th onClick={() =>  this.props.onSort('size', 0)} className={"header-title"} align="left">{this.props.size}</th>
                <th onClick={() =>  this.props.onSort('desc', "")} className={"header-title"} align="left">{this.props.desc}</th>
            </tr>
        );
    }
}

export default FileHeader;

