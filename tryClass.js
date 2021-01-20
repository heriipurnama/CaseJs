function validation(name) {
    try {
        if (typeof name == "string") {
             console.log(`hai ${name}`);
        } else {
            throw new TypeError("tipe data harus string");
        }
    } catch (error) {
        console.log(error);
        console.log(error.name);
        console.log(error.message);
        console.log({
            name : error.name,
            message : error.message
        });
    }
}

// validation("budi");
// console.log("======".repeat(10));
// validation(true);

const datas = {
    name: 'heri',
    age : 20,
    grett : ''
}
rest = { ...datas, grett:  datas.name };
console.log(rest);

const test = {
    name: 'heri',
    age : 20,
    grett : () => test.name
}

console.log('test', test);