// Multiple promises

function all(promise1, promise2) {
    return new Promise(function (fullfill, reject) {
        let counter = 0;
        let values = [];

        promise1.then(function (val) {
            counter++;
            values[0] = val;
            if (counter === 2) {
                fullfill(values);
            }
        });
        promise2.then(function (val) {
            counter++;
            values[1] = val;
            if (counter === 2) {
                fullfill(values);
            }
        });
    })
}

all(getPromise1(), getPromise2()).then(console.log);