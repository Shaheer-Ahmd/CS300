-- Bubble sort functional decomposition
isSorted :: [Int] -> Bool
isSorted [] = True
isSorted [x] = True
isSorted (x:y:xs) = (x <= y) && isSorted (y:xs)

-- Imitates the inner for loop in the bubble sort algorithm
bubble :: [Int] -> [Int]
bubble [] = []
bubble [x] = [x] -- Need to define two base cases when you are splitting on x:y:xs
bubble (x:y:xs) = if x <= y then x:bubble (y:xs) else y:bubble (x:xs)

bubbleSort :: [Int] -> [Int]
bubbleSort [] = []
bubbleSort [x] = [x]
bubbleSort x = if isSorted x then x else bubbleSort (bubble x)

-- Lists in Haskell
-- [1,2,3,4,5] :: [Int]
-- [1..5] :: [Int]
-- [1,3..10] :: [Int]
list = [("Ali", 1), ("Ahmed", 2), ("Omar", 3)]
-- list :: [(String, Int)]
alist = [x | x<-list, (head (fst x)) == 'A']
-- List Comprehension
list2 =  [x | x <- [1..10], x `mod` 2 == 0]
list3 = [x | x <- [1..10], x `mod` 2 == 0, x `mod` 3 == 0]
-- x <- List imitates the list comprehension for loop in python

