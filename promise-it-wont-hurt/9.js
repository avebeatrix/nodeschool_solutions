//Throw an error

function parsePromised(json) {
    return new Promise(function (fullfill, reject) {
        try {
            fullfill(JSON.parse(json));
        } catch (e) {
            reject(e);
        }
    });
}

function onReject(error) {
    console.log(error.message);
}

parsePromised(process.argv[2]).then(null, onReject);