class Book

  UNCAPITALIZED = ["a", "an", "the", "and", "of", "with", "for", "to", "in"]
  attr_reader :title
  attr_writer :title

  def title=(title)
    title_words = title.split(" ")
    title_words.map! {|word| (UNCAPITALIZED.include?(word)) ? word : word.capitalize}
    title_words[0].capitalize!
    @title = title_words.join(" ")
  end
end
