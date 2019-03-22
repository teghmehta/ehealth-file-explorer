
export function getOS(title, parentPath, nextPath) {
    return [
        {
            _id: Math.random(),
            title: title,
            name: "iOS",
            mod: randomDate(new Date(2017, 0, 1), new Date()),
            date: "",
            size: "--",
            desc: "Files for iOS",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path: "/" + nextPath + "/iOS/",
            parentPath: "/" + parentPath
        }, {
            _id: Math.random(),
            title: title,
            name: "Android",
            mod: randomDate(new Date(2017, 0, 1), new Date()),
            size: "--",
            desc: "Files for Android",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:"/" + nextPath + "/Android/",
            parentPath: "/" + parentPath
        }
        ]
}


export function getReleaseFolders(title, parentPath, nextPath) {
    return [
        {
            _id: Math.random(),
            title: title,
            name: "Feature",
            mod: randomDate(new Date(2017, 0, 1), new Date()),
            size: "--",
            desc: "This is a feature",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path: "/" + nextPath + "/Feature/",
            parentPath: "/" + parentPath,
        }, {
            _id: Math.random(),
            title: title,
            name: "Development",
            mod: randomDate(new Date(2017, 0, 1), new Date()),
            size: "--",
            desc: "This is a dev copy",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/" + nextPath + "/Dev/",
            parentPath: +parentPath,
        }, {
            _id: Math.random(),
            title: title,
            name: "Staging",
            mod: randomDate(new Date(2017, 0, 1), new Date()),
            size: "--",
            desc: "This is a ready to stage",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path: "/" + nextPath + "/Staging/",
            parentPath: "/" +parentPath,
        },{
            _id: Math.random(),
            title: title,
            name: "Release",
            mod: randomDate(new Date(2017, 0, 1), new Date()),
            size: "--",
            desc: "This is a release",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/" + nextPath +"/Release/",
            parentPath: "/" + parentPath,
        }, {
            _id: Math.random(),
            title: title,
            name: "Other",
            mod: randomDate(new Date(2017, 0, 1), new Date()),
            size: "--",
            desc: "This is other files",
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/" + nextPath + "/Other/",
            parentPath: "/" + parentPath,
        }
    ]
}

export function getLatestReleaseFolders(title, parentPath, nextPath, os) {
    return [
        {
            _id: Math.random(),
            title: title,
            name: "Latest Feature",
            mod: randomDate(new Date(2019, 0, 1), new Date()),
            size: "--",
            desc: "This is a feature",
            os: os,
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path: "/" + nextPath + "/" + os + "/Feature/",
            parentPath: "/" + parentPath,
        }, {
            _id: Math.random(),
            title: title,
            name: "Latest Development",
            mod: randomDate(new Date(2019, 0, 1), new Date()),
            size: "--",
            desc: "This is a dev copy",
            os: os,
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path:  "/" + nextPath + "/" + os + "/Dev/",
            parentPath: +parentPath,
        }, {
            _id: Math.random(),
            title: title,
            name: "Latest Staging",
            mod: randomDate(new Date(2019, 0, 1), new Date()),
            size: "--",
            desc: "This is a ready to stage",
            os: os,
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path: "/" + nextPath + "/" + os + "/Staging/",
            parentPath: "/" +parentPath,
        },  {
            _id: Math.random(),
            title: title,
            name: "Latest Release",
            mod: randomDate(new Date(2019, 0, 1), new Date()),
            size: "--",
            desc: "This is a ready for release",
            os: os,
            icon: require("../../../src/res/icons/folder_icon_google_24px.svg"),
            path: "/" + nextPath + "/" + os + "/Release/",
            parentPath: "/" +parentPath,
        },
    ]
}

export function getBuilds(parentPath) {
    let dummyData = [];
    for (let i = 0; i<5; i++) {
        dummyData.push({
            _id: Math.random(),
            title: "build" +Math.floor(Math.random() * 100),
            name: "build" +Math.floor(Math.random() * 100),
            mod: randomDate(new Date(2017, 0, 1), new Date()),
            size: Math.floor(Math.random() * 1000000000),
            desc: "build" +Math.floor(Math.random() * 100),
            icon: require("../../../src/res/icons/file_icon_google_24px.svg"),
            path: "/" + parentPath,
            parentPath: "/" + parentPath,
        });
    }
    return dummyData;
}


function generateWords(title) {
    let words = [title + ' Video', 'Demo for UHN', title, title + ".mp4", title + ".mp3",
        "Information", title + " Powerpoint", "Design.png", "App.js", "Index.js",
        "eHealth Bylaws", "UHN", "Folder for " + title, 'Legal Inquiries', 'Developers Eyes Only',
        'Medical Clearance', 'pv025', 'pv023', 'Interactive Feedback', 'OLIS Data', 'React.js'];
    return words[Math.floor(Math.random()*words.length)];
}

export function bytesToSize(bytes) {
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    if (bytes === "--") return "--";
    let i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}

export function getDummyData(title, parentPath) {
    let dummyData = [];
    for (let i = 0; i<100; i++) {
        dummyData.push(generateDummyData(title, parentPath));
    }
    return dummyData;

}

function generateDummyData(title, parentPath) {
    let word = generateWords(title);

    return (
        {
            _id: Math.random(),
            title: title,
            name: word,
            mod: randomDate(new Date(2017, 0, 1), new Date()),
            size: Math.floor(Math.random() * 1000000000),
            desc: word,
            icon: require("../../../src/res/icons/file_icon_google_24px.svg"),
            path: "/" + parentPath,
            parentPath: "/" + parentPath + "/",
        }
    )
}

export function getRandomTime() {
    let hrs =(Math.floor(Math.random() * 24) + 1);
    let min = (Math.floor(Math.random() * 59) + 1);

    let mFormat = (min<10 ? "0" : "");

    return hrs+ ":" +mFormat+min;
}


export function randomDate(start, end)  {
    let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toLocaleDateString('en-us', {hour12: false, year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
}

