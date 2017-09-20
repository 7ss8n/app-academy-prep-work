class Board

  attr_accessor :grid

  SYMBOLS = {
    s: "safe_ship",
    x: "destroyed_space"
  }

  def self.default_grid
    default_array = Array.new(10) {Array.new(10, nil)}
    return default_array
  end

  def initialize(grid=self.class.default_grid)
    @grid = grid
    self.place_ships
  end

  def [](position)
    row, col = position
    return grid[row][col]
  end

  def []=(position, value)
    row, col = position
    grid[row][col] = value
  end

  def count
    ship_count = 0
    grid.each do |row|
      ship_count += row.count(:s)
    end
    return ship_count
  end

  def empty?(position=nil)
    if position.nil?
      self.count == 0
    else
      return self[position].nil?
    end
  end

  def full?
    grid.each do |row|
      unless row.all? {|space| !space.nil?}
        return false
      end
    end
    return true
  end

  def place_random_ship
    raise "The board is already full." if full?
    position = random_position

    until empty?(position)
      position = random_position
    end

    self[position] = :s
  end

  def random_position
    return [rand(size), rand(size)]
  end

  def size
    grid.length
  end

  def place_ships
    size.times {place_random_ship}
  end

  def won?
    return self.count == 0
  end

  def display
    grid.each do |row|
      puts row.join(" ")
    end
  end

end
