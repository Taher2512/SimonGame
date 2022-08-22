var userClickedPattern = []

var gamePattern = []

var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

$(document).keypress(function() {
    if(!started) {
        $("#level-title").text("Level " + level)

        started = true;
    }
})

$(".btn").click(function (e) {
    var userChosenColour = $(e).attr("id")

    checkAnswer(level)

    nextSequence()

    userClickedPattern.push(userChosenColour)
})

function nextSequence() {

    level++

    $("#level-title").text("Level " + level)

    var randomNumber = Math.floor(Math.random() * 4)

    var randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playsound(randomChosenColour);
}

function playsound(name) {

    var sound = new Audio(`sounds/${name}.mp3`)
    sound.play();

}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success")
    } else {console.log("fail")}
}



