var player1=new Player("Alex", "X");
var player2=new Player("Bob", "O");
var turnKeeper=1;

function Player (name, symbol){
  this.name=name;
  this.symbol=symbol;
}

$(document).ready(function() {
  $(".cell").click(function(){
    cellId=".cell#" + $(this).attr("id");
    console.log(cellId);

    if (turnKeeper%2===0){
      $(this).append(player2.symbol);
      turnKeeper++;
    } else {
      $(this).append(player1.symbol);
      turnKeeper++;
    }
  });
});
