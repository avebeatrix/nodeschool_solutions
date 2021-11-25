//Values and promises

function attachTitle(val){
    return 'DR. '+val;
}

let promise = new Promise(function(fullfill, reject){
    fullfill('MANHATTAN');
})
promise.then(attachTitle).then(console.log);