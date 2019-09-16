$(document).ready(function() {
    var targetScore = 0;
    var yourScore = 0;
    var gemOne = 0;
    var gemTwo = 0;
    var gemThree = 0;
    var gemFour = 0;
    var winCount = 0;
    var lossCount = 0;
    var isNumberOver = false;


    function initializeGame () {
    //** Returns a random integer between min and max ---> Math.floor(Math.random() * (max - min + 1)) + min;
        targetScore = Math.floor(Math.rand()*102)+19;
        gemOne = Math.floor(Math.rand()*12)+1;
        gemTwo = Math.floor(Math.rand()*12)+1;
        gemThree = Math.floor(Math.rand()*12)+1;
        gemFour = Math.floor(Math.rand()*12)+1;
    }
});