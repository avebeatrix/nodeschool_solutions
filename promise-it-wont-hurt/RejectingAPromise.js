var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, 400)
});

function onReject(error) {
    // Your solution here
    console.log(error.message);
}

// Your solution here
promise.then(() => { }, onReject);