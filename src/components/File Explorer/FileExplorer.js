import React, { Component } from 'react';
import Header from "../Header/Header";
import FileTable from "./FileTable";
import DataSort from "react-data-sort";
import FileHeader from "./FileHeader";
import FileRow from "./FileRow";

class FileExplorer extends Component {
/*
    constructor(props) {
        super(props);
        this.state ={
            fileData: this.props.fileData,
        };
    }

    componentDidMount() {
        this.setState({fileData : this.props.fileData});
    }

    componentWillReceiveProps() {
        // this.setState({fileData : this.props.fileData});
        console.log("STATE:" ,this.state.fileData);
        console.log("Props:" ,this.props.fileData);
    }

    onSort(e, key, type) {
        // this.setState({fileData : this.props.fileData});
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
            case "size":
            default:
                data.sort((a,b) => a[key].localeCompare(b[key]));
        }
        console.log('sort',this.state.fileData);

        this.setState({fileData: data})
    }*/
    state = {
        sortBy: "name",
        direction: "asc",
        activePage: 0,
        searchQuery: ''
    };
    setSortBy = sortBy => {
        this.setState({ sortBy });
    };
    toggleDirection = () => {
        this.setState({
            direction: this.state.direction === "asc" ? "desc" : "asc"
        });
    };

    render() {
        const { sortBy, direction, activePage, searchQuery } = this.state;
        console.log("render");
        return (
            <div className="App">
                <Header showTitle={true} title={this.props.fileData[0].title}/>
                <DataSort
                    sortBy={sortBy}
                    direction={direction}
                    data={this.props.fileData}
                    render={({ data }) => (
                    <table className={"file-table"}>
                        <tbody>
                        {/*onSort={this.onSort.bind(this)}*/}
                        <FileHeader setSortBy={this.setSortBy}
                                    sortBy={sortBy}
                                    direction={direction}
                                    toggleDirection={this.toggleDirection}
                                    name={"Name"} mod={"Last Modified"} size={"Size"} desc={"Description"} />
                        <tr>
                            <th colSpan="5">
                                <hr/>
                            </th>
                        </tr>

                        {/*WHEN ADDING NEW props dont forget to map here*/}
                        {data.map((function (item) {
                            return <FileRow key={item._id} icon={item.icon} name={item.name} mod={item.mod} size={item.size} desc={item.desc} path={item.path}/>
                        }))}
                        </tbody>
                    </table>
                    /*<table>
                        <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(({ id, name }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>*/
                )}/>
                {/*<FileTable  fileData={this.props.fileData}/>*/}
                {/*onSort={this.onSort.bind(this)}*/}
            </div>
        );
    }
}

export default FileExplorer;
