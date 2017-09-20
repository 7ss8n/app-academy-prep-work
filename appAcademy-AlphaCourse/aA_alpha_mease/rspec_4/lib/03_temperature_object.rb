class Temperature

  attr_accessor :fahrenheit, :celsius

  def initialize(opts)
    if opts[:f]
      @fahrenheit = opts[:f]
      @celsius = nil
    else
      @fahrenheit = nil
      @celsius = opts[:c]
    end
  end

  def in_celsius
    if self.celsius.nil?
      self.celsius = self.class.ftoc(self.fahrenheit)
    end
    self.celsius
  end

  def in_fahrenheit
    if self.fahrenheit.nil?
      self.fahrenheit = self.class.ctof(self.celsius)
    end
    self.fahrenheit
  end

  def self.ctof(temp)
    (temp * 9 / 5.0) + 32
  end

  def self.ftoc(temp)
    (temp - 32) * (5 / 9.0)
  end

  def self.from_celsius(degree)
    Temperature.new(:c => degree)
  end

  def self.from_fahrenheit(degree)
    Temperature.new(:f => degree)
  end

end

class Celsius < Temperature
  def initialize(degree)
    self.celsius = degree
    self.fahrenheit = nil
  end
end

class Fahrenheit < Temperature
  def initialize(degree)
    self.fahrenheit = degree
    self.celsius = nil
  end
end
