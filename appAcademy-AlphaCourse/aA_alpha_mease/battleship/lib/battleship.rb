require_relative "board"
require_relative "player"

class BattleshipGame
  attr_accessor :player1, :player2, :board1, :board2

  def initialize(player1=ComputerPlayer.new("Ryan"), player2=ComputerPlayer.new("Siri"), board1=Board.new, board2=Board.new)
    @player1 = player1
    @player2 = player2
    @board1 = board1
    @board2 = board2
  end

  def attack(position, board, player)
    if board[position] == :s
      puts "It's a hit!"
      player.hit_count += 1
    else
      puts "Sorry, you missed"
    end

    puts "\n\n\n"
    board[position] = :x
  end

  def count(board)
    return board.count
  end

  def game_over?
    return board1.won? || board2.won?
  end

  def play_turn(player, board)
    player.prompt
    position = player.get_play
    attack(position, board, player)
    player.turn_count += 1
  end

  def play
    puts "It's nice to meet you, Admiral #{player1.name}."
    puts "It's nice to meet you, Admiral #{player2.name}."
    puts "~~~~~~~~~~~Welcome to the High Seas~~~~~~~~~~~"
    puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"

    until game_over?
      play_turn(player1, board1)
      play_turn(player2, board2)
    end

    puts "#{player1.name}'s Board'"
    board1.display
    puts "\n\n"
    puts "#{player2.name}'s Board'"
    board2.display
    puts "\n\n"

    if board1.won?
      puts "Congrats #{player1.name}, you've won!"
    elsif board2.won?
      puts "Congrats #{player2.name}, you've won!"
    else
      puts "Sorry, you exceeded the number of available turns. It's a tie."
      puts "#{player1.name}, you managed to hit #{player1.hit_count} ships"
      puts "#{player2.name}, you managed to hit #{player2.hit_count} ships"
    end

  end

end

if __FILE__ == $PROGRAM_NAME
  BattleshipGame.new.play
end
