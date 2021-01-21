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

const hello2 = () => {
    return "hello2"
}

hello1(false)
.then(res => console.log(res))
.catch(res => console.log(res));

hello2()