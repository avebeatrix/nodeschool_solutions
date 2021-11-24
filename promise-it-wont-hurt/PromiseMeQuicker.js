let promise = Promise.resolve('YOU ARE GOOD');
promise.then(console.log);

let promise2 = Promise.reject(new Error('YOU ARE BAD'));
promise2.catch(error => {
    console.log(error.message);
});