class Board

  MARKS = [:X, :O]

  attr_accessor :grid

  def initialize(grid = Array.new(3) {Array.new(3)})
    @grid = grid
  end

  def grid
    @grid
  end

  def [](pos)
    row, col = pos
    grid[row][col]
  end

  def []=(pos, value)
    row, col = pos
    grid[row][col] = value
  end

  def place_mark(pos, mark)
    self[pos] = mark
  end

  def empty?(pos)
    self[pos].nil?
  end

  def winner
    winning_pos = [[[0,0],[0,1],[0,2]],
                   [[1,0],[1,1],[1,2]],
                   [[2,0],[2,1],[2,2]],
                   [[0,0],[1,0],[2,0]],
                   [[0,1],[1,1],[2,1]],
                   [[0,2],[1,2],[2,2]],
                   [[0,2],[1,1],[2,0]],
                   [[0,0],[1,1],[2,2]]]

    winning_pos.each do |win|
      if self[win[0]] == :X && self[win[1]] == :X &&
        self[win[2]] == :X
         return :X
      elsif self[win[0]] == :O && self[win[1]] == :O &&
        self[win[2]] == :O
        return :O
      end
    end

    nil
  end

  def over?
    if grid.flatten.none? { |space| space.nil? } || winner
      true
    else
      false
    end
  end

end
