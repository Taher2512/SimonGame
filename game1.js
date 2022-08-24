var level = 0;

var gamePattern = [];

var userClickedPattern =[];

var started = false;

var i = 0;

var buttonColours = ["red", "yellow", "blue", "green"];

$(document).keypress(function() {
    if(!started) {

        gameSequence();
 
        started = true;
    }      
})
 
$(".btn").click(function() {
    
    var userChosenColour = $(this).attr("id")
    
    userClickedPattern.push(userChosenColour)
    $("#" + userChosenColour).fadeOut(100).fadeIn(100);

    if(userClickedPattern[i] !== gamePattern[i]) {
        $("#level-title").text("Game Over. Press Any Key To Restart.");
        started = false;
        i=0;
        level=0;
        userClickedPattern =[];
        gamePattern = [];
    }

    i++;

    if(i-1 === gamePattern.length - 1){
        setTimeout(function(){
            gameSequence();
        }, 500); 
    }

})

function gameSequence() {

    i=0;

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);

    var gameChosenColour = buttonColours[randomNumber];

    $("#" + gameChosenColour).fadeOut(100).fadeIn(100);

    gamePattern.push(gameChosenColour);

    playsound(gameChosenColour)
    
    
}

function playsound(name) {

    var sound = new Audio(`sounds/${name}.mp3`)
    sound.play();

}
