def ex3(n)
	(n).map {|i| 
		(n).detect{|j| print "#{i} " if j*j == i
		}
	}	
end

ex3(1..100)