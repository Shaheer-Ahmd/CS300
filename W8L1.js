"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var crypto_1 = require("crypto");
var util_1 = require("util");
var fs = require('fs');
fs.readFile('W8L1.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
// A function that promisify fs.readFile
var promisedReadFile = function (filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
// Using the promisified function
promisedReadFile('W8L1.txt')
    .then(function (data) {
    console.log("promisified: ", data);
})
    .catch(function (err) {
    console.log("promisified: ", err);
});
var promisifiedReadFile = (0, util_1.promisify)(fs.readFile);
// same thing as above but built in function
promisifiedReadFile('W8L1.txt', 'utf8')
    .then(function (data) {
    console.log("promisified builtin: ", data);
})
    .catch(function (err) {
    console.log("promisified builtin: ", err);
});
var promisifiedWriteFile = (0, util_1.promisify)(fs.writeFile);
promisifiedWriteFile("W8L1_".concat((0, crypto_1.randomInt)(100), ".txt"), (0, crypto_1.randomUUID)())
    .then(function () {
    console.log("promisified write file success");
})
    .catch(function (err) {
    console.log("promisified write file error: ", err);
});
(0, console_1.log)("Function stack empty shoooshoo - outside main");
// Promisification is the process of converting a function that uses callbacks into a function that returns a promise
var p5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Success");
    }, 3000);
});
p5.then(function (val) {
    console.log(val);
    return "data from then 1";
    // This is the same as 
    // return new Promise((resolve, reject) => {
    //     resolve("data from then 1");
    // });
    // OR
    // return Promise.resolve("data from then 1");
}) // This returns a promise
    .then(function (data) {
    console.log("Inside then 2");
    console.log(data);
});
// async await
// async makes a function return a promise | just like then
function f() {
    return __awaiter(this, void 0, void 0, function () {
        var fileContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, console_1.log)("inside f");
                    return [4 /*yield*/, promisifiedReadFile('W8L1.txt', 'utf8')];
                case 1:
                    fileContent = _a.sent();
                    // await means wait for the promise to resolve
                    (0, console_1.log)("before returning promisedReadFile");
                    return [2 /*return*/, fileContent];
            }
        });
    });
}
var p6 = f();
console.log(p6);
(0, console_1.log)("End of file");
