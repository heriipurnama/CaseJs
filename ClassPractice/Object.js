class People {
    constructor(name){
        this.name = name
        this.greet = name

    }
}

const people = new People("heriipurnama");
console.log(people);

// 

const datas = {
    name: 'heri',
    age: 20,
    message: () => this.name
}

class Man {
    constructor(name, age){
        this.name = name
        this.greet = age
    }

    greet(){
        return this.name
    }
}

const man = new Man("heriipurnama",90);
console.log(man.greet());