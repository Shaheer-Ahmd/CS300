"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// normal typescript classes
var Food = /** @class */ (function () {
    function Food(likes, dislikes) {
        // deep copy
        this.likes = __spreadArray([], likes, true);
        this.dislikes = __spreadArray([], dislikes, true);
    }
    return Food;
}());
var Animal = /** @class */ (function () {
    function Animal(name, species, foods, id) {
        this.name = name;
        this.species = species;
        this.foods = foods;
        this.id = id;
    }
    return Animal;
}());
var AllAnimals = /** @class */ (function () {
    function AllAnimals(animals) {
        this.animals = animals;
    }
    return AllAnimals;
}());
var ANIMALS = 'http://localhost:3000/animals';
// function downloadUsingPromises(url: string) {
//     axios.get(url) // returns a promise
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error("error");
//         });
// }
// downloadUsingPromises(ANIMALS);
// console.log('After downloadUsingPromises');
function downloadUsingAsyncAwait(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, allAnimals, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 1:
                    response = _a.sent();
                    // response is being passed to the callback
                    // made of all the code after the await
                    console.log("Using interface to print");
                    console.log(response.data);
                    // class wala tareeka
                    console.log("Using class to print");
                    allAnimals = new AllAnimals(JSON.parse(JSON.stringify(response.data)));
                    allAnimals.animals.forEach(function (element) {
                        console.log(element.name, element.species, element.foods.likes, element.foods.dislikes, element.id);
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("error");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
downloadUsingAsyncAwait(ANIMALS).then(function () {
    console.log('In the callback of downloadUsingAsyncAwait');
});
console.log('After downloadUsingAsyncAwait');
function manyPromises(urls) {
    return __awaiter(this, void 0, void 0, function () {
        var p, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Promise.all(urls.map(function (url) { return axios_1.default.get(url); }))];
                case 1:
                    p = _a.sent();
                    p.forEach(function (response) {
                        console.log(response.statusText);
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error("error");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
manyPromises([
    "http://localhost:3000/animals",
    "http://google.com",
]);
