#Ruby
## Rules set names
- **Variables and Functions** are set following **snake_case** type.
- **Classes and Modules** are set following **CamelCase** type
- **Const** are writen **UPPERCASE**
**Ex**
```sh
class DailyReport
	def write_report
		#write something
	end
end
```

##" " and ' '
**" "** said area of messages. In the Messages, it may be contain variables and show value of this variable.
**' '** said area of messages. In the Messages, it may be contain variables but it don't show value of this variable, it only show the name of the variable.
**Ex**
```sh
	puts "My name is #{my-name}"
	#with my_name = "Anh"
```
Output: My name is Anh
```sh
	puts 'My name is #{my-name}''
	#with my_name = "Anh"
```
Output: My name is #{my-name}

##Block_Code
**Block code** is represented in *{ }* or *do |function| end*
**Ex**
```sh
	puts "My name is #{my-name}"

	do
	|function|
	end
```
