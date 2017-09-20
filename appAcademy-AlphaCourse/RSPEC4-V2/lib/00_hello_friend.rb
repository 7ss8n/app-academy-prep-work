class Friend
  # def initialize(name)
  #   @name = name
  # end

  def greeting(name=nil)
    if name.nil?
      return "Hello!"
    else
     return "Hello, #{name}!"
    end
  end
end
