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
    return entries.keys.sort
  end

  def include?(input)
    return keywords.include?(input)
  end

  def find(input)
    matches = self.entries.select {|key, val| key.include?(input)}
    if matches.empty?
      return {}
    else
      return matches
    end
  end

  def printable
    entries = keywords.map do |keyword|
      %Q{[#{keyword}] "#{@entries[keyword]}"}
    end

    entries.join("\n")
  end

end
