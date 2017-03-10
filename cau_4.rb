def centuryFromYear(year)
	@year = year;
	if @year%100==0 then
		puts "This year in #{year/100}th century."
	else
		puts "This year in #{year/100+1}th century."
	end
end
puts "Input year: "
year = gets.chomp
centuryFromYear(year)