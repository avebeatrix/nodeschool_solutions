//Always asynchronous

let promise = new Promise(function(fullfill, reject){
    fullfill('PROMISE VALUE');
})
promise.then(console.log);
console.log('MAIN PROGRAM');