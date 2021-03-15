function drawBoard(num=16){
    const board = document.getElementById("board");
    for(i=1;i<=num*num;i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add("square");
        newDiv.style.border = "0.3vh solid black";
        newDiv.addEventListener("mouseover", ()=>{
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            newDiv.style.backgroundColor = `#${randomColor}`;
        })
        board.appendChild(newDiv);
    }

    board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}

function resetBoard(){
    //remove squares
    const board = document.getElementById("board");
    board.innerHTML = "";
    //build new board
    let newNum = -1;
    while (!(typeof newNum == "number" && newNum <= 100 && newNum >= 0)){
        newNum = parseInt(prompt("How many squares per side you want? (max=100)"));
    }
    
    drawBoard(newNum);
}

drawBoard();

const resetBtn = document.getElementById("resetButton");
resetBtn.addEventListener('click', resetBoard);

