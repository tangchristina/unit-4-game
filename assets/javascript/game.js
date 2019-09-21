




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
    

        //Getting a handle on our html
        $("#your-score").text(yourScore);
        $("#target-score").text(targetScore);
        $("#loss-count").text(lossCount);
        $("#win-count").text(winCount);
        
       

        //Reset function, setting your score back to zero after winning or losing.
        function reset () {
        targetScore = Math.floor(Math.random() * 102)+19;
        gemOne = Math.floor(Math.random()*12)+1;
        gemTwo = Math.floor(Math.random()*12)+1;
        gemThree = Math.floor(Math.random()*12)+1;
        gemFour = Math.floor(Math.random()*12)+1;
        
        $("#loss-count").text(lossCount);
        $("#win-count").text(winCount);
        yourScore = 0;
        $("#your-score").text(yourScore);
        $("#target-score").text(targetScore);
        }

        if (yourScore===targetScore) {
            winCount++;
        alert("Nice work, you won!");
        reset();
        } else if (yourScore > targetScore) {
        lossCount++;
        alert("Sorry you lost!");
        reset();
        }   

        //Jquery click events
        
        $("#gem-one").on("click", function() {
            yourScore = gemOne + yourScore;
            $("#your-score").text(yourScore);

            if (yourScore > targetScore) {
                lossCount++;
                alert("Sorry you lost!");
                reset();
                }

            if (yourScore==targetScore) {
                winCount++;
            alert("Nice work, you won!");
            reset();
            } 
            
            
            
            
        })

        $("#gem-two").on("click", function() {
            yourScore = gemTwo + yourScore;
            $("#your-score").text(yourScore);
            
            if (yourScore==targetScore) {
                winCount++;
            alert("Nice work, you won!");
            reset();
            }
            if (yourScore > targetScore) {
            lossCount++;
            alert("Sorry you lost!");
            reset();
            }
            
        })

        $("#gem-three").on("click", function () {
            yourScore = gemThree + yourScore;
            $("#your-score").text(yourScore);
            
            if (yourScore==targetScore) {
                winCount++;
            alert("Nice work, you won!");
            reset();
            } 
            if (yourScore > targetScore) {
                lossCount++;
                alert("Sorry you lost!");
                reset();
            }
            
        })

        $("#gem-four").on("click", function() {
            yourScore = gemFour + yourScore;
            $("#your-score").text(yourScore);
            
            if (yourScore==targetScore) {
                winCount++;
            alert("Nice work, you won!");
            reset();
            }
            if (yourScore>targetScore) {
                lossCount++;
            alert("Sorry you lost!");
            reset();
            }
      
        })

        console.log(gemOne);
        console.log(gemTwo);
        console.log(gemThree);
        console.log(gemFour);
        console.log(yourScore);
        

        
    
    
        
    


    

    

    
});