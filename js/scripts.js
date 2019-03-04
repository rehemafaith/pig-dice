//user logic

result = 0
score = 0

$(document).ready(function(){
  $("#btn1").click(function(){
    var player1Dice = Math.floor((Math.random()*6)+1);
    if (player1Dice > 1){
      result+=player1Dice
      document.getElementById('namep1').innerHTML = result
    }
    else if (player1Dice === 1) {
          document.getElementById('namep1').innerHTML = player1Dice -= result;
    }
    if (result === 100) {
      score+=result
      document.getElementById('namep1').innerHTML = score

    }
   $("#btn2").click(function(){

   })
  });
  $("#btn3").click(function(){
    var player1Dice = Math.floor((Math.random()*7)+1);
    if (player1Dice == 1) {
      document.getElementById('namep2').innerHTML = 0
    }


  });
 //$("#btn1").click(function(){
  //  document.getElementById('btn3').disabled = true
  //  document.getElementById('btn1').disabled = false
//  $("#btn2").click(function(){
  //  document.getElementById('btn1').diabled = true

  })
