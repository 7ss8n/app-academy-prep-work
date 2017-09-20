def add(num1, num2)
  num1 + num2
end

def subtract(num1, num2)
  num1 - num2
end

def sum(arr)
  arr.empty? ? 0 : arr.reduce(:+)
end

def multiply(*args)
  args.empty? ? 0 : args.reduce(:*)
end

def power(num1, num2)
  num1 ** num2
end

def factorial(num)
  num == 0 ? 1 : [*1..num].reduce(:*)
end
