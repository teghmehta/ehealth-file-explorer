import React, { Component } from 'react';
import Header from "../Header/Header";
import FileTable from "./FileTable";

class FileExplorer extends Component {
    render() {
        return (
            <div className="App">
                <Header showTitle={true}/>
                <FileTable/>
            </div>
        );
    }
}

export default FileExplorer;
