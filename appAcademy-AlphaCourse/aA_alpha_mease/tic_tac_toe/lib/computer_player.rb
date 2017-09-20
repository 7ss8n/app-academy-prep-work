class ComputerPlayer

  attr_accessor :board, :name, :mark

  def initialize(name)
    @name = name
    @mark = nil
  end

  def display(board)
    @board = board
  end

  def get_move
    available_moves = []
    for row in 0..2
      for col in 0..2
        available_moves.push([row, col])
      end
    end
    available_moves.select! { |pos| board[pos].nil? }

    available_moves.each do |move|
      return move if wins?(move)
    end

    available_moves.sample
  end

  def wins?(move)
    board[move] = mark
    if board.winner == mark
      board[move] = nil
      true
    else
      board[move] = nil
      false
    end
  end

end
