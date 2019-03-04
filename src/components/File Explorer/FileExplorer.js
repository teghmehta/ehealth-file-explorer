import React, { Component } from 'react';
import Header from "../Header/Header";
import FileTable from "./FileTable";

class FileExplorer extends Component {
    render() {
        return (
            <div className="App">
                <Header showTitle={true} title={this.props.fileData[0].title}/>
                <FileTable fileData={this.props.fileData}/>
            </div>
        );
    }
}

export default FileExplorer;
