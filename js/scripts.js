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


$(document).ready(function() {
  setSpaces();

  $(".cell").click(function(){
    cellId=$(this).attr("id");
    if (spaces[cellId].marked==="No"){
      if (turnKeeper%2===0){
        $(this).append(player2.symbol);
        spaces[cellId].marked="Yes";
        spaces[cellId].symbol=this.symbol;
        turnKeeper++;
      } else {
        $(this).append(player1.symbol);
        turnKeeper++;
        spaces[cellId].marked="Yes";
        spaces[cellId].symbol=this.symbol;
      }
    }
    else {}
  });
});
