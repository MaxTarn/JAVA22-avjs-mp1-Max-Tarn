//relative location of the imgs used
const arrOfImgLocation = [ 
    "media/rock.png",  
    "media/paper.png",  
    "media/scissor.png",  
    "media/lizard.png",  
    "media/spock.png"  
    ] 


    
let printThisWhenTied = "" 


/* object that contains all the diffret strings that correlate to what usr and computer has chosen 

if usrChosenOption = paper   and   computerChosenOption = rock 
optionCorelation[usrChosenOption][computerChosenOption].outcome         will be "win" 
optionCorelation[usrChosenOption][computerChosenOption].explanation     will be "Paper covers rock" 

objects in optionCorelation is named the same as the diffrent values of the buttons */
export const optionCorelation = { 
    rock:{ 
        location: arrOfImgLocation[0], 
        rock:{ 
            outcome: "tie", 
            explanation: printThisWhenTied 
        }, 
        paper: { 
            outcome: "loss", 
            explanation: "Paper covers rock" 
        }, 
        scissor: { 
            outcome: "win", 
            explanation: "Rock Crushes scissors" 
        }, 
        lizard: { 
            outcome: "win", 
            explanation: "Rock Crushes lizard" 
        }, 
        spock: { 
            outcome: "loss", 
            explanation: "Spock vaporizes rock" 
        } 
    }, 
    paper:{ 
        location: arrOfImgLocation[1], 
        rock:{ 
            outcome: "win", 
            explanation: "Paper covers rock" 
        }, 
        paper: { 
            outcome: "tie", 
            explanation: printThisWhenTied 
        }, 
        scissor: { 
            outcome: "loss", 
            explanation: "Scissor cuts paper" 
        }, 
        lizard: { 
            outcome: "loss", 
            explanation: "Lizard eats paper" 
        }, 
        spock: { 
            outcome: "win", 
            explanation: "Paper disproves Spock" 
        } 
    }, 
    scissor:{ 
        location:arrOfImgLocation[2], 
        rock:{ 
            outcome: "loss", 
            explanation: "Rock crushes scissors" 
        }, 
        paper: { 
            outcome: "win", 
            explanation: "Scissors cuts paper" 
        }, 
        scissor: { 
            outcome: "tie", 
            explanation: printThisWhenTied 
        }, 
        lizard: { 
            outcome: "win", 
            explanation: "Scissors decapitates lizard" 
        }, 
        spock: { 
            outcome: "loss", 
            explanation: "Spock smashes scissors" 
        } 
    },  
    lizard:{ 
        location: arrOfImgLocation[3], 
        rock:{ 
            outcome: "loss", 
            explanation: "Rock crushes lizard" 
        }, 
        paper: { 
            outcome: "win", 
            explanation: "Lizard eats paper" 
        }, 
        scissor: { 
            outcome: "loss", 
            explanation: "Scissors decapitates lizard" 
        }, 
        lizard: { 
            outcome: "tie", 
            explanation: printThisWhenTied 
        }, 
        spock: { 
            outcome: "win", 
            explanation: "Lizard poisons Spock" 
        } 
    }, 
    spock:{ 
        location: arrOfImgLocation[4], 
        rock:{ 
            outcome: "win", 
            explanation: "Spock vaporizes rock" 
        }, 
        paper: { 
            outcome: "loss", 
            explanation: "Paper disproves Spock" 
        }, 
        scissor: { 
            outcome: "win", 
            explanation: "Spock smashes scissors" 
        }, 
        lizard: { 
            outcome: "loss", 
            explanation: "Lizard poisons Spock" 
        }, 
        spock: { 
            outcome: "tie", 
            explanation: printThisWhenTied 
        } 
    } 
} 
 