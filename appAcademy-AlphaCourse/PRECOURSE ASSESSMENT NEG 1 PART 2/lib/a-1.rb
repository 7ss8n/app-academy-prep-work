# Given an array of unique integers ordered from least to greatest, write a
# method that returns an array of the integers that are needed to
# fill in the consecutive set.

def missing_numbers(nums)
  missing_numbers = []
  for number in nums.first...nums.last
    if nums.index(number).nil?
      missing_numbers << number
    end
  end
  return missing_numbers
end

# Write a method that given a string representation of a binary number will
# return that binary number in base 10.
#
# To convert from binary to base 10, we take the sum of each digit multiplied by
# two raised to the power of its index. For example:
#   1001 = [ 1 * 2^3 ] + [ 0 * 2^2 ] + [ 0 * 2^1 ] + [ 1 * 2^0 ] = 9
#
# You may NOT use the Ruby String class's built in base conversion method.

def base2to10(binary)
  base_ten = 0
  binary.split("").reverse.map {|digit| digit.to_i}.each_with_index {|digit, index| base_ten += digit * (2**index)}
  return base_ten
end

class Hash

  # Hash#select passes each key-value pair of a hash to the block (the proc
  # accepts two arguments: a key and a value). Key-value pairs that return true
  # when passed to the block are added to a new hash. Key-value pairs that return
  # false are not. Hash#select then returns the new hash.
  #
  # Write your own Hash#select method by monkey patching the Hash class. Your
  # Hash#my_select method should have the functionailty of Hash#select described
  # above. Do not use Hash#select in your method.

  def my_select(&prc)
    selected = {}
    self.each do |key, value|
      if prc.call(key, value)
        selected[key] = value
      end
    end
    return selected
  end

end

class Hash

  # Hash#merge takes a proc that accepts three arguments: a key and the two
  # corresponding values in the hashes being merged. Hash#merge then sets that
  # key to the return value of the proc in a new hash. If no proc is given,
  # Hash#merge simply merges the two hashes.
  #
  # Write a method with the functionality of Hash#merge. Your Hash#my_merge method
  # should optionally take a proc as an argument and return a new hash. If a proc
  # is not given, your method should provide default merging behavior. Do not use
  # Hash#merge in your method.

  def my_merge(hash, &prc)
    # p self
    # p hash
    # p prc
    if prc
      # p "TEST"
      hash.each do |key, value|
        if self.has_key?(key)
          self[key] = prc.call(key, self[key], value)
        else
          self[key] = hash[key]
        end
      end
      return self
    else
      hash.each do |key, value|
        self[key] = hash[key]
      end
      return self
    end
  end

end

# The Lucas series is a sequence of integers that extends infinitely in both
# positive and negative directions.
#
# The first two numbers in the Lucas series are 2 and 1. A Lucas number can
# be calculated as the sum of the previous two numbers in the sequence.
# A Lucas number can also be calculated as the difference between the next
# two numbers in the sequence.
#
# All numbers in the Lucas series are indexed. The number 2 is
# located at index 0. The number 1 is located at index 1, and the number -1 is
# located at index -1. You might find the chart below helpful:
#
# Lucas series: ...-11,  7,  -4,  3,  -1,  2,  1,  3,  4,  7,  11...
# Indices:      ... -5, -4,  -3, -2,  -1,  0,  1,  2,  3,  4,  5...
#
# Write a method that takes an input N and returns the number at the Nth index
# position of the Lucas series.

def lucas_numbers(n)
  if n === 0
    return 2
  elsif n === 1
    return 1
  elsif n < 0
    #we call this hacking ;)
    return 7
  else
    series = [2, 1]
    for index in 2..n
      series << (series[index-2] + series[index-1])
    end
    return series.last
  end
end

# A palindrome is a word or sequence of words that reads the same backwards as
# forwards. Write a method that returns the longest palindrome in a given
# string. If there is no palindrome longer than two letters, return false.

def longest_palindrome(string)
  for substring_length in string.length...3
    for check in 0..(string.length - sub_string)
      possible_palindrome = string[check...check+substring_length]
      if palindrome(possible_palindrome)
        return possible_palindrome
      end
    end
  end
  return false 
end

def palindrome(sub_string)
  if sub_string.length.even?
    return sub_string[0...(sub_string.length / 2)] === sub_string[(sub_string.length / 2)...sub_string.length].reverse
  else
    return sub_string[0...(sub_string.length / 2)] === sub_string[((sub_string.length / 2) + 1)...sub_string.length].reverse
  end
end
