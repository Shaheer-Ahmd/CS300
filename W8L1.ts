// Reading a file asynchronously
// Using the fs module to read a file asynchronously
// The fs module is a built-in module that provides file I/O functionality
// The fs module provides a method called readFile() that reads the contents of a file asynchronously
// The readFile() method takes three arguments: the file name, the encoding, and a callback function
// The callback function is called when the file is read
// The callback function takes two arguments: an error object and the file data
// The error object is null if the file is read successfully
// The file data is a buffer object if the file is read successfully
// The encoding argument is optional

import { log } from "console";
import { randomInt, randomUUID } from "crypto";
import { promisify } from "util";

const fs = require('fs');
fs.readFile('W8L1.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

// A function that promisify fs.readFile
const promisedReadFile = (filename: string) => {

    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })

}

// Using the promisified function
promisedReadFile('W8L1.txt')
    .then((data) => {
        console.log("promisified: ", data);
    })
    .catch((err) => {
        console.log("promisified: ", err);
    });

const promisifiedReadFile = promisify(fs.readFile);
// same thing as above but built in function

promisifiedReadFile('W8L1.txt', 'utf8')
    .then((data) => {
        console.log("promisified builtin: ", data);
    })
    .catch((err) => {
        console.log("promisified builtin: ", err);
    });

const promisifiedWriteFile = promisify(fs.writeFile);

promisifiedWriteFile(`W8L1_${randomInt(100)}.txt`, randomUUID())
    .then(() => {
        console.log("promisified write file success");
    })
    .catch((err) => {
        console.log("promisified write file error: ", err);
    });

log("Function stack empty shoooshoo - outside main")

// Promisification is the process of converting a function that uses callbacks into a function that returns a promise

let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 3000);
});

p5.then((val) => {
    console.log(val);
    return "data from then 1";
    // This is the same as 
    // return new Promise((resolve, reject) => {
    //     resolve("data from then 1");
    // });
    // OR
    // return Promise.resolve("data from then 1");

}) // This returns a promise

.then((data) => {
    console.log("Inside then 2");
    console.log(data);
});

// async await

// async makes a function return a promise | just like then

async function f() {
    log("inside f")
    let fileContent = await promisifiedReadFile('W8L1.txt', 'utf8');
    // await means wait for the promise to resolve, but only inside an async function
    // the rest of the code will continue to execute
    log("before returning promisedReadFile")
    return fileContent;
}

let p6 = f();
console.log(p6);
log("End of file")


