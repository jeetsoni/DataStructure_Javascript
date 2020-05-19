const Queue = require('./Queue');

function findBin(n){
    let result = [];
    let muQueue = new Queue();
    var s1,s2;
    muQueue.enqueue("1")
    for(var i = 0; i < n; i++){
        result.push(muQueue.dequeue());
        s1 = result[i] + "0";
        s2 = result[i] + "1"

        muQueue.enqueue(s1);
        muQueue.enqueue(s2);
    }
    return result;
}
console.log(findBin(10))