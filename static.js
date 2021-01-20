class Cars {
    #brand
    #type
    color = "black";

    constructor(engine){
        console.log("class Cars");
        this.#brand = "honda";
        this.#type = "minivan";
        this.engine = "engine";
    }

    getWhell(wheels){
        this.wheels = wheels
        return this.wheels
    }

    get brand(){
         return this.#brand
    }

    set brand(b){
        this.#brand = b
    }

    get detail(){
        return `detail : brand ${this.#brand}`
    }

    static getPrice(){
        const car = new Car
        car.getWhell
        return `price 1000000`
    }
}

// object car
// const budi = new Cars()
// console.log(budi.brand);
// budi.brand = "toyota";
// console.log(budi.brand);
// console.log(budi.detail);

// inHerintance

class Honda extends Cars {
    constructor (){
        super(); // pemanggilan class
        this.engine = "honda enginner";
        console.log("super.detail", super.detail);   
        console.log("super.brand", super.brand);    
    }
}

const ani = new Honda();
console.log(ani.engine);

const ani = new Honda()

// chaining method
"string".replace(" "," ").split()
