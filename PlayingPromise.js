`use strict`

// before
// for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//     }, 1000);
//   }
// console.log('Done');  
  
// after
const loopIng = () => {
    const promises = [];
      
    for (let i = 1; i <= 3; ++i) {
        console.log("Output " + i);
            setTimeout(() => {
        }, 1000);
    }
      
    Promise.all(promises)
           .then((results) => {
                console.log("-Done-", results);
            })
            .catch((err) => {
                throw err;
            });
}
  
loopIng();

// after
const loopIng2 = () => {
  
    for (let i = 1, p = Promise.resolve(); i <= 3; i++) {
        p = p.then(_ => new Promise(resolve =>
            setTimeout(function () {
                console.log(i);
                resolve();   
            },1000)
         ));
    }
 }
     
      
loopIng2();