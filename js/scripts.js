var player1=new Player("Alex", "X");
var player2=new Player("Bob", "O");
var turnKeeper=1;

var spaces=[];

function setSpaces(){
  for (i=0; i<=8; i++){
    spaces[i]=new Space("No","");
  }
}

function Player (name, symbol){
  this.name=name;
  this.symbol=symbol;
}

function Space (marked, symbol){
  this.marked=marked;
  this.symbol=symbol;
}

function checkWin(){
  if (spaces[0].symbol==="X"&&spaces[1].symbol==="X"&&spaces[2].symbol==="X"){
    $("#winHeader").append("Player 1 wins");
  }
  else if (spaces[0].symbol==="O"&&spaces[1].symbol==="O"&&spaces[2].symbol==="O"){
    $("#winHeader").append("Player 2 wins");
  }


}


$(document).ready(function() {
  setSpaces();

  $(".cell").click(function(){
    cellId=$(this).attr("id");
    //console.log(cellId);
    if (spaces[cellId].marked==="No"){
      if (turnKeeper%2===0){
        $(this).append(player2.symbol);
        spaces[cellId].marked="Yes";
        spaces[cellId].symbol=player2.symbol;
        turnKeeper++;
        checkWin();
        console.log(spaces[0].symbol);
      } else {
        $(this).append(player1.symbol);
        turnKeeper++;
        spaces[cellId].marked="Yes";
        spaces[cellId].symbol=player1.symbol;
        checkWin();
      }
    }
    else {}
  });
});
