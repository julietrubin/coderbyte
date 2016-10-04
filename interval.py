# combine and merge ethe interval in the interval array. 

def overLaps(arr1, arr2):
	if arr1[0] > arr2[1]:
		return False
	elif arr2[0] > arr1[1]:
		return False
  	else:
		return True

def insertInterval(arr, interval):
	newSet = []
	i = 0
		
	while (i < len(arr)):
		if overLaps(arr[i], interval):
			# only enters here once	
			temp_min = min(arr[i][0], interval[0])
			temp_max = max(arr[i][1], interval[1])
			while (i + 1 < len(arr) and overLaps([temp_min, temp_max], arr[i+1])):
			  	temp_min = min(temp_min, arr[i+1][0])
			  	temp_max = max(temp_max, arr[i+1][1])
			  	i += 1
			newSet.append([temp_min, temp_max])
		else:	
			newSet.append(arr[i])
			
		i += 1	
		
	return newSet
	  
  
  
print insertInterval([[1,5],[10,15],[20,25]], [12,27]); 
print insertInterval([[6,7]], [1,9]);
print insertInterval([[6,7]], [1,5]);
print insertInterval([[1,5]], [6,7]);
print insertInterval([[1,5],[6,11],[13,20],[40,50], [51,53], [56, 60]], [12,55]);  
print insertInterval([[1,5],[10,15],[20,25]], [2,6]); 
print insertInterval([[1,5],[6,11],[13,20],[25,30],[32,55]], [12,45]); 
print insertInterval([[1,5],[6,11],[20,22]], [24,45]);