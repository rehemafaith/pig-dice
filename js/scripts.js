//business logic
function Name (name , names ){
  this.name=name
  this.names=names
}
var result = 0
var score = 0
var currentscore=0
function off(){
  document.getElementById('btn1').disabled=true;
  document.getElementById('btn3').disabled=false;
}
function on(){
  document.getElementById('btn3').disabled=true;
  document.getElementById('btn1').disabled=false;

}

//user logic

$(document).ready(function(event){
  $(".btn").click(function(){
    $(".game").show();
    $(".intro").hide();
    var player1=new Name(this.name=$("input#plyr1").val(),this.names=$("input#plyr2").val());
    var player2=new Name(this.name=$("input#plyr2").val(),this.names=$("input#plyr1").val());

    document.getElementById('namep1').innerHTML = player1.name

    document.getElementById('namep2').innerHTML = player2.name
  })
    $("#btn1").click(function(){

    var player1Dice = Math.floor((Math.random()*6)+1);
    if (player1Dice === 1) {
       currentscore-=currentscore
          document.getElementById('return1').innerHTML = currentscore  ;
          off()
    }
    if (player1Dice > 1){
       currentscore +=player1Dice
      document.getElementById('return1').innerHTML = currentscore
    }


    $("#btn2").click(function(){

        score+=currentscore
        if (score === 100) {
        document.getElementById('return1').innerHTML = "congratulations You have won!Your score is" + score

      }else{
        currentscore=0
        off()
      }
      document.getElementById('return1').innerHTML = score
    })
  });


  })
    $("#btn3").click(function(){

    var player1Dice = Math.floor((Math.random()*6)+1);
    if (player1Dice === 1) {
       currentscore-=currentscore
          document.getElementById('return2').innerHTML = currentscore  ;
          on()
    }
    if (player1Dice > 1){
       currentscore +=player1Dice
      document.getElementById('return2').innerHTML = currentscore
    }


    $("#btn4").click(function(){

        score+=currentscore
        if (score === 100) {
        document.getElementById('return2').innerHTML = "congratulations You have won!Your score is" + score

      }else{
        currentscore=0
        on()
      }
      document.getElementById('return1').innerHTML = score
    })
  });
