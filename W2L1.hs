import Control.Concurrent.STM (check)
-- Guards Pattern
factGuards :: Int -> Int
factGuards x
    | x == 0 = 1
    | otherwise = x * factGuards (x-1)

sumRow :: [Int] -> Int
sumRow [] = 0
sumRow (x:xs) = x + sumRow xs

linearSearch :: [Int] -> Int -> Bool
linearSearch [] _ = False
linearSearch (x:xs) y = if x==y then True else linearSearch xs y

-- fact :: Int -> Int
fact :: (Eq t, Num t) => t -> t
fact 0 = 1
fact x = x * fact (x-1)



isZero :: [Int] -> Bool
isZero [] = True
isZero (x:xs) = x == 0 && isZero xs

checkRow :: [Int] -> Int -> Bool
checkRow [] _ = True
checkRow x y = (isZero (take y x)) && (isZero (drop (y+1) x)) && ((take 1 (drop y x))==[1])

isIdentityHelper :: [[Int]] -> Int -> Bool
isIdentityHelper [] _ = True
isIdentityHelper (x:xs) y = (checkRow (x) y) && (isIdentityHelper xs (y+1))

squarematrix :: [[Int]] -> Int -> Bool
squarematrix [] _= True
squarematrix  (x:xs) n = if n == length x then squarematrix xs n else False

isIdentity :: [[Int]] -> Bool
isIdentity (x:xs) = (squarematrix (x:xs) (length(x:xs))) && (isIdentityHelper (x:xs) 0 )

newFunc :: (t -> a) -> [t] -> [a]
newFunc _ [] = []
newFunc func (x:xs) = func x : newFunc func xs