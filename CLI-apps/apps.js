#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)

// Caporal provides you with a program instance
const { program } = require("@caporal/core");
const os = require('os');
const publicIp = require('public-ip');
const ineed = require('ineed');


// Simplest program ever: this program does only one thing
program
    .version("1.0.0")
    .command("lowercase")
        .argument("<text>", "Add your text", {
            default: "text",
            validator: program.STRING
        })
        .action(({ args }) => {
            const text = args.text
            const result = text.toLowerCase();
            console.log("result:", result);
        })

    .command("uppercase")
        .argument("<text>", "Add your text", {
            default: "text",
            validator: program.STRING
        })
        .action(({ args }) => {
            const text = args.text
            const result = text.toUpperCase();
            console.log("result:", result);
        })

    .command("capitalize")
        .argument("<text>", "input text")
        .action(({ args }) => {
            const textArray = args.text.split(" ");
            const capitalize = textArray.map((element) => {
                let resCapitalize =
                    element.charAt(0).toUpperCase() + element.slice(1);
                return resCapitalize;
            });
            const result = capitalize.join(" ");

            console.log("result:", result);
        })

    .command("add")
        .argument("<num1>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .argument("<num2>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .argument("<num3>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .argument("<num4>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .argument("<num5>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .action(({ logger, args }) => {
            const num1 = args.num1
            const num2 = args.num2
            const num3 = args.num3
            const num4 = args.num4

            const num5 = args.num5

            const result = (num1 + num2 + num3 + num4 + num5);

        logger.info(result);
        })

    .command("subtract")
        .argument("<num1>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .argument("<num2>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .argument("<num3>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .argument("<num4>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .argument("<num5>", "Add your number", {
            default: 0,
            validator: program.NUMBER
        })
        .action(({ logger, args }) => {
            const num1 = args.num1
            const num2 = args.num2
            const num3 = args.num3
            const num4 = args.num4

            const num5 = args.num5

            const result = (num1 - num2 - num3 - num4 - num5);

            logger.info(result);
        })

    .command("multiply")
        .argument("<num1>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .argument("<num2>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .argument("<num3>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .argument("<num4>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .argument("<num5>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .action(({ logger, args }) => {
            const num1 = args.num1
            const num2 = args.num2
            const num3 = args.num3
            const num4 = args.num4

            const num5 = args.num5

            const result = (num1 * num2 * num3 * num4 * num5);

            logger.info(result);
        })

    .command("divide")
        .argument("<num1>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .argument("<num2>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .argument("<num3>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .argument("<num4>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .argument("<num5>", "Add your number", {
            default: 1,
            validator: program.NUMBER
        })
        .action(({ logger, args }) => {
            const num1 = args.num1
            const num2 = args.num2
            const num3 = args.num3
            const num4 = args.num4

            const num5 = args.num5

            const result = (num1 / num2 / num3 / num4 / num5);

            logger.info(result);
        })

    .command("palindrome")
        .argument("<text>", "Add your string", {
            default: "rusak",
            validator: program.STRING
        })

        .action(({ args }) => {
            const text = args.text

            function palindrome(text) {
                let len = text.length;
                let mid = Math.floor(len/2);
            
                for ( var i = 0; i < mid; i++ ) {
                    if (text[i] !== text[len - 1 - i]) {
                        return false;
                    }
                }
            
             return true;
            }
            const result = palindrome(text);

            console.log("String:", text);
            console.log("Is palindrome?", result);
        })

    .command("ip")
        .action(({ logger }) => {
            const interfaces = os.networkInterfaces();
            
            const addresses = [];
                for (var k in interfaces) {
                    for (var k2 in interfaces[k]) {
                        var address = interfaces[k][k2];
                        if (address.family === 'IPv4' && !address.internal) {
                            addresses.push(address.address);
                        }
                    }
                }
         
            logger.info(addresses);
        })
    
    .command("ip-external")
        .action(({ logger }) => {
        
            (async () => {
                try {
                    const rest = await publicIp.v4();    
                    logger.info(rest);
                } catch (error) {
                    console.log(error);
                }
                
            })();
        })

    .command("headlines")
        .action(() => { 
            ineed.collect.images.hyperlinks.from('https://www.kompas.com/tag/headline',  
            function (err, response, result) {
                let restHeadLine = result.hyperlinks;
                // rename property
                restRenameHref = JSON.parse(
                                 JSON.stringify(restHeadLine).split('"href":').join('"URL":')
                              );
      
                restRenameText = JSON.parse(
                                 JSON.stringify(restRenameHref).split('"text":').join('"Title":'),
                              );
      
            let resultRenameProperty = restRenameText;
         
                console.log(resultRenameProperty);
            });
        })
    
    .command("obfuscate")
        .argument("<text>")
        .action(({ logger, args }) => {
          logger.info(
            args.text
              .split("")
              .map((char) => `&#${char.charCodeAt(0)};`)
              .join("")
          );
        })
        
    .command("random")
        .option("--panjang <number>", "", {
          default: 32,
          validator: program.NUMBER,
        })
        .option("--letters <boolean>", "", {
          default: true,
        })
        .option("--numbers <boolean>", "", {
          default: true,
        })
        .option("--uppercase <boolean>", "", {
          default: false,
        })
        .option("--lowercase <boolean>", "", {
          default: false,
        })
        .action(({ logger, options }) => {
          let char = "abcdefghijklmnopqestuvwxyz1234567890";
          if (!options.letters) char = char.replace(/[A-Za-z]/g, "");
          if (!options.numbers) char = char.replace(/[0-9]/g, "");
          char = char.split("");
          let output = "";
          while (output.length < options.panjang) {
            let sizeRandom = options.uppercase ? "toUpperCase"
              : options.lowercase ? "toLowerCase"
                : Math.floor(Math.random() * 2) === 1 ? "toUpperCase"
              : "toLowerCase";
            output += char[Math.floor(Math.random() * char.length)][sizeRandom]();
          }
          logger.info(output);
        })

// always run the program at the end
program.run()

/*
# Now, in your terminal:

$ ./hello-world.js
Hello, world!


*/
