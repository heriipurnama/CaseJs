`use strict`
class Chipper{
    const { Cipher } = require("js-cipher");

    const cipher = new Cipher();
    

}


 
    console.log('message', message);
    const message = cipher.encrypt("heripurnamamamaa", 3);
    const desc =  cipher.decrypt(message, 3);
    console.log('desc', desc);
