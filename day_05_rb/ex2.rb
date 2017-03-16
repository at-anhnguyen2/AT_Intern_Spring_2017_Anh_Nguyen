def ex2(n)
	if n.to_i < 0
		puts "#{n} < 0"
	elsif n.to_i == 0
		puts "#{n}=0"
	else			
		print "=" + "#{ (0..n.to_i).inject{|sum,j|
			if j==1 
				print j
				sum+=j
			else
				print "+#{j}"
				sum+=j	
			end				
			}
		}"
	end
end

puts "input n="
n = gets.chomp
ex2(n)