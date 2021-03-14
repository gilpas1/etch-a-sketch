function drawBoard(num=16){
    const board = document.getElementById("board");
    for(i=1;i<=num*num;i++){
        let newDiv = document.createElement('div');
        newDiv.style.border = "0.3vh solid black";
        board.appendChild(newDiv);
    }

    board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}


drawBoard();