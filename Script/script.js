$(document).ready(function(){

/*alert("Javascript works!")

$("button").on("click",function(){
  alert("Thanks for liking us. This will keep us motivated!")
  });
*/

$('div').click(function(){
  $(this).toggleClass('show-description');
  });

$(".flash-button").click(function(){
  $(".brain").toggleClass("laser");

  });
$(".color").click(function(){
  var red = Math.floor(Math.random()* 255);
  var green = Math.floor(Math.random()* 255);
  var blue = Math.floor(Math.random()* 255);

  var randomRGBA = "rgba("+ red +","+ green +","+ blue + ",1)"
  $(".disco-page").css("background",randomRGBA);

});
//I created an array using javascript
var my_array = [
  "What is your financial concern? In one word",
  "How old are you?",
  "What is your contact number?",
  "How much money do you want to earn?"
];

var answers= [];
// I assigned currentprompt a number of 0 so that when the
// nextprompt fuction is called on it will add 1 to currentprompt
// every time the button is clicked. displaying all parts of the array
var currentPrompt = 0;
//we created the if statement in the account to organize it better 
//when someone clicks the button and it runs out of items in the arraywe should have another message
// we use the .length feature to compare with the prompts variable.

var nextPrompt = function(){ 
  if(currentPrompt != 0) {
    answers.push($("input").val()); 
  };
if (currentPrompt < my_array.length){
    $(".prompt").html(my_array[currentPrompt] + "<br> <input type='text' placeholder='answer'>");
    currentPrompt = currentPrompt + 1
}else{
  showFinal();
}
};

// jquery function using the click on the button it will run the nextprompt above
$("button").click(function(){
  nextPrompt();

});
//this will show my entire phrase with completed entries in the html page. the prompt vid will display that information.
var showFinal = function(){
  $(".prompt").html("My financial concern is <span class='fill'> "+ answers[0]+"</span>."+" I am <span class='fill'> "+ answers[1] +" </span> years old." + " My number is <span class='fill'> "+ answers[2] + " </span> and I want to earn <span class='fill'> "+ answers[3] + " </span>");
};

// this makes the firs item in the array to display as soon as the js fininishes
nextPrompt();s

});

