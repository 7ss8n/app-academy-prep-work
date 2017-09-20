 class Fixnum

  ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  TENS = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

  def in_words
    if self < 0
      return "negative " + self.abs.in_words
    elsif self < 10
      return self.in_tens
    elsif self < 100
      return self.in_tens
    elsif self < 1_000
      return self.in_hundreds
    elsif self < 1_000_000
      return self.in_thousands
    elsif self < 1_000_000_000
      return self.in_millions
    elsif self < 1_000_000_000_000
      return self.in_billions
    elsif self < 1_000_000_000_000_000
      return self.in_trillions
    else
      raise "NOT YET IMPLEMENTED"
    end


  end

  def in_tens
    if self < 10
      return ONES[self]
    elsif self < 20
      return TEENS[self % 10]
    else
      tens = self / 10
      ones = self % 10
      if ones > 0
        return TENS[tens] + " " + ONES[ones]
      else
        return TENS[tens]
      end
    end
  end

  def in_hundreds
    if self < 100
      return self.in_tens
    else
      hundreds = ONES[self / 100] + " hundred"
      if self % 100 > 0
        return hundreds + " " + (self % 100).in_tens
      else
        return hundreds
      end
    end
  end

  def in_thousands
    if self < 1_000
      return self.in_hundreds
    else
      thousands = (self / 1000).in_hundreds + " thousand"
      if self % 1000 > 0
        return thousands + " " + (self % 1000).in_hundreds
      else
        return thousands
      end
    end
  end

  def in_millions
    if self < 1_000_000
      return self.in_thousands
    else
      millions = (self / 1_000_000).in_hundreds + " million"
      if self % 1_000_000 > 0
        return millions + " " + (self % 1_000_000).in_thousands
      else
        return millions
      end
    end
  end

  def in_billions
    if self < 1_000_000_000
      return self.in_millions
    else
      billions = (self / 1_000_000_000).in_hundreds + " billion"
      if self % 1_000_000_000 > 0
        return billions + " " + (self % 1_000_000_000).in_millions
      else
        return billions
      end
    end
  end

  def in_trillions
    if self < 1_000_000_000_000
      return self.in_billions
    else
      trillions = (self / 1_000_000_000_000).in_hundreds + " trillion"
      if self % 1_000_000_000_000 > 0
        return trillions + " " + (self % 1_000_000_000_000).in_billions
      else
        return trillions
      end
    end
  end

end

p -404.in_words
