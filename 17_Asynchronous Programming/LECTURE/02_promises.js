const promise = new Promise(function(resolve, reject) {
    if (Math.random() < 0.5) {
        return reject('Rejected');
    }

    setTimeout(() =>{
        resolve('Resolved!');
    }, 2000);
});

console.log(promise);


promise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log(promise);
    })
