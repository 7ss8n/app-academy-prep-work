class RPNCalculator

  attr_accessor :storage

  def initialize
    @storage = []
  end

  def operate(operator)
    operand_two = @storage.pop
    operand_one = @storage.pop
    if operator == :/
      @storage << operand_one.fdiv(operand_two)
    else
      @storage << [operand_one, operand_two].reduce(operator)
    end
  end

  def plus
    if @storage.length < 2
      raise "calculator is empty"
    else
      operate(:+)
    end
  end

  def minus
    if @storage.length < 2
      raise "calculator is empty"
    else
      operate(:-)
    end
  end

  def times
    if @storage.length < 2
      raise "calculator is empty"
    else
      operate(:*)
    end
  end

  def divide
    if @storage.length < 2
      raise "calculator is empty"
    else
      operate(:/)
    end
  end

  def push(num)
    @storage << num
  end

  def value
    @storage.last
  end

  def tokens(input)
    items = input.split(" ")
    items.each_with_index do |item, idx|
      if [*"0".."9"].include?(item)
        items[idx] = item.to_i
      else
        items[idx] = item.to_sym
      end
    end
    items
  end

  def evaluate(input)

    tokenized = tokens(input)

    @storage = []
    @value = 0

    tokenized.each do |item|
      (item.is_a? Symbol) ? operate(item) : push(item)
    end

    value
  end

end
