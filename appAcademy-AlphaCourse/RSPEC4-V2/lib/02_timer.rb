class Timer

  attr_accessor :seconds

  def initialize(seconds=0)
    @seconds = seconds
  end

  def time_array
    remaining_seconds = seconds

    hours = remaining_seconds / 3600
    remaining_seconds %= 3600

    minutes = remaining_seconds / 60
    remaining_seconds %= 60

    return [hours, minutes, remaining_seconds]
  end

  def time_string(input=self.time_array)
    result = input.map {|time_unit| time_unit < 10? "0" + time_unit.to_s : time_unit.to_s}
    return "#{result[0]}:#{result[1]}:#{result[2]}"
  end

end
