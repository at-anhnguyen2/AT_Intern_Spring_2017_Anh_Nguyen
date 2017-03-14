#Tam thoi em chua connect duoc voi database, co gi em fix sau a.
require "pry"
require "mysql2"
class Exercise1To4
	@answer="y"
	@client = Mysql2::Client.new(:host => "localhost", :username => "root", :password "3041992")
	@name=""
	def input_data
		puts "input football team name:"
		@name = gets.chomp
	end

	def continuous_input
		puts "do you want to input other football team? (y/n)"
		@answer = gets.chomp
	end

	def insert_to_database(football_name)
		client.query("INSERT INTO `football_names`(`id`, `name`) VALUE (NULL, '#{football_name}')")
	end

	def insert_while_loop
		i=0
		while @answer=="y" and i<=18
			input_data
			insert_to_database(@name)
			i+=1
			continuous_input
		end
		@answer="y"
	end

	def insert_until_loop
		i=0
		until @answer=="n" or i>18
			input_data
			insert_to_database(@name)
			i+=1
			continuous_input
		end
		@answer="y"
	end

	def insert_for_loop
		for i in 1..18
			input_data
			insert_to_database(@name)
			continuous_input
			break if answer=="n"
		end
		@answer="y"
	end
end

class Exercise5
	def fibonacci(n)
		case n
		when 1, 2
			puts "1"
		else
			fibo=1
			nacci=1
			for i in 3..n
				fbnc=fibo+nacci
				fibo=nacci
				nacci=fbnc
			end
			puts "#{fbnc}"
		end
	end
end

class Exercise6
	def prime_number(n)
		if i==1
			puts "True"
		else
			nn=n/2
			for i in 2..nn
				puts "False" if n%nn==0
				return
			end
			puts "True"
		end
	end
end

class Exercise7
	def perfect_number(n)
		if i==1
			puts "False"
		else
			nn=n/2
			for i in 2..nn
				puts "True" if n%nn!=0
				return
			end
			puts "False"
		end
	end
end
#main
insert_until_loop
fibonacci(4)
prime_number(7)
perfect_number(6)