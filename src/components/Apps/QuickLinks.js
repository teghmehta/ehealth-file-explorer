import React, { Component } from 'react';
import FileRow from "../File Explorer/FileRow";
import FileHeader from "../File Explorer/FileHeader";

class QuickLinks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fileData: this.props.fileData,
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {

        this.setState({fileData: this.props.fileData})
    }

    onSort(key, type, direction) {
        let data = this.props.fileData;
        switch (type) {
            case Date:
                data.sort(function (a, b) {
                    return new Date(a.mod) - new Date(b.mod);
                });
                break;
            case "":
                data.sort((a, b) => a[key].localeCompare(b[key]));
                break;
            case 0:
                data.sort(function (a, b) {
                    return a.size - b.size
                });
                break;
            default:
                data.sort((a, b) => a[key].localeCompare(b[key]));
        }

        if (direction === 'desc') {
            data.reverse();
        }
        this.setState({fileData: data})
    }

    render() {
        return (
            <div className="file-table-container quick-links">
                <h2 className={"os-title"}>{this.props.fileData[0].os}</h2>
                <table className={"file-table"}>
                    <tbody>
                    <FileHeader onSort={this.onSort.bind(this)} name={"Name"} mod={"Last Modified"} size={"Size"}
                                desc={"Description"}/>
                    <tr>
                        <td colSpan="5">
                            <hr/>
                        </td>
                    </tr>
                    {this.props.fileData.map((function (item, index) {
                        return <FileRow key={item._id} title={item.title} icon={item.icon}
                                        name={item.name} mod={item.mod} size={item.size} desc={item.desc}
                                        path={item.path}/>
                    }))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QuickLinks;
