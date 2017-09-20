def echo(input)
  return input
end

def shout(input)
  return input.upcase
end

def repeat(input, iterations=2)
  result = input
  (iterations - 1).times do
    result += " " + input
  end
  return result
end

def start_of_word(string, substring_length)
  return string[0...substring_length]
end

def first_word(sentence)
  return sentence.split(" ").first
end

def titleize(sentence)

  words = sentence.split(" ")

  if words.length === 1
    return words[0].capitalize
  else
    small_words = ["the", "is", "an", "a", "and", "over", "with", "to"]
    words.each_with_index do |word,index|
      if index === 0
        words[0].capitalize!
      else
        words[index].capitalize! unless small_words.include?(words[index])
      end
    end
    return words.join(" ")
  end
end
