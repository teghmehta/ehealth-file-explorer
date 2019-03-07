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
                    return new Date(a.mod) - new Date(b.mod);
                });
                break;
            case "":
                data.sort((a,b) => a[key].localeCompare(b[key]));
                break;
            case 0:
                data.sort(function(a,b){
                    return a.size - b.size
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
                    {/*the key is 2 for the parent-route because the other keys in the fileData are <= 1*/}
                    <FileRow key={2} icon={require('../../res/icons/return_icon_24px.svg')} name={"Parent Directory"} mod={''} size={'--'} desc={''} path={this.props.fileData[0].parentPath}/>
                    {this.props.fileData.map((function (item) {
                        return <FileRow key={item._id} title={item.title} icon={item.icon} name={item.name} mod={item.mod} size={item.size} desc={item.desc} path={item.path}/>
                    }))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FileTable;

