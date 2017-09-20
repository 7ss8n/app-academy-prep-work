# I/O Exercises
#
# * Write a `guessing_game` method. The computer should choose a number between
#   1 and 100. Prompt the user to `guess a number`. Each time through a play loop,
#   get a guess from the user. Print the number guessed and whether it was `too
#   high` or `too low`. Track the number of guesses the player takes. When the
#   player guesses the number, print out what the number was and how many guesses
#   the player needed.

# * Write a program that prompts the user for a file name, reads that file,
#   shuffles the lines, and saves it to the file "{input_name}-shuffled.txt". You
#   could create a random number using the Random class, or you could use the
#   `shuffle` method in array.

def guessing_game
  correct_guess = rand(1..100)
  user_guess = -1
  guesses = 0

  while user_guess != correct_guess
    guesses += 1
    puts "Please guess a number from 1 to 100."
    user_guess = (gets.chomp).to_i
    if user_guess < correct_guess
      puts "Sorry, #{user_guess} is too low."
    else
      puts "Sorry, #{user_guess} is too high."
    end
  end

  puts "You guessed #{user_guess}. That's correct!"
  puts "It took you #{guesses} guesses"

end

def shuffle_file(filename)
  base = File.basename(filename, ".*")
  extension = File.extname(filename)
  File.open("#{base}-shuffled#{extension}", "w") do |f|
    File.readlines(filename).shuffle.each do |line|
      f.puts line.chomp
    end
  end
end

if __FILE__ = $PROGRAM_NAME
  if ARGV.length == 1
    shuffle_file(ARGV.shift)
  else
    puts "ENTER FILENAME TO SHUFFLE:"
    filename = gets.chomp
    shuffle_file(filename)
  end
end

#if __FILE__ == $PROGRAM_NAME
#   if ARGV.length == 1
#     shuffle_file(ARGV.shift)
#   else
#     puts "ENTER FILENAME TO SHUFFLE:"
#     filename = gets.chomp
#     shuffle_file(filename)
#   end
# end
