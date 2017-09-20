def translate(sentence)
  words = sentence.split(" ")
  words.map { |word| pigify(word) }.join(" ")
end

def pigify(word)
  characters = word.split("")
  if vowel?(word.chars.first)
    return word + "ay"
  else
    start_idx = 0

    #extend slice for multiconsonant phonemes
    word.chars.each do |char|
      !(vowel?(char)) ? start_idx += 1 : break
    end

    #position start of, rest of word slices
    start = word[0...start_idx]
    rest = word[start_idx...word.length]

    #check for 'qu' as single phoneme
    if start[-1] === "q" && rest[0] === "u"
      start = word[0...start_idx + 1]
      rest = word[start_idx + 1...word.length]
    end

    #capitalizes as necessary
    if capitalized?(word)
      rest.capitalize + start.downcase + "ay"
    else
      rest + start + "ay"
    end
  end
end

def capitalized?(word)
  word.capitalize == word
end

def vowel?(char)
  char =~ /[aeiou]/
end
