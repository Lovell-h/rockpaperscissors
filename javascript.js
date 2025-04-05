let humanscore=0; /*ongoing player score */
let computerscore=0;/*ongoing computer score*/
let catscore=0; /*ongoing tie score */
let rounds=0; /*current round number*/

function reload(){location.reload();} /*restart the game*/

/*main function to play the game*/
function playround()
{
    if (rounds>=5)
        {
            alert("completed 5 rounds to play again please press reset");
        }else {
            
            rounds++;
            let comp = getcomputerchoice();
            let user= getuserchoice(); 
            let winner=getresults(comp, user);
            let resultsmsg= "Round "+ rounds + "  of 5 results: <br>Human Choice: "
            resultsmsg=resultsmsg + user + "<br>Computer Choice: " + comp ;
            resultsmsg=resultsmsg + " <br>Outcome: " + winner;
            if(rounds==5)
                {
                    resultsmsg=resultsmsg + " <br> FINAL SCORE: Human: " +humanscore;
                }else
                {
                    resultsmsg=resultsmsg + " <br> Game Scores: Human: " +humanscore;
                }
            resultsmsg=resultsmsg + " Computer: " +computerscore;
            resultsmsg=resultsmsg + " Ties: " +catscore;
                        
            /*console.log (resultsmsg);*/
            let x = "results["+rounds+"]";
            /*console.log(x);*/
            document.getElementById(x).innerHTML=resultsmsg;
            if(rounds==5)
                {
                    /*console.log("made it here");*/
                    fscore="Final Outcome: ";
                if(humanscore>computerscore){
                    fscore= fscore + "Human wins...this time";
                }else if(humanscore<computerscore) {
                    fscore= fscore+ "Computer is victorious!";
                }else{
                    fscore= fscore+ "Tie game";
                }
                fscore= fscore + "<a href='.'> Play Again?</a>";
                document.getElementById("final").innerHTML=fscore;
            }
            
            
        }
}

/* randomly choose rock, paper or scisor returns "compchoice" */
function getcomputerchoice()
{
    let myselection=Math.floor(Math.random() * 3) + 1;  
    if(myselection==1)
        {
            compchoice="rock";
        } else if (myselection==2)
            {
                compchoice="paper";
            }
            else
            {
                compchoice="scissors";
            }
    return(compchoice);
}
/*get user input returns "userchoice" */
function getuserchoice()
{
    let ele = document.getElementsByName('user-choice');
    for(i=0;i<ele.length; i++)
        {
        if(ele[i].checked) selectedOption=ele[i].value; 
    }
        if(selectedOption==1)
            {
            userchoice="rock";
        } else if (selectedOption==2)
            {
                userchoice="paper";
            }
            else if (selectedOption==3)
            {
                userchoice="scissors";
            }
            
    return(userchoice);
}
/*determine the winner */
function getresults(comp2, user2){
    /*console.log("computer:" + comp2 + " user: " +user2);*/
    if(user2==comp2)
    {
        catscore++;
        return("Tie Game");
    } else if (user2=="rock")
        {
            if(comp2=="paper")
            {
                computerscore++;
                return("Computer wins");
            } else 
            {
                humanscore++;
                return ("Human wins");
            }
    } else if (user2=="paper")
        {
            if(comp2=="scissors")
            {
                computerscore++;
                return("Computer wins");
            } else 
            {
                humanscore++;
                return ("Human wins");
            }
        } else 
            {
                if(comp2=="rock")
                {
                    computerscore++;
                    return("Computer wins");
                } else 
                {
                    humanscore++;
                    return ("Human wins");
                }
            }
}