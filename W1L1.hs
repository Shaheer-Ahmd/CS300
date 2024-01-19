-- Paradigms of programming (Imperative vs Declerative)
-- Procedures could have a dependency on global data and they can read/write external data (Imperative -> procedural)
-- 
-- Functions, however do not. They are pure and have no *side effect (effect on environment)*  (Declarative -> Functional programming)
isOdd x = x `rem` 2 /= 0 -- Declarative functional programming
-- How is isOdd declarative? bilkul basic level pe it is similar to imperative
oddElemList list = [x | x <- list, isOdd x]
-- How is oddElemList declarative? Even though we have stated what to do, we havent explicity stated how to do it (like actually iterating over the list) 
filterList filter list = [x | x <- list, filter x]
filterList isOdd [1,2,3,4,5,6,7,8,9,10] -- same as oddElemList [1,2,3,4,5,6,7,8,9,10]
-- Immutability in functional programming - e.g you cant edit an element of an array , instead you create a new array with the new element -> increased time and space complexity
-- Javascript is a multiparadigm language
-- C++ mein classes are first class citizens, in C they are not
-- Logic programming we have a set of rules and facts based on which we answer some questions