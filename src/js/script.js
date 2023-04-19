//imports the constants that are used in script.js

//TODO ask teacher on how to use search paths so they work
//TODO ask teacher to explain async await fetch
//TODO ask if scoreboard can have negatie numbers, instead of being empty


//Användaren ska välja sten, sax, eller påse genom att klicka på ett val.
//rock paper lizard spock


//I firebase ska det finnas en lista på topp 5 scores
//kan alla scores finnas där, och man visar bara de fem högsta?





// topzzz lid


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
    highScoreDiv
}from './highScore.js'

import{
    fetchAndSortScores
}from "./firebase.js"
 

let scores = await fetchAndSortScores()
console.log("sorted scores:")
console.log(scores);




//variables that will be show in the navbar 
let usrName = "" 
let wins = 0 
let losses = 0 
let ties = 0 
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

    document.body.append(highScoreDiv)

 
    //adds the usrName to the navbar 
    document.querySelector(".navUsrName").innerText += usrName 
     
}) 
 
//activates when one of the five buttons is clicked in the form 
buttonsForm.addEventListener("submit", (event) => { 
 
    //no reloading the page 
    event.preventDefault() 
 
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
     

    //need to have switch here with
    const urlForScissors = new URL("media/scissor.png",  import.meta.url)


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
        losses++ 
 
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
        ties++ 
    } 
     
    //checks if usr has won or lost three times 
   /*  if(wins == 3 || losses == 3){ 
        if(wins == 3){ 
            window.alert("WINNER WINNER CHICKEN DINNER!!!") 
        }else{ 
            window.alert("HAHA!! LOSER! LOOOOOOOSER!!") 
        } 
        displayMiddleH1.innerText = "To keep playing: choose your weapon" 
        displayMiddleH3.innerText = "" 
         
        //resets the variables in the navbar 
        wins = 0 
        losses = 0 
        ties = 0 
        round = 0 
    }  */
 
    //updates the variables in the navbar 
    updateNavBar(usrName, wins, losses, ties, round) 
 
    //adds the displayDiv to DOM 
    document.body.prepend(displayDiv) 
}) 
 
 
 
//---------- EVENTLISTENER END---------- 
 
 
 
 
 
 
//---------------------------------------- ONLY FUNCTIONS BELOW THIS----------------------------------------- 
 
 
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
function updateNavBar(usrName, wins, losses, ties, round){ 
    document.querySelector(".navUsrName").innerText = `UserName: ${usrName}` 
    document.querySelector(".navWins").innerText = `Wins: ${wins}` 
    document.querySelector(".navLosses").innerText = `Losses: ${losses}` 
    document.querySelector(".navTies").innerText = `Ties: ${ties}` 
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