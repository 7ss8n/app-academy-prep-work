class Hangman
  attr_reader :guesser, :referee, :board

  MAX_TURNS = 20

  def initialize(players)
    @guesser = players[:guesser]
    @referee = players[:referee]
  end

  def setup
    secret_word_length = referee.pick_secret_word
    guesser.register_secret_length(secret_word_length)
    @board = Array.new(secret_word_length, nil)
    puts "The board currently looks like this: "
    puts board.join("-")
    puts "There are #{secret_word_length} letters to guess!"
  end

  def take_turn
    guess = guesser.guess(board)
    result = referee.check_guess(guess)
    if !result.empty?
      update_board(guess, result)
    else
      puts "The board now looks like this: "
      puts board.join("-")
    end
    guesser.handle_response(guess,result)
  end

  def update_board(guess, indices)
    indices.each do |index|
      board[index] = guess
    end
    puts "The board now looks like this: "
    puts board.join("-")
  end

  def play_game
    self.setup
    while self.guesser.guess_count <= MAX_TURNS
      self.take_turn
      if complete?(board)
        break;
      else
        self.guesser.guess_count += 1
      end
    end

    if complete?(board)
      puts "#{self.guesser.name} won!"
    else
      puts "Sorry #{self.guesser.name}, you have made #{MAX_TURNS} guesses and you didn't guess the word."
      puts "The word was #{self.referee.secret_word}"
      puts "You lose..."
    end
  end

  def complete?(board)
    return board.none? {|tile| tile.nil?}
  end

end

class HumanPlayer

    attr_accessor :dictionary, :secret_word_length, :guess_count, :name, :secret_word, :guessed_letters

    def initialize(name, dictionary)
      @name = name
      @dictionary = dictionary
      @guess_count = 0
      @guessed_letters = []
    end

    #referee methods

    def pick_secret_word
      puts "Ok, you need to pick a secret word."
      potential_secret_word = gets.chomp.downcase
      until dictionary.include?(potential_secret_word)
        puts "Sorry, we don't have that word in the dictionary."
        potential_secret_word = gets.chomp.downcase
      end
      puts "That's a great word!"
      @secret_word = potential_secret_word
      return secret_word.length
    end

    def check_guess(letter)
      correct_indices = []
      letters = secret_word.split("")
      letters.each_with_index do |current_letter, idx|
        if current_letter === letter
          correct_indices.push(idx)
        end
      end
      return correct_indices
    end

    #guesser methods

    def guess(board)
      # puts "The dictionary length is #{dictionary.length}"
      # puts "#{self.name} guesses #{self.most_common(guessed_letters)}"
      puts "Hi, #{self.name}"
      puts "So far, you have guessed #{guessed_letters.inspect}"
      puts "Please get a letter."
      my_guess = gets.chomp.downcase
      until my_guess.length == 1
        puts "Please try again. Your input was not valid."
        my_guess = gets.chomp.downcase
      end
      guessed_letters.push(my_guess)
      return my_guess
    end

    def handle_response(letter, indices)
      if indices.empty?
        dictionary.reject! {|word| word.include?(letter)}
      end
      #   dictionary.select! do |word|
      #     indices.all? {|index| word[index] == letter}
      #   end
      #   dictionary.select! {|word| word.length == secret_word_length}
      #   dictionary.select! {|word| word.count(letter) == indices.length}
      # end
    end

    def register_secret_length(length)
      @secret_word_length = length
      candidate_words(dictionary)
    end

    def candidate_words(dictionary)
      return dictionary.select! {|word| word.length == secret_word_length}
    end

    def most_common(check)
      if dictionary.length < 5
        puts dictionary.inspect
      end
      letter_count = Hash.new(0)
      dictionary.join("").chars.each {|char| letter_count[char] += 1}
      filtered = letter_count.reject {|key| check.include?(key)}
      max_value = filtered.values.max
      filtered.each_key {|key| return key if letter_count[key] == max_value}
    end

end

class ComputerPlayer

  attr_accessor :dictionary, :secret_word_length, :guess_count, :name, :secret_word, :guessed_letters

  def initialize(name, dictionary)
    @name = name
    @dictionary = dictionary
    @guess_count = 0
    @guessed_letters = []
  end

  #referee methods

  def pick_secret_word
    @secret_word = dictionary.sample
    return secret_word.length
  end

  def check_guess(letter)
    correct_indices = []
    letters = secret_word.split("")
    letters.each_with_index do |current_letter, idx|
      if current_letter === letter
        correct_indices.push(idx)
      end
    end
    return correct_indices
  end

  #guesser methods

  def guess(board)
    # puts "The dictionary length is #{dictionary.length}"
    # puts "#{self.name} guesses #{self.most_common(guessed_letters)}"
    my_guess = self.most_common(guessed_letters)
    self.guessed_letters.push(my_guess)
    return my_guess
  end

  def handle_response(letter, indices)
    if indices.empty?
      dictionary.reject! {|word| word.include?(letter)}
    end
    #   dictionary.select! do |word|
    #     indices.all? {|index| word[index] == letter}
    #   end
    #   dictionary.select! {|word| word.length == secret_word_length}
    #   dictionary.select! {|word| word.count(letter) == indices.length}
    # end
  end

  def register_secret_length(length)
    @secret_word_length = length
    candidate_words(dictionary)
  end

  def candidate_words(dictionary)
    return dictionary.select! {|word| word.length == secret_word_length}
  end

  def most_common(check)
    if dictionary.length < 5
      puts dictionary.inspect
    end
    letter_count = Hash.new(0)
    dictionary.join("").chars.each {|char| letter_count[char] += 1}
    filtered = letter_count.reject {|key| check.include?(key)}
    max_value = filtered.values.max
    filtered.each_key {|key| return key if letter_count[key] == max_value}
  end

end

if __FILE__ == $PROGRAM_NAME
  my_dict = File.open("dictionary.txt").readlines.map! {|line| line.chomp}
  puts "Welcome to Hangman"
  puts "Will the guesser be a computer or a human?"
  result = gets.chomp.downcase

  until result == "computer" || result == "human"
    puts "That is not valid input."
    result = gets.chomp.downcase
  end

  if result == "computer"
    puts "Will the referee be a computer or a human?"
    result = gets.chomp.downcase

    until result == "computer" || result == "human"
      puts "That is not valid input."
      result = gets.chomp.downcase
    end

    if result == "computer"
      players = {:guesser => ComputerPlayer.new("Charles", my_dict), :referee => ComputerPlayer.new("Renee", my_dict)}
    else
      puts "What is your name? "
      human_name = gets.chomp
      players = {:guesser => ComputerPlayer.new("Charles", my_dict), :referee => HumanPlayer.new(human_name, my_dict)}
    end

  else

    puts "What is your name? "
    human_name = gets.chomp
    players = {:guesser => HumanPlayer.new(human_name, my_dict), :referee => ComputerPlayer.new("Renee", my_dict)}

  end
  currentgame = Hangman.new(players)
  currentgame.play_game
end
