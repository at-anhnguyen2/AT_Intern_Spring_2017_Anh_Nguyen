#CONTROL FLOW
**Control Flow**: Normaly, with the input data will have different outputs.

`if  else  end` is basic control flow types, there are also `unless   else   end`, it can also be interpreted `if not`.
**Syntax:**
```
	if conditional
		#do some thing
	else
		#do some thing when false
	end
```
`conditional` is branching condition
**Ex**
```
	if a < b
		puts "#{a}"
	else
		puts "#{b}"
	end
```
`if end` can be writen 1 codeline
```
	puts "1 codeline" if true
```
In addition `if` and `unless`, `case when` is also very effective with variable which have different values.
**Syntax:**
```
	case month
	when 2
		puts "28 days"
	when 4, 6, 9, 11
		puts "30 days"
	else
		puts "31 days"
	end
```
#LOOPS
**Loops** in Ruby are used to execute the same block of code a specified number of times.

**Ruby Loops** includes `for` `while` `until` `loop` `time`
##FOR
**Syntax:**
```
	for i in 0..100
		#code
	end
```
`i` is variable

`0..100` if range of variable

**Ex**
```
	for i in 0..100
		if i.odd
			puts "#{i}"
		end
	end
```

##WHILE
**Syntax:**
```
	while conditional
		#code
	end
```
`conditinal` is stop condition of while loop.

**Ex**
```
	i=0
	while i<100 
		puts "#{i}"
		i+=1
	end
```

Be also writen
```
	begin
		#code
	end while conditional
```
##UNTIL
**Syntax:**
```
	begin
	   #code
	end until conditional
```
Like While loop, conditional of Until loop is stop condition, but it inverted to comparable values

**Ex**
```
	i=0
	begin
		puts "#{i}"
		i+=1
	end until i>100
```

##TIME
**Syntax:**
```
	a.times do
		#code
	end
```
`a` is number of time execute loop.
**Ex**
```
	3.times do
		puts "Hello World!!"
	end
```
#BINDING.PRY
Method `pry` of object `binding` use to break down execute code. It help programmer can to check neccessery variables and functions.

#VARIABLE
| Type | Name Syntax | Use 				|
|------|:-----------:|:----------:|
|Global|$snake_case  |in this file |
|Instance|@snake_case|in this class|
|Local|snake_case|in this local|
|Constant|UPPERCASE|in this file|

#RANGE and ARRAY
##The similarity**
Both include some value and each value be numbered order start from 0.
##The Difference**
**Array**
- Can have diffrence value types in one araay.
- Can nest multiple arrays together to form a multi-dimensional array.
**Range**
- All value in range belong one type.
- Can not nest multiple arrays together.
- Can convert to array by the way `to_a`
- **Ex**
```
range = (1..10).to_a
```
