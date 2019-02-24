// This code will run as soon as the page loads
 var win = 0;
  var lose = 0;
  var unanswer = 3;
window.onload = function() {
    // $("#lap").on("click", recordLap);
    // $("#stop").on("click", stop);
    // $("#reset").on("click", reset);
    $("#start").on("click", start);
    $("#questions").hide();
    $(".result").hide()
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  var time = 10;
  
  function reset() {
  
    time = 120;
  
    // DONE: Change the "display" div to "00:00."
    $("#display").text("02:00");
  
    // DONE: Empty the "laps" div.
    $("#laps").text("");
  }
  function start() {
  
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
      $("#start").hide();
      $("#display").show();
      $("#questions").show();
      
    }
  }
  function stop() {
  
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }
  function recordLap() {
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
  
    // DONE: Add the current lap and time to the "laps" div.
    $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
  
    // DONE: Increment lap by 1. Remember, we can't use "this" here.
    lap++;
  }
  function count() {
  
    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text("Time Remaining " + converted);
    if(converted === "00:00"){
      stop();
      $(".result").show()
      $("#result").html("You have " + win + " correct answers")
      $("#result2").html("You have " + lose + " incorrect answers")
      $("#result3").html("You have " + unanswer + " unanswered")
      $("#questions").hide();
    }
  }
  function timeConverter(t) {
  
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
  
 

  $(".rad").on("click",function(){
    console.log($(this).val())
    if($(this).val() === "correct"){
     win++;
     unanswer--; 
    }else if($(this).val() === "loser"){
      lose++;
      unanswer--;

    }

  });
  $("#done").on("click",function(){
    stop();
    $(".result").show()
    $("#result").html("You have " + win + " correct answers")
    $("#result2").html("You have " + lose + " incorrect answers")
    $("#result3").html("You have " + unanswer + " unanswered")
    $("#questions").hide();
  });

