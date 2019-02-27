import React, { Component } from 'react';
import './FileTable.css';

class FileHeader extends Component {
    render() {
        return (
            <tr>
                <td align="left" valign="top"><img src="" alt=""/></td>
                <th align="left">{this.props.name}</th>
                <th align="left">{this.props.mod}</th>
                <th align="left">{this.props.size}</th>
                <th align="left">{this.props.desc}</th>
            </tr>
        );
    }
}

export default FileHeader;

