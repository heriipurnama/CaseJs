function validation(name) {
    try {
        if (typeof name === "string") {
            console.log('ok');
        } else {
            throw "tipe data harus string"
        }
    } catch (error) {
        console.log(error);
    }
}

validation("budi");
validation(true);