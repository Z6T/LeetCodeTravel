function printMatrix(matrix)
{
    // write code here
    const res = []
    let x = 0, y = 0;
    let numberOfCircles = (matrix.length+matrix[0].length-2)*2
    let traverseTimes = Math.floor((Math.min(matrix.length, matrix[0].length) + 1) / 2) - 1;
    for (let i = 0; i < traverseTimes; i++) {
        const element = array[i];
        for (let j = 0; j < numberOfCircles; j++) {
            if (y == 0 && x <matrix[0].length-1) {
                x++
            } else if (x == matrix[0].length && y< matrix.length-1) {
                y++
            }else if(y = matrix)
            
        }
        res.push(getItem(x,y))
    }
    function getItem(x,y) {
        return matrix[x][y]
    }
}