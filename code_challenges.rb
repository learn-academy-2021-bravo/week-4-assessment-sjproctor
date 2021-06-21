# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Creating a method - beverages
# Parameters - array, letter
# Select method
# include with the specific letter

def beverages(array, letter)
  array.select{|value| value.include?(letter)}
end
p beverages beverages_array, letter_o
p beverages beverages_array, letter_t

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Create a methods called remove_vowels
# Parameter - string
# Use delete method with argument of all lowercase and uppercase vowels

def remove_vowels string
  string.delete 'aeiouAEIOU'
end
p remove_vowels album1
p remove_vowels album2
p remove_vowels album3

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def get_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
  def pedal_faster mph
    @current_speed = @current_speed + mph
  end
  def brake mph
    @current_speed = @current_speed - mph
    if @current_speed < 0
      @current_speed = 0
    end
    # if @current_speed > mph
    #   @current_speed -= mph
    # else
    #   @current_speed = 0
    # end
  end
end

trek = Bike.new 'Trek'
p trek.get_info
trek.pedal_faster 10
trek.pedal_faster 5
trek.pedal_faster 7
p trek.get_info
trek.brake 10
trek.brake 10
trek.brake 10
p trek.get_info



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
