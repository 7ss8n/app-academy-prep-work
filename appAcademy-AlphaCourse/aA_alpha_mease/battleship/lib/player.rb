class ComputerPlayer

  attr_accessor :name, :turn_count, :hit_count, :known_positions

  def initialize(name, turn_count=0, hit_count=0, known_positions=[])
    @name = name
    @turn_count = turn_count
    @hit_count = hit_count
    @known_positions = known_positions
  end

  def get_play
    position = random_position
    puts "You've chosen to attack position #{position}"
    return position
  end

  def prompt
    puts "Please enter a target square (i.e., '3,4')"
    print "> "
  end

  def random_position
    position = [rand(10), rand(10)]
    until !known_positions.include?(position)
      position = [rand(10), rand(10)]
    end
    known_positions.push(position)
    return position
  end

end
