def measure(repeats=1, &prc)
  start = Time.now
  (repeats).times do
    prc.call
  end
  finish = Time.now
  (finish - start) / repeats
end
