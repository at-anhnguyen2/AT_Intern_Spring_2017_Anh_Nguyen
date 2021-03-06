class Info
  attr_accessor :name, :mentor, :team, :github

  def input_info
    input_attribute
  end

  def input_attribute
    puts "Input your name: "
    @name = gets.chomp
    puts "Input your mentor"
    @menter = gets.chomp
    puts "Input your team"
    @team = gets.chomp
    puts "Input your link github"
    @github = gets.chomp
  end

  def create_info_file
    f = File.new("#{name}.txt", "w+")
    self.instance_variables.each_with_index do |attribute, index|
      f.write(set_file_template[index] + (self.instance_variable_get attribute))
    end
  end

  def set_file_template
    ["My name is ", "\nMy team is ", "\nMy mentor is ", "\nMy link github is "]
  end
end

info = Info.new{name}
info.input_info
info.create_info_file