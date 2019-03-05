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
            date: "",
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
            path:  "/feature/",
        }, {
            _id: Math.random(),
            title: title,
            name: "Development",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "This is a dev copy",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/dev/",
        }, {
            _id: Math.random(),
            title: title,
            name: "Staging",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "This is a ready to stage",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/staging/",
        },{
            _id: Math.random(),
            title: title,
            name: "Release",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "This is a release",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/release/",
        }, {
            _id: Math.random(),
            title: title,
            name: "Other",
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: "--",
            desc: "This is other files",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/other/",
        }
    ]
}

function generateWords(title) {
    let words = [title + ' Video', 'Video for UHN (Demo)', title, title + ".mp4", title + ".mp3",
        "Information", title + " Powerpoint", "Graphics.png", "App.js", "Index.js",
        "eHealth Bylaws", "UHN", "Folder for " + title];
    return words[Math.floor(Math.random()*words.length)];
}

export function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    if (bytes === "--") return "--";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function generateDummyData(title) {
    let word = generateWords(title);


    return (
        {
            _id: Math.random(),
            title: "Index of " + title,
            name: word,
            mod: randomDate(new Date(2012, 0, 1), new Date()),
            size: Math.floor(Math.random() * 1000000000),
            desc: word,
            icon: require("../../../src/res/icons/file_icon_google_24px.svg"),
            path:  "/" + title,
        }
    )
}


export function randomDate(start, end)  {
    let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toDateString();
}

