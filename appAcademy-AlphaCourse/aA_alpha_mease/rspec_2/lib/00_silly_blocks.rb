def reverser(&prc)
  sentence = prc.call
  sentence.split(" ").map {|word| word.reverse}.join(" ")
end

def adder(base=1, &prc)
  base += prc.call
  base
end

def repeater(repetitions=1, &prc)
  (repetitions).times do
    prc.call
  end
end
