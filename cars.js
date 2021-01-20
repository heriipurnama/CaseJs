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
}

// object car
const budi = new Cars()
console.log(budi.brand);
budi.brand = "toyota";
console.log(budi.brand);
console.log(budi.detail);
