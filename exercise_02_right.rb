#$LOAD_PATH << '.'
require 'pry'
#require "active_support/inflector"
class Report
  def initialize(path)
    @path = path
  end

  def read_file
    @report_file = File.new("#{Time.now.to_i}.txt", "w+")
    f = File.open(@path)
    f.each do |line|
      @report_file.write(line + "\n")
    end
  end

  def input_report
    read_file
    line = 1
    while true do
      write_report_to_file(line)
      line += 1
      select = gets.chomp
      case select
      when 'n'
        puts "Please check your input file in this path: #{@path}"
        return
      else
      end
    end
  end

  def write_report_to_file(line)#, file_name)
    title = "\nPlease input your line #{line}: "
    puts title
    report_string = gets.chomp
    @report_file.write(title + "\n")
    @report_file.write(report_string)
    puts "Do you want to input #{line+1}?"
  end
end
puts "Input your info file path: "
path = gets.chomp
Report.new(path).input_report
