import React, { Component } from 'react';
import './FileTable.css';

class FileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
             active : this.props.key === this.props.sortBy,
        };
        this.onSort.bind(this);
    }

    onSort ()  {
    if (this.state.active) {
        this.props.toggleDirection();
    }
    this.props.setSortBy(this.props.key);
}

    render() {
        return (
            <tr>
                <td align="left" valign="top"><img src="" alt=""/></td>
                {/*onClick={e => this.props.onSort(e, 'name', "")}*/}
                <th className={"header-title"} onClick={() => this.onSort} align="left">{this.props.name}{this.state.active ? this.props.direction === "asc" ? "▲" : "▼" : null}</th>
                <th className={"header-title"} onClick={() => this.onSort} align="left">{this.props.mod}{this.state.active ? this.props.direction === "asc" ? "▲" : "▼" : null}</th>
                <th className={"header-title"} onClick={() => this.onSort} align="left">{this.props.size}{this.state.active ? this.props.direction === "asc" ? "▲" : "▼" : null}</th>
                <th className={"header-title"} onClick={() => this.onSort} align="left">{this.props.desc}{this.state.active ? this.props.direction === "asc" ? "▲" : "▼" : null}</th>
            </tr>
        );
    }
}

export default FileHeader;

