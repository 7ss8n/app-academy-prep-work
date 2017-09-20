class Dictionary

  attr_accessor :entries

  def initialize
    @entries = {}
  end

  def add(input)
    if input.is_a?(String)
      self.entries[input] = nil
    elsif input.is_a?(Hash)
      self.entries.merge!(input)
    end
  end

  def keywords
    entries.keys.sort
  end

  def include?(input)
    keywords.include?(input)
  end

  def find(input)
    matches = self.entries.select {|k, v| k.include?(input)}
    matches.empty? ? {} : matches
  end

  def printable
    entries = keywords.map do |keyword|
      %Q{[#{keyword}] "#{@entries[keyword]}"}
    end
    entries.join("\n")
  end

end
