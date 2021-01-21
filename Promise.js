const fs = require('fs')
const { resolve } = require('path')

// callback
// fs.readdir('/', (err, result) => {
//   if (err) {
//     throw new Error(err.message)
//   }
//   console.log(result)
// })

// promise
const readDir =  (path) => {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, result){
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};

readDir('/')
.then(res => console.log(res))
.catch(res => console.log(res));
