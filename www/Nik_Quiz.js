function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;


var correct = 0;



if(question1== "3"){
  correct++;
}

if(question2== "1"){
  correct++;
}

if(question3== "4"){
  correct++;
}

if(question4== "2"){
  correct++;
}

if(question5== "2"){
  correct++;
}
if(question6== "2"){
  correct++;
}

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct answers";

  alert("You got "+correct+" answers..!!");

}

function check1(){

var question1 = document.quiz1.question1.value;
var question2 = document.quiz1.question2.value;
var question3 = document.quiz1.question3.value;
var question4 = document.quiz1.question4.value;
var question5 = document.quiz1.question5.value;
var question6 = document.quiz1.question6.value;
var question7 = document.quiz1.question7.value;
var question8 = document.quiz1.question8.value;
var question9 = document.quiz1.question9.value;
var question10 = document.quiz1.question10.value;

var correct = 0;



if(question1== "2"){
  correct++;
}

if(question2== "4"){
  correct++;
}

if(question3== "4"){
  correct++;
}

if(question4== "2"){
  correct++;
}

if(question5== "3"){
  correct++;
}

if(question6== "1"){
  correct++;
}

if(question7== "4"){
  correct++;
}

if(question8== "1"){
  correct++;
}

if(question9== "2"){
  correct++;
}

if(question10== "1"){
  correct++;
}

  document.getElementById("after_submit1").style.visibility = "visible";
  document.getElementById("number_correct1").innerHTML = "You got " + correct + " correct answers";


    alert("You got "+correct+" answers..!!");
}
