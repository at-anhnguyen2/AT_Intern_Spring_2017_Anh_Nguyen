class Exercise1
  def validate(str)
    str_temp = str.scan /\w{6,}/
    if str_temp == []
      puts "Wrong, password lenght need to over 6"
      return
    end

    str_temp = str.scan /[A-Z]{1,}/
    if str_temp == []
      puts "Wrong, password need to contain upper letter"
      return
    end
    
    str_temp = str.scan /[a-z]{1,}/
    if str_temp == []
      puts "Wrong, password need to contain non-upper letter"
      return
    end
    str_temp = str.scan /[0-9]{1,}/
    if str_temp == []
      puts "Wrong, password need to contain number"
      return
    end
    puts "OK"    
  end
end

class Exercise2
  def time_validate(str)
    pattern = /^[0-9]{2}+\:[0-9]{2}+\:[0-9]{2}$/
    if !str.match pattern or str == ""
      puts "null"
    else
      str_temp = str.scan /[0-9]{2}/
      if str_temp[2].to_i>=60
        str_temp[1] = str_temp[1].to_i + 1  
        str_temp[2] = str_temp[2].to_i - 60
      end
      if str_temp[1].to_i>=60
        str_temp[0] = str_temp[0].to_i + 1 
        str_temp[1] = str_temp[1].to_i - 60
      end
      if str_temp[0].to_i>=24
        str_temp[0] = str_temp[0].to_i - 24*(str_temp[0].to_i/24)
      end
      for i in 0..str_temp.length
        str_temp[i] = "0#{str_temp[i]}" if str_temp[i].to_i < 10 and str_temp[i].to_s.length < 2
      end
      puts "#{str_temp[0]}:#{str_temp[1]}:#{str_temp[2]}"
    end    
  end
end

class Exercise3
  def match_sort(a1,a2)
    r = Array.new(a1.length)
    n = 0;
    a1.map { |i|  
      a2.map { |j|
        k = j.match i  
        if k.to_s == i.to_s
          r[n] = i
          n+=1
        end 
      }
    }
    #lexicographical(r)
    puts r.sort!
  end
end

class Exercise4
  #cho em nợ những câu với mysql, lap em ko chạy đc ubuntu ạ
end
ex1 = Exercise1.new
ex1.validate("ab1Asa")

ex2 = Exercise2.new
ex2.time_validate("24:72:02")

ex3 = Exercise3.new
ex3.match_sort(["cd", "ab", "ef"], ["abc", "cde", "efg", "xyz"])

