function findShortestString(arr) {
  let shortest = arr[0]

  for (let i = 1; i < arr.length; i++){
    if (shortest.length > arr[i].length){
      shortest = arr[i]
    }
  }
  return shortest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE

  
  const startTime = new Date()

  const shortInput = [];
  for (let i = 0; i < 3; ++i) {
    shortInput.push('a');
  }

  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push('a');
  }

  
  for (let i = 0; i < 1000; ++i) {
    findShortestString(shortInput)
    findShortestString(longInput)
  }
  const currentTime = new Date()
  const averageRuntime = (currentTime - startTime) / 2000
  console.log(averageRuntime)


}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
