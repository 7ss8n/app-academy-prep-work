# EASY

# Define a method that, given a sentence, returns a hash of each of the words as
# keys with their lengths as values. Assume the argument lacks punctuation.
def word_lengths(str)
  Hash[*(str.split(" ").map { |word| [word, word.size] }.flatten)]
end

# Define a method that, given a hash with integers as values, returns the key
# with the largest value.
def greatest_key_by_val(hash)
  largest_val = hash.values.max
  hash.each do |k, _v|
    return k if hash[k] == largest_val
  end
end

# Define a method that accepts two hashes as arguments: an older inventory and a
# newer one. The method should update keys in the older inventory with values
# from the newer one as well as add new key-value pairs to the older inventory.
# The method should return the older inventory as a result. march = {rubies: 10,
# emeralds: 14, diamonds: 2} april = {emeralds: 27, moonstones: 5}
# update_inventory(march, april) => {rubies: 10, emeralds: 27, diamonds: 2,
# moonstones: 5}
def update_inventory(older, newer)
  result = older
  newer.each do |k,v|
    result[k] = v
  end
  result
end

# Define a method that, given a word, returns a hash with the letters in the
# word as keys and the frequencies of the letters as values.
def letter_counts(word)
  Hash[*(word.chars.map { |char| [char, word.count(char)] }.flatten)]
end

# MEDIUM

# Define a method that, given an array, returns that array without duplicates.
# Use a hash! Don't use the uniq method.
def my_uniq(arr)
  Hash[*(arr.map { |value| [value, arr.count(value)] }.flatten)].keys
end

# Define a method that, given an array of numbers, returns a hash with "even"
# and "odd" as keys and the frequency of each parity as values.
def evens_and_odds(numbers)
  evens = numbers.select {|number| number.even?}.size
  {even: evens, odd: (numbers.size - evens)}
end

# Define a method that, given a string, returns the most common vowel. If
# there's a tie, return the vowel that occurs earlier in the alphabet. Assume
# all letters are lower case.
def most_common_vowel(string)
  vowels = string.downcase.chars.select { |char| vowel?(char) }.sort
  vowel_frequency = Hash.new(0)
  vowels.each { |vowel| vowel_frequency[vowel] += 1 }
  max_frequency = vowel_frequency.values.max
  vowel_frequency.each do |k, v|
    return k if v == max_frequency
  end
end

def vowel?(char)
  char =~ /[aeiou]/
end

# p most_common_vowel("eee")

# HARD

# Define a method that, given a hash with keys as student names and values as
# their birthday months (numerically, e.g., 1 corresponds to January), returns
# every combination of students whose birthdays fall in the second half of the
# year (months 7-12). students_with_birthdays = { "Asher" => 6, "Bertie" => 11,
# "Dottie" => 8, "Warren" => 9 }
# fall_and_winter_birthdays(students_with_birthdays) => [ ["Bertie", "Dottie"],
# ["Bertie", "Warren"], ["Dottie", "Warren"] ]
def fall_and_winter_birthdays(students)
  fw_all = students.select{|_k, v| v > 6}
  fw_student_names = fw_all.to_a.map { |student| student[0] }
  fw_student_names.combination(2).to_a
end

# Define a method that, given an array of specimens, returns the biodiversity
# index as defined by the following formula: number_of_species**2 *
# smallest_population_size / largest_population_size biodiversity_index(["cat",
# "cat", "cat"]) => 1 biodiversity_index(["cat", "leopard-spotted ferret",
# "dog"]) => 9
def biodiversity_index(specimens)
  species = Hash.new(0)
  specimens.each { |specimen| species[specimen] += 1 }
  ((species.size)**2)*(species.values.max / species.values.min)
end

# Define a method that, given the string of a respectable business sign, returns
# a boolean indicating whether pranksters can make a given vandalized string
# using the available letters. Ignore capitalization and punctuation.
# can_tweak_sign("We're having a yellow ferret sale for a good cause over at the
# pet shop!", "Leopard ferrets forever yo") => true

def character_count(str)
  character_frequency = Hash.new(0)
  str.each_char { |char| character_frequency[char] += 1 }
  character_frequency
end

def no_punct(str)
  str.gsub(/[[:punct:]]/, '').gsub(" ", '')
end

def can_tweak_sign?(normal_sign, vandalized_sign)

  #filter normal and vandalized for punctuation; filter normal for chars in vandalized
  filter_norm = no_punct(normal_sign).downcase
  filter_vandal = no_punct(vandalized_sign).downcase
  filter_norm.chars.select! { |char| filter_vandal.include?(char) }

  #get frequency counts for each
  norm_frequency = character_count(filter_norm)
  vandal_frequency = character_count(filter_vandal)

  #compare frequency counts
  norm_frequency.each_key do |key|
    norm_frequency[key] -= vandal_frequency[key]
  end

  norm_frequency.values.min >= 0

end

#p can_tweak_sign?("We're having a yellow ferret sale for a good cause over at the pet shop!", "Leopard ferrets forever yo")
