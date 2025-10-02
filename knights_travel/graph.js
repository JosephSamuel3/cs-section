function knightMoves(start, end){
    const moveOrder = [
        [2,1],
        [2,-1],
        [-2,1],
        [-2,-1],
        [1,2],
        [1,-2],
        [-1,2],
        [-1,-2]
    ]

    let visited = new Set()
    let queue = [[start, [start]]]

    visited.add(start.toString());
    

    while(queue.length !== 0) {
        let [current, path] = queue.shift()
        let [x,y] = current
        let moveCount = path.length - 1

        if(x === end[0] && y === end[1]){
            console.log(`You made it in ${moveCount} moves!  Here's your path:`)
            path.forEach(p => {console.log(p)});
            return path
        }

        for(let[mx, my] of moveOrder){
            let nextX = x + mx
            let nextY = y + my
            if(!visited.has([nextX, nextY].toString()) && nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8){
                queue.push([[nextX,nextY], [...path, [nextX,nextY]]])
                visited.add([nextX,nextY].toString())
            }
        }

    }
}
