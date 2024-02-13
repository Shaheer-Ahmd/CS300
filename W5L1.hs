data Abstract = Child Int | Teenager Int | Adult Int

instance Show Abstract where
    show (Child x) = "Child " ++ show x
    show (Teenager x) = "Teenager " ++ show x
    show (Adult x) = "Adult " ++ show x

instance Eq Abstract where
    (Child x) == (Child y) = x == y
    (Teenager x) == (Teenager y) = x == y
    (Adult x) == (Adult y) = x == y
    _ == _ = False

instance Ord Abstract where
    (Child x) <= (Child y) = x <= y
    (Teenager x) <= (Teenager y) = x <= y
    (Adult x) <= (Adult y) = x <= y
    (Child x) <= (Teenager y) = True
    (Child x) <= (Adult y) = True
    (Teenager x) <= (Adult y) = True
    _ <= _ = False

instance Num Abstract where
    (Child x) + (Child y) = Child (x + y)
    (Teenager x) + (Teenager y) = Teenager (x + y)
    (Adult x) + (Adult y) = Adult (x + y)

{- 
Currying -> Make new functions from a multiparametered function 
Say we have f(x,y,z)
we can make a new function 
g(y,z) = f(2,y,z)
where f(2,y,z) will return another function that takes two arguments

-}
add x y = x + y
addx = add 5


data Tree a = Nil | Node (Tree a) a (Tree a) deriving (Show, Eq, Ord)

{-
Functors Type Class
Applies a function to a value inside a structure

List is a functor - means that list kelie ek instance create hui hai functor 
typeclass ki jis mein fmap ka function exists krta hai

Say we have to apply a function on the entire tree
create a functor typeclass's instance for the tree

functor applies a function on a wrapped value, within a context 
(could be wrapped inside a list, tree etc)


-}

instance Functor Tree where
    fmap f Nil = Nil
    fmap f (Node left x right) = Node (fmap f left) (f x) (fmap f right)


{-
Applicatives 
fmap (\x -> x + 1) [1,2,3]
is the same as <$> is fmap
(\x -> x + 1) <$> [1,2,3]

Applies a wrapped function on a wrapped value
<*>

wrapped function is a function that is wrapped inside a context
[(+3)] 

(+) <$> [1,2,3] (gives wrapped functions)
-> [(+1), (+2), (+3)] <*> [1,2,3] -> [2,3,4,3,4,5,4,5,6] 

-}

{-
Monads - List is a monad, applicative, functor not the functions being applied
Applies a function that returns a wrapped value on a wrapped value

>>= is the bind operator
[1,2,3] >>= (\x -> [x,x+1]) = [2,3,4]

can do chaining of functions
like 
[1,2,3] >>= (\x -> [x,x+1]) >>= (\x -> [x,x+1])

IO Monad
getLine >>= putStrLn
['a','b','c'] 

getLine >>= putStrLn >> putStrLn "post getLine" (>> means do this and then do that)

do makes the monads look more readable and like imperative code

do 
x <- getLine
putStrLn x
putStrLn "post getline"
-}

main = do 
    putStrLn "Enter a number"
    x <- getLine
    putStrLn x
    putStrLn "post getline"
    putStrLn "The square of the number is:"
    putStrLn (show (read x * read x))
    putStrLn "Input a list of numbers"
    y <- getListLine
    where 
        getListLine = do 
            x <- getLine
            if x == "end" then return []
            else do 
                xs <- getListLine
                return (read x:xs)

     