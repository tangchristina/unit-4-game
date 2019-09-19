




$(document).ready(function() {

        //** Returns a random integer between min and max ---> Math.floor(Math.random() * (max - min + 1)) + min;

        var targetScore = Math.floor(Math.random() * 102)+19;
        var gemOne = Math.floor(Math.random()*12)+1;
        var gemTwo = Math.floor(Math.random()*12)+1;
        var gemThree = Math.floor(Math.random()*12)+1;
        var gemFour = Math.floor(Math.random()*12)+1;
        var yourScore = 0;
        var winCount = 0;
        var lossCount = 0;
        var score = 0;

        //Getting a handle on our html
        $("#your-score").text(yourScore);
        $("#target-score").text(targetScore);
        $("#loss-count").text(lossCount);
        $("#win-count").text(winCount);
        $("gem-one").text(gemOne);
        $("gem-two").text(gemTwo);
        $("gem-three").text(gemThree);
        $("gem-four").text(gemFour);

        //Reset function, setting your score back to zero after winning or losing.
        function reset () {
        targetScore = Math.floor(Math.random() * 102)+19;
        gemOne = Math.floor(Math.random()*12)+1;
        gemTwo = Math.floor(Math.random()*12)+1;
        gemThree = Math.floor(Math.random()*12)+1;
        gemFour = Math.floor(Math.random()*12)+1;
        score = 0;
        }

        //If then statements
        if (yourScore > targetScore) {
            lossCount++;
            alert("Sorry you lost!");
            reset();
           
        }

    

        if (yourScore===targetScore) {
            winCount++;
            alert("Nice work, you won!");
            reset();
        }

        //Jquery click events

        $("#gem-one").on("click"); {
            yourScore = gemOne + score;
        }

        $("#gem-two").on("click"); {
            yourScore = gemTwo + score;
        }

        $("#gem-three").on("click"); {
            yourScore = gemThree + score;
        }

        $("#gem-four").on("click"); {
            yourScore = gemFour + score;
        }

        
    
    
        
    


    

    

    
});