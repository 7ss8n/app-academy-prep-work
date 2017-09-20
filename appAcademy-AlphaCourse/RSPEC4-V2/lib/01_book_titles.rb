class Book

  attr_accessor :title

  NEVER_CAPITALIZED = ["the", "a", "an", "of", "over", "on", "in", "and", "for"]

  def title=(title)
    words = title.split(" ").map {|word| word.downcase}
    if words.length == 1
      return @title = title.capitalize
    else
      words.map! {|word| NEVER_CAPITALIZED.include?(word) ? word : word.capitalize}

      return @title = words[0].capitalize + " " + words[1...words.length].join(" ")
    end
  end
end
