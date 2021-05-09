// let json = '{ "name": "Yoda", "age": 20 }';
let json = '{ "name": "Yoda" }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    } else if (!user.age){
        throw new SyntaxError("'age' is required")
    }
 
    errorCode;
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    // console.log(`JSON Error: ${error.message}`);
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}