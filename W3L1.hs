-- Merge sort

mergeSorted :: Ord a => [a] -> [a] -> [a]
mergeSorted x [] = x
mergeSorted [] x = x
mergeSorted (x:xs) (y:ys) = 
    if x >= y
    then [y] ++ mergeSorted (x:xs) (ys)
    else [x] ++ mergeSorted (xs) (y:ys)

-- mergeSort :: Ord a => [a] -> [a]
mergeSort [] = []
mergeSort [x] = [x]
mergeSort x = mergeSorted 
            (mergeSort (take (length x `div` 2) x))
            (mergeSort (drop (length x `div` 2) x))

-- Lambda Functions | Passing functions as parameters
add1 x = x + 1
add1_lambda = \x -> x + 1

apply_f f x = f x 


-- Map (apply function on a list) | applies a function on each element of a list and returns a new list
-- sqr.sqr applies sqr double time
mapNew f [] = []
mapNew f (x:xs) = [f x] ++ mapNew f xs

mapNewAnother f [] = []
mapNewAnother f list = [f x | x <- list]

{-
Higher Order functions -> Functions that take functions as parameters or return functions as results
Pure functions (which dont alter/depend  on global state)
-}