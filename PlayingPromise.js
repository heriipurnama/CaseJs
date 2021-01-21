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