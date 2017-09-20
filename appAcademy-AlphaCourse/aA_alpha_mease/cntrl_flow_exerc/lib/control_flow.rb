# EASY

# Return the argument with all its lowercase characters removed.
def destructive_uppercase(str)
  upcase_only = ""
  str.each_char do |char|
    upcase_only += char unless char.downcase == char
  end
  upcase_only
end

# Return the middle character of a string. Return the middle two characters if
# the word is of even length, e.g. middle_substring("middle") => "dd",
# middle_substring("mid") => "i"
def middle_substring(str)
  median = (str.size / 2)
  str.length.even? ? str[(median - 1)..median] : str[median]
end

# Return the number of vowels in a string.
def num_vowels(str)
  str.downcase.scan(/[aeiou]/).count
end

# Return the factoral of the argument (num). A number's factorial is the product
# of all whole numbers between 1 and the number itself. Assume the argument will
# be > 0.
def factorial(num)
  product = 1
  for factor in 1..num
    product *= factor
  end
  product
end


# MEDIUM

# Write your own version of the join method. separator = "" ensures that the
# default seperator is an empty string.
def my_join(arr, separator = "")
  result = ""
  arr.each_with_index do |ele, idx|
    idx < arr.size - 1 ? result += (ele + separator) : result += ele
  end
  result
end

# Write a method that converts its argument to weirdcase, where every odd
# character is lowercase and every even is uppercase, e.g.
# weirdcase("weirdcase") => "wEiRdCaSe"
def weirdcase(str)
  result = ""
  str.downcase.each_char.with_index do |char, i|
    i.even? ? result += char.downcase : result += char.upcase
  end
  result
end

# Reverse all words of five more more letters in a string. Return the resulting
# string, e.g., reverse_five("Looks like my luck has reversed") => "skooL like
# my luck has desrever")
def reverse_five(str)
  result = str.split(' ').map do |word|
    word.size >= 5 ? word.reverse : word
  end
  result.join(' ')
end

# Return an array of integers from 1 to n (inclusive), except for each multiple
# of 3 replace the integer with "fizz", for each multiple of 5 replace the
# integer with "buzz", and for each multiple of both 3 and 5, replace the
# integer with "fizzbuzz".
def fizzbuzz(n)
  range = [*1..n]
  range.map! do |num|
    if num % 3 == 0 && num % 5 == 0
      num = "fizzbuzz"
    elsif num % 5 == 0
      num = "buzz"
    elsif num % 3 == 0
      num = "fizz"
    else
      num
    end
  end
end

# HARD

# Write a method that returns a new array containing all the elements of the
# original array in reverse order.
# def my_reverse(arr)
#   new_arr = []
#   arr.each_index do |idx|
#     new_arr << arr[idx].to_s.reverse
#   end
#   return new_arr
# end

def my_reverse(arr)
  new_arr = []
  arr.each { |ele| new_arr.unshift(ele) }
  new_arr
end

# Write a method that returns a boolean indicating whether the argument is
# prime.
def prime?(num)
  if num < 3
    num.even? ? true : false
  else
    for i in 2...num
      return false if num % i == 0
    end
    true
  end
end


# Write a method that returns a sorted array of the factors of its argument.

def factors(num)
  prime?(num) ? [1, num].uniq : [*1..num].select { |i| num % i == 0}
end

# # Write a method that returns a sorted array of the prime factors of its argument.

def prime_factors(num)
  factors(num).select { |factor| prime?(factor) }
end

# p prime_factors(12)

# Write a method that returns the number of prime factors of its argument.
def num_prime_factors(num)
  return prime_factors(num).size
end


# EXPERT

# Return the one integer in an array that is even or odd while the rest are of
# opposite parity, e.g. oddball([1,2,3]) => 2, oddball([2,4,5,6] => 5)
def oddball(arr)
  odds = arr.select {|num| num.odd?}
  evens = arr.select {|num| num.even?}
  odds.size > evens.size ? evens[0] : odds[0]
end
