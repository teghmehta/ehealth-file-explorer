import React, { Component } from 'react';
import './FileTable.css';
import FileRow from "./FileRow";
import FileHeader from "./FileHeader";

class FileTable extends Component {
    render() {
        return (
            <div className="file-table-container">
                <table className={"file-table"}>
                    <tbody>
                    <FileHeader name={"Name"} mod={"Last Modified"} size={"Size"} desc={"Description"}/>
                    <tr>
                        <th colSpan="5">
                            <hr></hr>
                        </th>
                    </tr>
                    <FileRow icon={require("../../res/icons/folder_icon_google_24px.svg")} name={"Medly Folder"} mod={"February 28th, 2019"} size={"--"} desc={"Folder"}/>
                    <FileRow icon={require("../../res/icons/file_icon_google_24px.svg")} name={"app.js"} mod={"September 28th, 2018"} size={"5 KB"} desc={"This is the app.js Javascript file"}/>
                    <FileRow icon={require("../../res/icons/file_icon_google_24px.svg")} name={"medly.mp4"} mod={"October 31st, 2018"} size={"100 MB"} desc={"A short video about Medly"}/>
                    <FileRow icon={require("../../res/icons/file_icon_google_24px.svg")} name={"medly2.mp4"} mod={"January 18th, 2019"} size={"1 GB"} desc={"--"}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FileTable;

