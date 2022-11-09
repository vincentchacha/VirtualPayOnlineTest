/**
 * Question2
 * @author     Vincent Koech <vinukoech@gmail.com>;
 */


/**
 * @param {number} n
 * @return {array}
 */
 var spiralArray = function(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
    
    let counter = 0;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
       // Top row
      for (let i = startColumn; i <= endColumn; i++){
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
      // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
      // start column
    
     for (let i = endRow; i >= startRow; i--) {
       results[i][startColumn] = counter;
       counter++;
     }
     startColumn++;
   }
   return results;
  }
  // Get passed parameters
  var args = process.argv.slice(2);
  console.log(spiralArray(args[0]));