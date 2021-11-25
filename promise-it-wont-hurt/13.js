//Do some work

var qhttp = require('q-io/http');

function getUserByID(ID){
    return new Promise(function(fullfill, reject){
        fullfill(qhttp.read('http://localhost:7001/'+ID));
    })
}

qhttp.read('http://localhost:7000').then(getUserByID).then(function(json){
    console.log(JSON.parse(json));
}).done()