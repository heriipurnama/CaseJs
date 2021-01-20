`use strict`

const data = {
    info : "This is an information about something.",
    error : "We can't divide any numbers by zero.",
    notice : "Someone loves your status.",
    warning : "Insufficient funds.",
    debug : "This is debug message.",
    alert : "Achtung! Achtung!.",
    critical :"Medic!! We've got critical damages.",
    emergency : "System hung. Contact system administrator immediately!"
};

class Log {
    
    writeLog() {  
        
        for (let i = 0; i < Object.keys(data).length; i++) {
            
            let info  = `${Date()} ${data.info}`;
            let error = `${Date()} ${data.error}`;
            let notice  = `${Date()} ${data.notice}`;
            let warning = `${Date()} ${data.warning}`;

            let debug  = `${Date()} ${data.debug}`;
            let alert  = `${Date()} ${data.alert}`;
            let critical  = `${Date()} ${data.critical}`;
            let emergency = `${Date()} ${data.emergency}`;

            return [info, error, notice, warning, debug, alert, critical, emergency]  
        }
    }
}

let log = new Log();

const result = log.writeLog();
console.log( result);

// Make file .log without LIB

// var file = new File(['foo', 'bar'], 'foobar.txt');

// console.log('size=' + file.size);
// console.log('type=' + file.type);
// console.log('name=' + file.name);

// var testEndings = function(string, endings) {
//   var file = new File([string], { type: 'plain/text',
//                                   endings: endings });
//   var reader = new FileReader();
//   reader.onload = function(event){
//     console.log(endings + ' of ' + JSON.stringify(string) + 
//                 ' => ' + JSON.stringify(reader.result));
//   };
//   reader.readAsText(file);
// };

// testEndings('foo\nbar',   'native');
// testEndings('foo\r\nbar', 'native');
// testEndings('foo\nbar',   'transparent');
// testEndings('foo\r\nbar', 'transparent');