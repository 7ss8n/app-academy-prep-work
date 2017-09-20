def echo(input)
  input
end

def shout(input)
  input.upcase
end

def repeat(input, iterations=2)
  result = input
  (iterations - 1).times do
    result += " " + input
  end
  result
end

def start_of_word(string, substring_length)
  string[0...substring_length]
end

def first_word(sentence)
  sentence.split(" ").first
end

def titleize(sentence)

  words = sentence.split(" ")

  if words.length == 1
    return words[0].capitalize
  else
    small_words = ["the", "is", "an", "a", "and", "over", "with", "to"]
    words.each_with_index do |word, i|
      if i == 0
        words[i].capitalize!
      else
        words[i].capitalize! unless small_words.include?(words[i])
      end
    end
    words.join(" ")
  end
end
