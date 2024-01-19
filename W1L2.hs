{-
int division `div` normal /
logical operators: && (highet precedence), ||,not
relational operators: ==, /=, <, >, <=, >=

Data Types:
Bool: True, False
Char String Fractional Int
1- A set of data values (like range of ints)
2- A set of operations on those values (like +,-,*,/)

1 is also a experssion, 
1, 1+2, if True then 1 else 2, 
every expression has a type -> strongly typed language like C++
but haskell doesnt require explicit type declaration ghc infers types
Type inference
type of an expression is the type of its evaluated value

>> x = 100
>> :t x 
x :: Num a => a
     ___ => context/constraints
              _ => Type
read as x has type a, a is a member of the class Num
Num is a class of types that support arithmetic operations

jahan specific type hai wahan exactly type miljayegi

dont take it too seriously its more detailed and complex

lists should have the same typed elements
prints char list as string
>> ['a','b','c']
"abc"

changing a data variable is wrong in haskell, but ghc allows it

A tuple can have different typed data
head function returns the first element of a list
>> head [1,2,3]
1

>> tail [1,2,3]
[2,3]

>> take 2 [1,2,3]
[1,2]

>> drop 2 [1,2,3]
[3]

Cons Operator (:) prepends an element to a list
>> 1:[2,3]
[1,2,3]

>> (1:[2,3])
[1,2,3]

>> [1,2] ++ [3,4]
[1,2,3,4]

Pattern matching
>> let (x:y) = [1,2,3,5,6]
>> x
1
>> y
[2,3,5,6]

fst snd
>> fst (1,2)
1

>> snd (1,2)
2

Functions:
in haskell functions are first class citizens
functions are values
functions can be passed as arguments to other functions
functions can be returned as results of other functions
functions can be stored in data structures

e.g
>> let f x = x + 1
>> f 1
2
>> :t f
f :: Num a => a -> a

>> let g x y = x + y
>> g 1 2
3
>> :t g
g :: Num a => a -> a -> a

function needs name, parameters (types inferred if not given), body, return type
add x y = x + y (type of x y automatically inferred)

Ord: types that support ordering
Num: types that support arithmetic operations
Eq: types that support equality testing
Char: < , > , == , /=


-} 
main :: IO()
main = putStrLn "Hello World"

-- PRACTICE CODES NOT IN LECTURE

-- Linear search
linearSearch :: Eq a => a -> [a] -> Bool
linearSearch _ [] = False
linearSearch x (y:ys) = if x == y then True else linearSearch x ys

-- bubble sort
bubbleSort :: Ord a => [a] -> [a]
bubbleSort [] = []
bubbleSort [x] = [x]
bubbleSort (x:y:xs) = if x > y then y:bubbleSort (x:xs) else x:bubbleSort (y:xs)

-- append number to list
appendNumber :: a -> [a] -> [a]
appendNumber x [] = [x]
appendNumber x (y:ys) = y:appendNumber x ys

-- or x y = y ++ [x]
-- printing function results
linearSearch 3 [1,2,3,4,5]
bubbleSort [1,2,3,4,5]
appendNumber 3 [1,2,3,4,5]