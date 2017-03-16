# ARRAYS

Arrays are ordered, integer-indexed collections of any object.

While `numbers`, `strings`, `true`, `false` and `nil` all represent simple, primitive things, Arrays are more interesting, and very useful.

An Array is created by separating values by commas `,` and enclosing this list with square brackets.

**Syntax:**
```rb
	a = [1, 2, 3]
```
Arrays are like bags that contain all kinds of objects.

**Ex:**
```rb
	a = ["A string", 1, true, :symbol, 2]
```
This array contains 5 elements with kings: `string`, `number`, `boolean`, `symbol`. 

## Retrieving an element from an Array
Array's Elements are arranged in a certain order, each elements have one array indexing. Array indexing starts at 0 corresponding the first element and the last element have index is `lenght - 1`, with `lenght` is lenght of array.

**Retrieving an elements** based their index.

**Ex:**
```rb
	a = ["Hello", "World", "!!!!"]
	puts a[1] #=> World
```
A negative index is assumed relative to the end of the array. That is, an index of -1 indicates the last element of the array, -2 is the next to last element in the array, and so on.

**Ex:**
```rb
	a = ["Hello", "World", "!!!!"]
	puts a[-1] #=> !!!!
```

## Appending an element to an Array
In order to add an element to the end of an existing Array you can use the operator `<<`.

**Ex:**
```rb
	a = ["Hello", "World"]
	a << "!!!!"
	# => ["Hello", "World", "!!!!"]
```
## Setting an element to a position
You can also set an element to a specific index.

**Ex:**
```rb
	a = ["Hello", "World", "!!!!"]
	a[-1] = "????"
	# => ["Hello", "World", "????"]
```

## Missing elements
Retrieve an element that does not exist, we get back `nil`, meaning “nothing”.
```rb
	a=[1, 2, 3]
	a[3] # => nil
	a[4] # => nil
```
## Things you can do with Arrays
**Add Array**
```rb
	a=[1, 2]
	b=[3, 4]
	puts a+b #=> [1, 2, 3, 4]
```
**Subtract them from each other**
```rb
	a=[1, 2, 3, 4]
	b=[3, 4]
	puts a-b #=> [1, 2]
```
**Multiply with a number**
```rb
	a=[1, 2]
	puts a*3 #=> [1, 2, 1, 2, 1, 2]
```
** `first` and `last` ** are alternative ways to retrieve the first and last element.
```rb
	a=[1, 2, 3, 4]
	puts a.first #=> 1
	puts a.last #=> 4
```
**And other thing**
```rb
	a=[3, 2, 1, 4]
	puts a.length #=> 4
	puts a.sort #=> [1, 2, 3, 4]
	puts a.index(3) #=> 0
	puts a.rotate(2) #=>[1, 4, 3, 2]

	b=[1, nil, 2, 3, nil]
	puts b.compact #=> [1, 2, 3]

```

## Some method of Array
- `collect` and `map` use to retrieve the elements in the array

	**Sybtax:**
	```rb
			array.collect{|item| block }
		or 	array.map{|item| block }
	```
- `select` use to retrieve the elements that satisfy the condition.

	**Sybtax:**
	```rb
			array.select{|item| condition }
	```
- `detect` use to retrieve the first element that satisfy the condition.

	**Sybtax:**
	```rb
			array.delect{|item| condition }
	```