import React, { Component } from 'react';
import './FileTable.css';
import FileRow from "./FileRow";
import FileHeader from "./FileHeader";

class FileTable extends Component {

    constructor(props) {
        super(props);
        this.state ={
            fileData: this.props.fileData,
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {

        this.setState({fileData: this.props.fileData})
    }

    onSort(key, type, direction) {
        let data = this.props.fileData;
        switch(type) {
            case Date:
                data.sort(function(a,b){
                    return new Date(b.mod) - new Date(a.mod);
                });
                break;
            case "":
                data.sort((a,b) => a[key].localeCompare(b[key]));
                break;
            case 0:
                data.sort(function(a,b){
                    return b.size - a.size
                });
                break;
            default:
                data.sort((a,b) => a[key].localeCompare(b[key]));
        }

        if (direction === 'desc') {
            data.reverse();
        }
        this.setState({fileData: data})
    }

    render() {
        return (
            <div className="file-table-container">
                <table className={"file-table"}>
                    <tbody>
                    <FileHeader onSort={this.onSort.bind(this)} name={"Name"} mod={"Last Modified"} size={"Size"} desc={"Description"} />
                    <tr>
                        <th colSpan="5">
                            <hr/>
                        </th>
                    </tr>
                    {this.props.fileData.map((function (item) {
                        return <FileRow key={item._id} icon={item.icon} name={item.name} mod={item.mod} size={item.size} desc={item.desc} path={item.path}/>
                    }))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FileTable;

