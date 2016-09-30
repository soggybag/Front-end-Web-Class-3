console.log("Hello world from main.js!");
for (var i = 0 ; i < 100; i+= 1.1) {
    console.log(i + " / 0.1 = " + i/0.1);
}


// Simple Timer
var timer;
var elapsedSeconds = 0;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        elapsedSeconds ++;
        console.log(elapsedSeconds + " secs");
        document.getElementById("time").innerHTML = elapsedSeconds + " secs";
    }, 1000);
}

startTimer();

document.getElementById("timer-button").addEventListener("click", function(event){
    console.log("Click!");
    clearInterval(timer);
});

/*
    Timer Challenges:
    1) Change the text of the button to Pause when the timer is run and Start when the timer is paused
    2) Display 1/10secs, mins, hours
    3)
*/

// Mini Tip Calculator

function getTip(amount, tip) {
    return amount * tip / 100;
}

document.getElementById("calculate-tip").addEventListener("click", function() {
    var tip = document.getElementById("tip").value;
    console.log(typeof tip);
    var amount = document.getElementById("total").value;
    var tipAmount = getTip(amount, tip);
    document.getElementById("your-tip").innerHTML = tipAmount
});



/*
    Mini Tip Calculator Challenges
    1) Split the bill
    2)
*/



/* Drawer example - Hide and show class */
document.getElementById("drawer-title").addEventListener("click", function(){

  console.log(document.getElementById("drawer").classList.contains("hide"));

  if (document.getElementById("drawer").classList.contains("hide")) {
    document.getElementById("drawer").classList.remove("hide");
  } else {
    document.getElementById("drawer").classList.add("hide");
  }
});

/* Fruit Selector */
document.getElementById("fruit-select").addEventListener("change", function(){
  var fruitId = document.getElementById("fruit-select").value;
  var fruits = ["apple", "banana", "cantaloupe"];
  console.log(fruitId);

  for (i in fruits) {
    console.log(fruits[i]);
    document.getElementById(fruits[i]).classList.remove("show");
  }

  document.getElementById(fruitId).classList.add("show");
});




/* Boxes fade */














