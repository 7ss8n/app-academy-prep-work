# EASY

# Define a method that, given a sentence, returns a hash of each of the words as
# keys with their lengths as values. Assume the argument lacks punctuation.
def word_lengths(str)
  hashed = str.split(" ").map {|word| [word, word.length]}.flatten
  return Hash[*hashed]
end

# Define a method that, given a hash with integers as values, returns the key
# with the largest value.
def greatest_key_by_val(hash)
  largest_val = hash.values.max
  hash.each do |k, v|
    return k if hash[k] === largest_val
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
  return result
end

# Define a method that, given a word, returns a hash with the letters in the
# word as keys and the frequencies of the letters as values.
def letter_counts(word)
  hashed = word.chars.map {|char| [char, word.count(char)]}.flatten
  return Hash[*hashed]
end

# MEDIUM

# Define a method that, given an array, returns that array without duplicates.
# Use a hash! Don't use the uniq method.
def my_uniq(arr)
  hashed = arr.map {|value| [value, arr.count(value)]}.flatten
  return Hash[*hashed].keys
end

# Define a method that, given an array of numbers, returns a hash with "even"
# and "odd" as keys and the frequency of each parity as values.
def evens_and_odds(numbers)
  evens = numbers.select {|number| number.even?}.length
  return {:even=>evens, :odd=>(numbers.length - evens)}
end

# Define a method that, given a string, returns the most common vowel. If
# there's a tie, return the vowel that occurs earlier in the alphabet. Assume
# all letters are lower case.
def most_common_vowel(string)
  vowels = string.downcase.split("").select {|char| char =~ /[aeiou]/}.sort
  vowel_frequency = {}
  vowels.each do |vowel|
    if vowel_frequency.has_key?(vowel)
      vowel_frequency[vowel] += 1
    else
      vowel_frequency[vowel] = 1
    end
  end
  max_frequency = vowel_frequency.values.max
  vowel_frequency.each do |k, v|
    return k if v === max_frequency
  end
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
  fall_and_winter_only = students.select{|k, v| v > 6}.to_a.map {|student| student[0]}
  return fall_and_winter_only.combination(2).to_a
end

# Define a method that, given an array of specimens, returns the biodiversity
# index as defined by the following formula: number_of_species**2 *
# smallest_population_size / largest_population_size biodiversity_index(["cat",
# "cat", "cat"]) => 1 biodiversity_index(["cat", "leopard-spotted ferret",
# "dog"]) => 9
def biodiversity_index(specimens)
  species = Hash.new(0)
  specimens.each do |specimen|
    species[specimen] += 1
  end
  return ((species.size)**2)*(species.values.max / species.values.min)
end

# Define a method that, given the string of a respectable business sign, returns
# a boolean indicating whether pranksters can make a given vandalized string
# using the available letters. Ignore capitalization and punctuation.
# can_tweak_sign("We're having a yellow ferret sale for a good cause over at the
# pet shop!", "Leopard ferrets forever yo") => true

def character_count(str)
  character_frequency = Hash.new(0)
  str.each_char do |char|
    character_frequency[char] += 1
  end
  return character_frequency
end

def can_tweak_sign?(normal_sign, vandalized_sign)

  #filter normal and vandalized for punctuation; filter normal for chars in vandalized
  normal_filtered = normal_sign.gsub(/[[:punct:]]/, '').gsub(" ", '').downcase
  vandalized_filtered = vandalized_sign.gsub(/[[:punct:]]/, '').gsub(" ", '').downcase
  normal_filtered = normal_filtered.split("").select {|char| vandalized_filtered.include?(char)}.join("")

  #get frequency counts for each
  normal_frequency = character_count(normal_filtered)
  vandalized_frequency = character_count(vandalized_filtered)

  #compare frequency counts
  normal_frequency.each_key do |key|
    normal_frequency[key] -= vandalized_frequency[key]
  end

  p normal_frequency

  return normal_frequency.values.min >= 0

end

#p can_tweak_sign?("We're having a yellow ferret sale for a good cause over at the pet shop!", "Leopard ferrets forever yo")
