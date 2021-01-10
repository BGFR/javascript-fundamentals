//PB-04. Browser History 

function browserHistory(obj, arr) {

    for (let line of arr) {
        if (line !== "Clear History and Cache") {
            let [move, web] = line.split(' ')
            switch (move) {
                case 'Close':
                    if (obj['Open Tabs'].includes(web)) {
                        let index = obj['Open Tabs'].indexOf(web)
                        obj['Open Tabs'].splice(index, 1)
                        obj['Recently Closed'].push(web)
                        obj['Browser Logs'].push(line)
                    } break;
                case 'Open':
                    obj['Open Tabs'].push(web)
                    obj['Browser Logs'].push(line)
                    break;
            }
        } else {
            obj['Open Tabs'] = []
            obj['Recently Closed'] = []
            obj['Browser Logs'] = []
        }

    }

    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`)
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`)

}

browserHistory(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate",
            "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"])
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)
