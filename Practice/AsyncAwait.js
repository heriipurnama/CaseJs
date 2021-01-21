
const hello1 = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve('hello1');
            } else {
                reject('hello1 failed')
            }
        }, 100)
    })
}

const hello2 = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve('hello2');
            } else {
                reject('hello2 failed')
            }
        }, 100)
    })
}

// promise then
hello1(true)
.then(satu => {
    hello2(true).then(dua => {
        console.log("==.==".repeat(5));
        console.log(satu);
        console.log(dua);
        console.log("==.==".repeat(5));
    })
})


// async await
const call = async () => {
    const satu = await hello1(true)
    // const dua = await hello2(true)
    console.log("==$==".repeat(5));
    console.log(satu);
   
    try {
        const dua = await hello2(true)
        console.log(dua);
    } catch (error) {
        console.log(error);
    }
  
}

call();

// promise all
Promise.all([hello1(true), hello2(true)])
    .then((result) => {
        console.log("==*==".repeat(5));
        console.log(result);
        const a = result[0];
        const b = result[1];
        console.log(a, b);
        console.log("==*==".repeat(5));
})
