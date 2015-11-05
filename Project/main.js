var container = document.getElementById("container");
var reset = document.getElementById("reset");
var body = document.getElementById("body");
var h3 = document.getElementById("h3");
var buttons = new Array;
var playerturn = true;
var brick = 9;

    function createPlayField(){

        var resetButton =  document.createElement("button");
        var resetNodeText = document.createTextNode("Reset");
        resetButton.appendChild(resetNodeText);
        reset.appendChild(resetButton);
        for(var i = 0; i < 9; i ++){
            var button = document.createElement("button");
            button.style.height="50px";
            button.style.width="50px";
            //var node = document.createTextNode(i);
            //button.appendChild(node);
            container.appendChild(button);
            buttons.push(button);
            buttons[i].addEventListener("click", bindClick(i));
        }
    reset.addEventListener("click", resetBoard);
    }
window.onload = createPlayField();

function resetBoard(){
        for(var i = 0; i < buttons.length; i ++){
            buttons[i].disabled = false;
            buttons[i].style.background="";
            brick = 9;
        }
}
function bindClick(i) {

    return function(){

        if(playerturn){
            buttons[i].disabled = true;
            buttons[i].style.backgroundColor="rgb(255, 125, 2)";
            console.log("Player 1 clicked region number " + i);
            playerturn = false;
            body.style.backgroundColor="#FEFFF8";
            h3.innerText = "Player 2 turn";
        }else {
            buttons[i].disabled = true;
            buttons[i].style.background = "rgb(2, 155, 255)";
            console.log("Player 2 clicked region number " + i);
            playerturn = true;
            body.style.backgroundColor="rgba(2, 255, 255, 0.1)";
            h3.innerText = "Player 1 turn";
        }
        brick --;

        checkIfVictorius();
        checkIfNoEmptyBrick();
    };
}
function checkIfNoEmptyBrick(){
    if(brick === 0){
        alert("End of game");
        resetBoard();
    }
}

function checkIfVictorius(){

    //Does not support winning in a T pattern
        if(buttons[0].style.backgroundColor === "rgb(2, 155, 255)" && buttons[1].style.backgroundColor === "rgb(2, 155, 255)" && buttons[2].style.backgroundColor === "rgb(2, 155, 255)"||
            buttons[0].style.backgroundColor === "rgb(2, 155, 255)" && buttons[3].style.backgroundColor === "rgb(2, 155, 255)" && buttons[6].style.backgroundColor === "rgb(2, 155, 255)"||
            buttons[0].style.backgroundColor === "rgb(2, 155, 255)" && buttons[4].style.backgroundColor === "rgb(2, 155, 255)" && buttons[8].style.backgroundColor === "rgb(2, 155, 255)"||
            buttons[3].style.backgroundColor === "rgb(2, 155, 255)" && buttons[4].style.backgroundColor === "rgb(2, 155, 255)" && buttons[5].style.backgroundColor === "rgb(2, 155, 255)"||
            buttons[6].style.backgroundColor === "rgb(2, 155, 255)" && buttons[7].style.backgroundColor === "rgb(2, 155, 255)" && buttons[8].style.backgroundColor === "rgb(2, 155, 255)"||
            buttons[1].style.backgroundColor === "rgb(2, 155, 255)" && buttons[4].style.backgroundColor === "rgb(2, 155, 255)" && buttons[7].style.backgroundColor === "rgb(2, 155, 255)"||
            buttons[2].style.backgroundColor === "rgb(2, 155, 255)" && buttons[5].style.backgroundColor === "rgb(2, 155, 255)" && buttons[8].style.backgroundColor === "rgb(2, 155, 255)")
        {
            alert("Player 1 wins");
            resetBoard();
        }

    if( buttons[0].style.backgroundColor === "rgb(255, 125, 2)" && buttons[1].style.backgroundColor === "rgb(255, 125, 2)" && buttons[2].style.backgroundColor === "rgb(255, 125, 2)"||
        buttons[0].style.backgroundColor === "rgb(255, 125, 2)" && buttons[3].style.backgroundColor === "rgb(255, 125, 2)" && buttons[6].style.backgroundColor === "rgb(255, 125, 2)"||
        buttons[0].style.backgroundColor === "rgb(255, 125, 2)" && buttons[4].style.backgroundColor === "rgb(255, 125, 2)" && buttons[8].style.backgroundColor === "rgb(255, 125, 2)"||
        buttons[3].style.backgroundColor === "rgb(255, 125, 2)" && buttons[4].style.backgroundColor === "rgb(255, 125, 2)" && buttons[5].style.backgroundColor === "rgb(255, 125, 2)"||
        buttons[6].style.backgroundColor === "rgb(255, 125, 2)" && buttons[7].style.backgroundColor === "rgb(255, 125, 2)" && buttons[8].style.backgroundColor === "rgb(255, 125, 2)"||
        buttons[1].style.backgroundColor === "rgb(255, 125, 2)" && buttons[4].style.backgroundColor === "rgb(255, 125, 2)" && buttons[7].style.backgroundColor === "rgb(255, 125, 2)"||
        buttons[2].style.backgroundColor === "rgb(255, 125, 2)" && buttons[5].style.backgroundColor === "rgb(255, 125, 2)" && buttons[8].style.backgroundColor === "rgb(255, 125, 2)")
    {
        alert("Player 2 wins");
        resetBoard();
    }


}