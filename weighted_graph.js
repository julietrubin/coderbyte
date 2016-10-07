/*Using the JavaScript language, have the function WeightedPath(strArr) take strArr which will be an array of strings which models a non-looping weighted Graph.
 The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements 
will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be 
the connections between all of the nodes along with their weights (integers) separated by the pipe symbol (|). They will look like this: (A|B|3, B|C|12 .. 
Brick Street|Main Street|14 .. etc.). Although, there may exist no connections at all. 

An example of strArr may be: ["4","A","B","C","D","A|B|1","B|D|9","B|C|3","C|D|4"]. Your program should return the shortest path when the weights are added up 
from node to node from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-C-D. Here is another 
example with strArr being ["7","A","B","C","D","E","F","G","A|B|1","A|E|9","B|C|2","C|D|1","D|F|2","E|D|6","F|G|2"]. The output for this array should be A-B-C-D-F-G. 
There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. 
Also, the connection A-B for example, means that A can get to B and B can get to A. A path may not go through any Node more than once. 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"4","A","B","C","D", "A|B|2", "C|B|11", "C|D|3", "B|D|2"
Output:"A-B-D"

Input:"4","x","y","z","w","x|y|2","y|z|14", "z|y|31"
Output:-1


*/

function BuildGraph(strArr, numNodes){
    var graph = {};
    for (var i=1; i<=numNodes; i++){
        graph[strArr[i]] = [];
    }
   
   // build the path tree from input
    for (var i=numNodes+1; i<strArr.length; i++){
        var t = strArr[i].split("|");
        graph[t[0]].push([t[1], parseInt(t[2])]);
        graph[t[1]].push([t[0], parseInt(t[2])]);
        
    }
    return graph;
}

function InitializeSmallestPath(strArr, numNodes){
    var smallestPath = {};
    smallestPath[strArr[1]] = [0, [strArr[1]]];
    for (var i=2; i<=numNodes; i++){
        smallestPath[strArr[i]] =  [Number.MAX_SAFE_INTEGER, []];
    }
    return smallestPath;
}

function FindNextNode(to_visit){
	var smallest = Object.keys(to_visit)[0];
	for(v in to_visit){
		if (to_visit[v] < to_visit[smallest]){
			smallest = v
		}
	}
    delete to_visit[smallest];
    return smallest
}

function BuildSmallestPath(strArr, numNodes, graph){
    var visited = [];
		// to_visit: key is the node and value is the current cost to get to the node.
    var to_visit = {};
    to_visit[strArr[1]] = 0;
    var smallestPath = InitializeSmallestPath(strArr, numNodes);
    
    while (Object.keys(to_visit).length > 0){
        var node = FindNextNode(to_visit)
        
        visited.push(node)
        var paths = graph[node]
            
        for (var i=0; i<paths.length; i++){
            var connecting_node = paths[i][0]
            if (visited.indexOf(connecting_node) != -1){
                continue;
            }   
            var cost = paths[i][1]
            if (smallestPath[node][0] + cost < smallestPath[connecting_node][0]){
                smallestPath[connecting_node][0] = smallestPath[node][0] + cost;
                var new_path = smallestPath[node][1].slice()
                new_path.push(connecting_node);
                smallestPath[connecting_node][1] = new_path;
								to_visit[connecting_node] = smallestPath[node][0] + cost
            }
            
        }
    }
    return smallestPath;
}

function WeightedPath(strArr) { 
    /*
    Example:
    Input = "4","A","B","C","D", "A|B|2", "C|B|11", "C|D|3", "B|D|2"

    graph = { A: [ [ B, 2 ] ],
        B: [ [ A, 2 ], [ C, 11 ], [ D, 2 ] ],
        C: [ [ B, 11 ], [ D, 3 ] ],
        D: [ [ C, 3 ], [ B, 2 ] ] }
    
    smallestPath = { A: [ 0, [ A ] ],
        B: [ 2, [ A, B ] ],
        C: [ 13, [ A, B, C ] ],
        D: [ 4, [ A, B, D ] ] }
    
    */
    var numNodes = parseInt(strArr[0]);
    var lastnode = strArr[numNodes]
    var graph = BuildGraph(strArr, numNodes);
    var smallestPath = BuildSmallestPath(strArr, numNodes, graph);
    if (smallestPath[lastnode][0] === Number.MAX_SAFE_INTEGER){
        return -1;
    }
    return smallestPath[lastnode][1].join('-')

}
   
// keep this function call here 
WeightedPath(readline());