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
                            <hr/>
                        </th>
                    </tr>

                    {/*WHEN ADDING NEW props dont forget to map here*/}
                    {this.props.fileData.map((function (item) {
                        return <FileRow key={item._id} icon={require("../../res/icons/folder_icon_google_24px.svg")} name={item.name} mod={item.mod} size={item.size} desc={item.desc} path={item.path}/>
                    }))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FileTable;

