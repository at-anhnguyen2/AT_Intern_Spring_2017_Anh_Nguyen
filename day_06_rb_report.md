# RUBY
## String
**String** is a string of characters wrapped in single quotes `' '` or double quotes `" "`.

```rb
  puts 'Ruby'
  puts "Front End"
```

Want to print out the characters quotes there are 2 ways.

```rb
  puts "\"Ruby\""
  puts '"Front End"'
  # Output
  # "Ruby"
  # "Front End"
```
The first way, put `\` before `"` and the second way wrapping the string with single quotes and inside giving double quotes.

## Some methods of Ruby-String
In ruby everything is an object so **String** is also an object. So **String** also has some methods.

### string.gsub
`string.gsub` use to replace the sequence of characters to a new sequence of characters.

**Syntax**
```rb
  string.gsub{ pattern, replacement}
  # or
  string.gsub(pattern){|match| block}
```
- `pattern` is a **regular expression**, a pattern always limited by the `/`.
- `replacement` is a new sequence of characters.
- `block` is a block of command.

**Ex**
```rb
  puts "abc123".gsub {"1","d"} # => abcd23
```

### string.include
`string.include` use to check `string` contains some value or not.
**Ex**
```rb
  puts "Ruby".include?("R") # => true
  # or
  puts "Ruby".include? "R"
```

### Some other methods
```rb
  # Count the number of characters in a string
  "Ruby".length # => 4
  "Ruby".size # => 4

  # Upcase and Downcase
  string = 'Ruby'
  puts string.downcase # => ruby
  puts string.upcase # => RUBY
  puts string # => Ruby
```
## PROC & LAMBDA
### PROC
**proc** is an object to defines for blocks

- Using method `.call` to call proc
- **proc** is an object but block is not an object.

**Ex**
```rb
  mul_of_3 = Proc.new do |n|
  n % 3 == 0
  end
  puts (1..10).to_a.select(&mul_of_3)
  # => 3  6  9
```

### LAMBDA
**Lambda** is a function that return an object of PROC. It belongs to PROC class but declared by function type.

**Ex**
```rb
  lam = lambda{|x| 
  puts x*2
  }
  puts [1,2,3].each(&lam)
  # => 2  4  6
```

### The difference between Proc and Lambda
- **Lambda** executed will check inout arduments, but **Proc** does not.
- `return` inside **Lambda** has no effect, still run the end of the block in **Lambda**. In contrast, **Proc** can not ues `return`, so if wanting use `return` then **Proc** must be placed in a function.

**Ex**
```rb
  lam = lambda{|x| 
    return x+1
    puts x*2
  }

  proc1 = Proc.new do |x| 
    return x+1 # => Error
    puts x*2
  end
  puts [1,2,3].each(&lam) # => 4  6  8
```
