-- Defining new data types
data Shape = Circle Float | Rect Float Int deriving(Show)
{-kw typename constr  para   constr  para para2 -}

data Seq p = Nil | Node p (Seq p) deriving(Show)

area (Circle x :: Shape) = x

insertSeqAscending n Nil = Node n Nil
insertSeqAscending n (Node x next) = 
    if n < x 
    then Node n (Node x next)
    else Node x (insertSeqAscending n next)

data Tree p = Null | TreeNode (Tree p) p (Tree p) deriving (Show)

-- In order traversal
inOrder Null = []
inOrder (TreeNode left n right) = (inOrder left)  ++ [n] ++ (inOrder right)

-- Binary search tree in which on left we have smaller values than right
insertTree n Null = TreeNode Null n Null
insertTree n (TreeNode left v right) = 
    if v<=n
    then (TreeNode insertTree(n left) insertTree right)
    else TreeNode left v insertTree()  