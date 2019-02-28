
/*
<FileRow icon={require("../../res/icons/folder_icon_google_24px.svg")} name={"Medly Folder"} mod={"February 28th, 2019"} size={"--"} desc={"Folder"}/>
<FileRow icon={require("../../res/icons/file_icon_google_24px.svg")} name={"app.js"} mod={"September 28th, 2018"} size={"5 KB"} desc={"This is the app.js Javascript file"}/>
<FileRow icon={require("../../res/icons/file_icon_google_24px.svg")} name={"medly.mp4"} mod={"October 31st, 2018"} size={"100 MB"} desc={"A short video about Medly"}/>
<FileRow icon={require("../../res/icons/file_icon_google_24px.svg")} name={"medly2.mp4"} mod={"January 18th, 2019"} size={"1 GB"} desc={"--"}/>
*/

/*
<Route exact path={"/"} component={Parent}/>
<Route path ="/medly"  render={()=> <FileExplorer fileData={{title: "Index of Medly"}}/>} />
<Route path ="/bant"  render={()=> <FileExplorer fileData={{title: "Index of bant"}}/>} />
<Route path ="/ned"  render={()=> <FileExplorer fileData={{title: "Index of ned"}}/>} />
<Route path ="/breathe"  render={()=> <FileExplorer fileData={{title: "Index of breathe"}}/>} />
<Route path ="/icc"  render={()=> <FileExplorer fileData={{title: "Index of iCanCope"}}/>} />*/


export function getDummyData(title) {
    let dummyData = [];
    for (let i = 0; i<10; i++) {
        dummyData.push(generateDummyData(title));
    }
    return dummyData;

}

export function getOS(title) {
    return [
        {
            _id: Math.random(),
            title: title,
            name: "iOS",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "Files for iOS",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path: "/ios/"
        }, {
            _id: Math.random(),
            title: title,
            name: "Android",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "Files for Android",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/android/",
        }
        ]
}

export function getReleaseFolders(title) {
    return [
        {
            _id: Math.random(),
            title: title,
            name: "Feature",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "This is a feature",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/feature",
        }, {
            _id: Math.random(),
            title: title,
            name: "Development",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "This is a dev copy",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/dev",
        }, {
            _id: Math.random(),
            title: title,
            name: "Staging",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "This is a ready to stage",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/staging",
        },{
            _id: Math.random(),
            title: title,
            name: "Release",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "This is a release",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/release",
        }, {
            _id: Math.random(),
            title: title,
            name: "Other",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "This is other files",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/other",
        }
    ]
}

function generateWords(title) {
    let words = [title + ' Video', 'Video for UHN (Demo)', title, title + ".mp4", title + ".mp3",
        "Information", title + " Powerpoint", "Graphics.png", "App.js", "Index.js",
        "eHealth Bylaws", "UHN", "Folder for " + title];
    return words[Math.floor(Math.random()*words.length)];
}

function generateSize() {
    let size = ["GB","TB", "KB", "B", "MB"];
    return size[Math.floor(Math.random()*size.length)];
}

function generateDummyData(title) {
    let word = generateWords(title);


    return (
        {
            _id: Math.random(),
            title: "Index of " + title,
            name: word,
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: Math.floor((Math.random() * 100) + 1) + " " +  generateSize(),
            desc: word,
            icon: require("../../../src/res/icons/file_icon_google_24px.svg"),
            path:  "/" + title,
        }
    )
}


export function randomDate(start, end)  {
    let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    return date.toDateString();
}