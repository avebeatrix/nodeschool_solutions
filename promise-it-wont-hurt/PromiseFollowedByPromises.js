let promise = first();
promise.then(secret => {
    return second(secret);
}).then(console.log);