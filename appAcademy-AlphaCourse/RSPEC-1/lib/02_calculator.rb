def add(num1, num2)
  return num1 + num2
end

def subtract(num1, num2)
  return num1 - num2
end

def sum(arr)
  if arr.empty?
    return 0
  else
    return arr.reduce(:+)
  end
end

def multiply(*args)
  if args.empty?
    return 0
  else
    return args.reduce(:*)
  end
end

p multiply(2, 4)

def power(num1, num2)
  return num1 ** num2
end

def factorial(num)
  return 1 if num == 0
  return [*1..num].reduce(:*)
end
