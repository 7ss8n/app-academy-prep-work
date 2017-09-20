require 'byebug'

# EASY

# Define a method that returns the sum of all the elements in its argument (an
# array of numbers).
def array_sum(arr)
  return 0 if arr.empty?
  arr.reduce(:+)
end

# Define a method that returns a boolean indicating whether substring is a
# substring of each string in the long_strings array.
# Hint: you may want a sub_tring? helper method
def in_all_strings?(long_strings, substring)
  long_strings.all? { |string| string.include?(substring) }
end

# Define a method that accepts a string of lower case words (no punctuation) and
# returns an array of letters that occur more than once, sorted alphabetically.
def non_unique_letters(string)
  letters = string.gsub(/[^a-zA-Z]/, "").chars
  letters.select { |char| letters.count(char) > 1 }.uniq.sort
end

# Define a method that returns an array of the longest two words (in order) in
# the method's argument. Ignore punctuation!
def longest_two_words(string)
  string.split(" ").sort_by { |word| word.size }[-2..-1]
end

# p longest_two_words("This is a test sentence.")

# MEDIUM

# Define a method that takes a string of lower-case letters and returns an array
# of all the letters that do not occur in the method's argument.
def missing_letters(string)
  [*"a".."z"].select { |char| string.count(char) == 0 }
end

# Define a method that accepts two years and returns an array of the years
# within that range (inclusive) that have no repeated digits. Hint: helper
# method?
def no_repeat_years(first_yr, last_yr)
  [*first_yr..last_yr].select { |year| not_repeat_year?(year) }
end

def not_repeat_year?(year)
  year.to_s.chars.uniq.length == 4
end

# HARD

# Define a method that, given an array of songs at the top of the charts,
# returns the songs that only stayed on the chart for a week at a time. Each
# element corresponds to a song at the top of the charts for one particular
# week. Songs CAN reappear on the chart, but if they don't appear in consecutive
# weeks, they're "one-week wonders." Suggested strategy: find the songs that
# appear multiple times in a row and remove them. You may wish to write a helper
# method no_repeats?
def one_week_wonders(songs)
  songs.select { |song| no_repeats?(songs, song) }.uniq
end

def no_repeats?(songs, song)
  songs.each_index do |i|
    return false if songs[i] == song && songs[i + 1] == song
  end
  true
end



# Define a method that, given a string of words, returns the word that has the
# letter "c" closest to the end of it. If there's a tie, return the earlier
# word. Ignore punctuation. If there's no "c", return an empty string. You may
# wish to write the helper methods c_pos and remove_punct.

def for_cs_sake(string)
  positions = remove_punct(string).split(" ").map do |word|
    [word, c_pos(word)]
  end
  positions.reject! { |entry| entry[1].nil? }
  return "" if positions.empty?
  nearest_to_end = positions.map { |entry| entry[1] }.min
  nearest_to_end_words = positions.select do |entry|
    entry[1] == nearest_to_end
  end
  nearest_to_end_words[0][0]
end

def c_pos(word)
  word.downcase.chars.reverse.index("c")
end

def remove_punct(string)
  string.gsub(/[[:punct:]]/, "")
end

# Define a method that, given an array of numbers, returns a nested array of
# two-element arrays that each contain the start and end indices of whenever a
# number appears multiple times in a row. repeated_number_ranges([1, 1, 2]) =>
# [[0, 1]] repeated_number_ranges([1, 2, 3, 3, 4, 4, 4]) => [[2, 3], [4, 6]]

def repeated_number_ranges(numbers)
  ranges = []
  start_index = nil
  numbers.each_index do |i|
    if numbers[i] == numbers[i + 1]
      start_index = i unless start_index
    elsif start_index
      ranges.push([start_index, i])
      start_index = nil
    end
  end
  ranges
end
