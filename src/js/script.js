
//--------------- IMPORTS ---------------

import{ 
    navbarHeader 
}from "./header.js" 

import{
    optionCorelation
} from "./optionCorelation.js"
 
import{ 
    getUsrNameForm, 
    getUsrNameInput, 
    getUsrNameButton 
}from "./getUsrNameForm.js" 
 
import{ 
    RulesAndHeadLineDiv 
} from "./rulesAndHeaLineDiv.js" 
 
import{ 
    buttonsDiv,  
    buttonsForm 
}from "./buttonsDiv.js" 
 
import{ 
    displayDiv, 
    displayUsrImg, 
    displayMiddleH1, 
    displayMiddleH3, 
    displayComputerImg, 
    displayUsrH1, 
    displayComputerH1 
}from "./displayDiv.js" 

import{
    highScoreDiv,
    updateHighScore,
}from './highScore.js'

import{
    putScores,
    resetScores
}from "./firebase.js"
 

//------------- IMPORTS END -------------




//variables that will be show in the navbar 
let usrName = "" 
let wins = 0 
let round = 0 
 
//used to store what the user has chosen as their weapon 
let usrChosenOption = "" 
 
//used to store what the computer has chosen as their weapon 
let computerChosenOption = "" ;



//---------- EVENTLISTENERS ---------- 
 
//adds getUsrNameForm to DOM 
document.body.append(getUsrNameForm) 

//activates when getUsrNameForm is submitted
getUsrNameButton.addEventListener("click" , (event) => { 
 
    //stops site from reloading 
    event.preventDefault() 
 
    //gets the users Name, from the input tag, and sets usrName  
    usrName = getUsrNameInput.value 
 
    //removes the getUsrNameForm form from DOM 
    getUsrNameForm.remove() 
 
    //adds the navbar 
    document.body.append(navbarHeader) 

    //adds the rules 
    document.body.append(RulesAndHeadLineDiv) 
 
    //adds the buttons 
    document.body.append(buttonsDiv) 

    //adds the usrName to the navbar 
    document.querySelector(".navUsrName").innerText += usrName 
     
}) 
 
//activates when one of the five buttons is clicked in the form 
buttonsForm.addEventListener("submit", (event) => { 
 
    //no reloading the page 
    event.preventDefault() 
 
    //gets the highScoreDiv from DOM
    const highScoreDivInDOM = document.querySelector('#high-score-div')

    //checks if highScoreDiv has alredy been added to the DOM
    if(highScoreDivInDOM !== null){

        //adds the high score table to the DOM
        document.body.append(highScoreDiv)

    }
    //adds the high score table to the DOM
    document.body.append(highScoreDiv)

    //fetches and updates the scores in highScoreDiv
    updateHighScore()

    //removes RulesAndHeadLineDiv from the DOM 
    RulesAndHeadLineDiv.remove() 
 
    //variable that is visible in the navbar 
    round++ 
 
    //when form is submitted this gets the value of the button pressed 
    usrChosenOption = event.submitter.value  
 
    //randomly chooses a option for computer
    computerChosenOption = randomOption() 

    //logs the value of the button pressed 
    console.log(`Users Chosen option is = ${usrChosenOption}`) 
     
    //changes the displayUsrImg src 
    displayUsrImg.src = optionCorelation[usrChosenOption].location 
 
    //changes the displayComputerImg src 
    displayComputerImg.src = optionCorelation[computerChosenOption].location 

    //changes the displayMidde 
    displayMiddleH3.innerText = optionCorelation[usrChosenOption][computerChosenOption].explanation 
 
    //contains the outcome, either "win", "loss", or "tie". should never be anything else
    let outCome = optionCorelation[usrChosenOption][computerChosenOption].outcome

    //if usr has lost 
    if(outCome == "loss"){ 
        displayMiddleH1.innerText = "LOSER!" 
        displayComputerH1.style.color = "green"         
        displayUsrH1.style.color = "red" 

        //sends the acheived score to the database if it is more than the lowest highscore
        sendScores(wins, usrName)

        //resets the game variables
        wins = 0
        round = 0


        //if usr has won 
    }else if(outCome == "win"){ 
        displayMiddleH1.innerText = "WINNER!" 
        displayUsrH1.style.color = "green" 
        displayComputerH1.style.color = "red" 
        wins++ 

    
        //if usr is tied with computer 
    }else if(outCome == "tie"){ 
        displayMiddleH1.innerText = "TIE!" 
        displayUsrH1.style.color = "black" 
        displayComputerH1.style.color = "black"
        
        //sends the acheived score to the database if it is more than the lowest highscore
        sendScores(wins, usrName)

        //resets the game variables
        wins = 0
        round = 0
    } 
     
    //updates the variables in the navbar 
    updateNavBar(usrName, wins,round) 
 
    
    //adds the displayDiv to DOM 
    document.body.prepend(displayDiv) 
    
    //updates the shown scores
    
    
}) 

//when clicked resets all points to 0
highScoreDiv.querySelector("#reset-scores").addEventListener(('click'), event =>{

    //sends negative scores to the database, when scores have been sent, the score board is updated
    resetScores().then((response)=>{
        updateHighScore()
    })


})


 
 
//---------- EVENTLISTENER END---------- 
 
 
 
 
 
 
//---------------------------------------- ONLY FUNCTIONS BELOW THIS----------------------------------------- 

//sends the acheived score to the database, 
//if the acheived is lower than the lowest score in the database => nothing happens
function sendScores(wins, usrName){

    //a post that could be added to the database
    const newScore =  {
        score : wins,
        userName : usrName
    }

    //if the score is bigger than the smallest score, it adds newScore to the database
    putScores(newScore).then(()=>{
        updateHighScore()
    })
}

//returns one of the five options as a string, randomized 
function randomOption(){ 
    let ranValue = getRandomValueBetween(1,5) 
    switch(ranValue){ 
        case 1: 
            return "rock" 
 
        case 2: 
            return "paper" 
 
        case 3: 
            return "scissor" 
 
        case 4: 
            return "lizard" 
 
        case 5: 
            return "spock" 
             
 
        default: 
            console.log("Something is hella wrong if you see this") 
            break; 
       
    } 
} 
 
//updates the variables show in the navbar 
function updateNavBar(usrName, wins, round){ 
    document.querySelector(".navUsrName").innerText = `UserName: ${usrName}` 
    document.querySelector(".navWins").innerText = `Wins: ${wins}`  
    document.querySelector(".navRound").innerText = `Round: ${round}` 
} 
 
 
//transforms variables into querystring 
function buildQuery (dataName, data) { 
    let objectOfData = { 
        [dataName] : data 
    } 
	return new URLSearchParams(objectOfData).toString(); 
} 
 
 
//returns random integer between, including, minimumValue and maximumValue 
//minimumValue <= retrunValue >= maximumValue 
function getRandomValueBetween(minimumValue, maximumValue){ 
    let retrunValue = Math.floor(Math.random() * (maximumValue - minimumValue +1)) + minimumValue 
    return retrunValue 
} 
 
 
//gets value from querystring 
function getParameterByName(name, url = window.location.href) { 
    name = name.replace(/[\[\]]/g, '\\$&'); 
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), 
        results = regex.exec(url); 
    if (!results) return null; 
    if (!results[2]) return ''; 
    return decodeURIComponent(results[2].replace(/\+/g, ' ')); 
} 