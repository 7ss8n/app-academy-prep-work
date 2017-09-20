# A flock of  birds is flying across the continent. Each bird has a type, and the different types are designated by the ID numbers , , , , and .

# Given an array of  integers where each integer describes the type of a bird in the flock, find and print the type number of the most common bird. If two or more types of birds are equally common, choose the type with the smallest ID number.
# 
# # The first line contains an integer denoting  (the number of birds). 
# The second line contains  space-separated integers describing the respective type numbers of each bird in the flock.
# 

array_of_counts = [[1,0],[2,0],[3,0],[4,0],[5,0]]
number_of_birds = int(input())
array_of_birds = map(int, raw_input().split())

for bird in array_of_birds:
	array_of_counts[bird - 1][1] += 1

biggest_index = 0

for bird in array_of_counts:
	if bird[1] > biggest_index:
		bird[0] = biggest_index

print biggest_index

		

