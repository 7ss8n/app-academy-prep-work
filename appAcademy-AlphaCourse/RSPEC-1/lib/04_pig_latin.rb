def translate(sentence)
  words = sentence.split(" ")
  return words.map {|word| pigify(word)}.join(" ")
end

def pigify(word)
  characters = word.split("")
  if characters.first =~ /[aeiou]/
    return word + "ay"
  else
    start_of_word_index = 0

    #extend slice for multiconsonant phonemes
    characters.each do |character|
      if !(character =~ /[aeiou]/)
        start_of_word_index += 1
      else
        break
      end
    end

    #position start of, rest of word slices
    start_of_word = word[0...start_of_word_index]
    rest_of_word = word[start_of_word_index...word.length]

    #check for 'qu' as single phoneme
    if start_of_word[-1] === "q" && rest_of_word[0] === "u"
      start_of_word = word[0...start_of_word_index + 1]
      rest_of_word = word[start_of_word_index + 1...word.length]
    end

    #capitalizes as necessary
    if capitalized?(word)
      rest_of_word.capitalize + start_of_word.downcase + "ay"
    else
      return rest_of_word + start_of_word + "ay"
    end
  end
end

def capitalized?(word)
  return word.capitalize === word
end
