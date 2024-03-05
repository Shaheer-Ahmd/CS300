// Typescript checks types on compile time -> significantly reduces runtime errors that are very
// common in javascript
// Tsc compiles the typescript code to javascript code
// Statically typed language
// C++, Java, Haskell, Rust, Go, Swift, Kotlin, TypeScript
// Dynamically typed language (Runtime pe type errors pata chalte)
// Python, Ruby, JavaScript, PHP, Perl, Lua, R, MATLAB, Shell, Groovy, Tcl
// Commonly used declarative functions in typescript
// map, filter, reduce, forEach, find, findIndex, some, every, includes, indexOf, lastIndexOf, sort, reverse
// Commonly used array methods
// push, pop, shift, unshift, splice, slice, concat, join, toString, isArray, fill, copyWithin
// Commonly used string methods
// charAt, charCodeAt, concat, includes, indexOf, lastIndexOf, match, replace, search, slice, split, substr, substring, toLowerCase, toUpperCase, trim, valueOf
// Type inference in Typescript - Mutable objects
// Functions are first class citizens in typescript
var fv = function (a, b) {
    return a + b;
};
// Lambda functions -> Arrow functions
var fmap = function (f, l) {
    for (var i = 0; i < l.length; i++) {
        l[i] = f(l[i]);
    }
};
var list = [1, 2, 3, 4, 5];
fmap(function (x) { return x * x; }, list);
console.log(list);
