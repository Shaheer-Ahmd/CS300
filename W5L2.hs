-- sequences 
data Tree a = Nil | TreeNode (Tree a) a (Tree a) deriving (Show, Eq, Ord)

s1 = Nil
s2 = TreeNode Nil 5 Nil

-- map a function over a sequence

instance Functor Tree where
    fmap f Nil = Nil
    fmap f (TreeNode left x right) = TreeNode (fmap f left) (f x) (fmap f right)


-- An applicative is a typeclass that has the following functions 
-- pure : wraps a value in a context :: a -> f a
-- <*> : applies a wrapped function on a wrapped value :: f (a -> b) -> f a -> f b
{-

-}

sf = TreeNode (TreeNode Nil (+5) Nil) (+10) (TreeNode Nil (+15) Nil)
s = TreeNode (TreeNode Nil 1 Nil) 2 (TreeNode Nil 3 Nil)

instance Applicative Tree where
    pure x = TreeNode Nil x Nil
    Nil <*> _ = Nil
    _ <*> Nil = Nil
    (TreeNode left f right) <*> (TreeNode left' x right') = 
        TreeNode (left <*> left') (f x) (right <*> right')


data LinkedList a = Null | ListNode a (LinkedList a) deriving (Show, Eq, Ord)
instance Functor LinkedList where
    fmap f Null = Null
    fmap f (ListNode x xs) = ListNode (f x) (fmap f xs)


instance Applicative LinkedList where
    pure x = ListNode x Null
    Null <*> _ = Null
    _ <*> Null = Null
    (ListNode f fs) <*> (ListNode x xs) = fmap f (ListNode x xs) `append` (fs <*> (ListNode x xs))


-- Monads are a typeclass that have the following functions
-- return : wraps a value in a context :: a -> m a
-- >>= : applies a function that returns a wrapped value on a wrapped value :: m a -> (a -> m b) -> m b
-- ListNode 10 (ListNode 12 Nil) >>= (\x -> ListNode (x+1) Nil) = ListNode 11 (ListNode 13 Nil)
instance Monad LinkedList where
    return :: a -> LinkedList a
    return x = ListNode x Null
    -- (>>=) :: LinkedList a -> (a -> a) -> LinkedList a
    (>>=) :: LinkedList a -> (a -> LinkedList b) -> LinkedList b
    Null >>= f = Null
    (ListNode x xs) >>= f = (f x) `append` (xs >>= f)

append :: LinkedList a -> LinkedList a -> LinkedList a
append Null ys = ys
append (ListNode x xs) ys = ListNode x (append xs ys)