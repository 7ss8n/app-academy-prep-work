require_relative 'board'
require_relative 'human_player'
require_relative 'computer_player'

class Game

  attr_accessor :board, :player1, :player2, :current_player

  def initialize(player1, player2)

    @player1 = player1
    player1.mark = :X
    @current_player = player1

    @player2 = player2
    player2.mark = :O

    @board = Board.new
  end

  def play_turn
    current_move = current_player.get_move
    board.place_mark(current_move, current_player.mark)
    switch_players!
  end

  def switch_players!
    self.current_player = current_player == player1 ? player2 : player1
  end

end
