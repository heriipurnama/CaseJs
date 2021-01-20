class Car {
    constructor(){
        console.log("class Car");
        this.brand = "suzuki"
    }

    


}

// object car
const budi = new Car()
console.log(budi.brand);
budi.brand = 'toyota';
console.log(budi.brand);

// _brand -> private 
// #brand -> private jika tmabahkan tnda baca jadi private

