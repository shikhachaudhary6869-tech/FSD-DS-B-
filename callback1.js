// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Shikha", sayBye);
function greet(name,callback){
    console.log("hello"+name);
    callback();
}
function sayBye(){
    console.log("Goodbye!");
}
greet("shikha", sayBye);
