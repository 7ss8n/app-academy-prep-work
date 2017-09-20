def reverser(&prc)
  sentence = prc.call
  words = sentence.split(" ")
  return words.map {|word| word.reverse}.join(" ")
end

def adder(base=1, &prc)
  base += prc.call
  return base
end

def repeater(repetitions=1, &prc)
  (repetitions).times do
    prc.call
  end
end
