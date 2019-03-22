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
                <h3 className={"os-title"}>{this.props.fileData[0].os}</h3>
                <table className={"file-table"}>
                    <tbody>
                    <FileHeader onSort={this.onSort.bind(this)} name={"Name"} mod={"Last Modified"} size={"Size"}
                                desc={"Description"}/>
                    <tr>
                        <td colSpan="5">
                            <hr/>
                        </td>
                    </tr>
                    {/*the key is 2 for the parent-route because the other keys in the fileData are <= 1*/}
                    {this.props.fileData.map((function (item, index) {
                        /* //This checks for every other item in the table shade it.
                         if (index % 2 === 0) {
                             return <FileRow className="shaded" key={item._id} title={item.title} icon={item.icon}
                                             name={item.name} mod={item.mod} size={item.size} desc={item.desc}
                                             path={item.path}/>
                         } else {
                             return <FileRow shaded={false} key={item._id} title={item.title} icon={item.icon}
                                             name={item.name} mod={item.mod} size={item.size} desc={item.desc}
                                             path={item.path}/>
                         }*/
                        return <FileRow shaded={false} key={item._id} title={item.title} icon={item.icon}
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
