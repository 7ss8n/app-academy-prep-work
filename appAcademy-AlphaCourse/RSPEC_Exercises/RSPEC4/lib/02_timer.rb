class Timer

  attr_accessor :seconds

  def initialize(seconds=0)
    @seconds = seconds
  end

  def time_string
    return "#{padded(hours)}:#{padded(minutes)}:#{padded(minute_seconds)}"
  end

  def hours
    return seconds.fdiv(3600).floor
  end

  def minutes
    return (seconds % 3600).fdiv(60).floor
  end

  def minute_seconds
    return (seconds % 3600) % 60
  end

  def padded(number)
    if number > 9
      return number.to_s
    else
      return "0" + number.to_s
    end
  end

end
