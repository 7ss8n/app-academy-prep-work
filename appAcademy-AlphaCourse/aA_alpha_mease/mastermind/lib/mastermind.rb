class Code
  attr_reader :pegs

  PEGS = {
    "B" => :blue,
    "G" => :green,
    "O" => :orange,
    "P" => :purple,
    "R" => :red,
    "Y" => :yellow
  }

  def initialize(pegs)
    @pegs = pegs.map! { |letter| letter.upcase }
  end

  def self.parse(input)
    letters = input.upcase.chars

    letters.each do |letter|
      if PEGS.keys.index(letter).nil?
        raise "Your letter #{letter} is not an available color."
      end
    end

    Code.new(letters)
  end

  def self.random
    Code.new([PEGS.keys.sample, PEGS.keys.sample, PEGS.keys.sample, PEGS.keys.sample])
  end

  def [](i)
    pegs[i]
  end

  def exact_matches(guess)
    exact_matches = 0
    pegs.each_with_index do |peg, idx|
      if self[idx] == guess[idx]
        exact_matches += 1
      end
    end
    exact_matches
  end

  def near_matches(guess)
    near_matches = 0
    compare_pegs = pegs.clone
    guess.pegs.each_with_index do |peg, idx|
      if compare_pegs.include?(peg)
        peg_apperance = compare_pegs.index(peg)
        unless guess.pegs[idx] == self[idx]
          compare_pegs[peg_apperance] = nil
          near_matches += 1
        end
      end
    end
    near_matches
  end

  def ==(guess)
    if !(guess.is_a?(Code))
      return false
    else
      self.pegs == guess.pegs
    end
  end

end

class Game
  attr_reader :secret_code

  PEGS = {
    "B" => :blue,
    "G" => :green,
    "O" => :orange,
    "P" => :purple,
    "R" => :red,
    "Y" => :yellow
  }

  MAX_TURNS = 10

  def initialize(secret_code=Code.random)
    @secret_code = secret_code
    @current_user_guess = nil
  end

  def get_guess
    puts "Guess the code. Your options are:"
    puts PEGS
    guess = Code.parse(gets.chomp)
    guess
  end

  def display_matches(guess)
    puts "You have matched #{secret_code.exact_matches(guess)} pegs exactly."
    puts "You have nearly matched #{secret_code.near_matches(guess)} pegs."
  end

  def play
    puts "Welcome to MASTERMIND. I hope you are ready for a challenge."
    puts "Generating code now..."
    sleep(4)
    puts "OK! This one is challenging."
    MAX_TURNS.times do
      current_user_guess = get_guess
      if current_user_guess == secret_code
        win
        break
      else
        display_matches(current_user_guess)
      end
    end
    lose
  end

  def win
    puts "Wow, you beat me! I can't believe it."
    puts "Some people have all the luck..."
  end

  def lose
    puts "Sorry, loser. Try harder next time."
    puts "My code was #{secret_code.pegs.join("")}"
  end

end

if $PROGRAM_NAME == __FILE__
  current_game = Game.new
  current_game.play
end
