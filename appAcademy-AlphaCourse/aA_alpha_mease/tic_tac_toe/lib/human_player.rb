class HumanPlayer
  attr_reader :name, :board
  attr_accessor :mark

  def initialize(name)
    @name = name
  end

  def get_move
    puts "Where would you like to put your mark?"
    move = gets.chomp.split(", ").map(&:to_i)
  end

  def display(board)
    puts board.grid.join("\n")
  end
end
