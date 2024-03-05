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
import { promisify } from "util";

const fs = require('fs');
const foo = async () => { 
    await fs.readFile('W8L1.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

}
foo()
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