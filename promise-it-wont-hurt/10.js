// An important rule

function alwaysThrows(){
    return new Promise(function(fullfill, reject){
        throw new Error("OH NOES");
    })
    
}

function iterate(val){
    return new Promise(function(fullfill, reject){
        console.log(val);
        fullfill(val+1);
    });    
}

function onReject(error){
    console.log(error.message);
}

iterate(1).then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).then(null, onReject);