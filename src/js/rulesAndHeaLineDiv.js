//export thing(s) will only be used in script.js

export const RulesAndHeadLineDiv = document.createElement("div")

// ---------- RULES OF THE GAME ----------

RulesAndHeadLineDiv.className = "RulesAndHeadLineDiv"


const HeadLineH1 = document.createElement("h1")
HeadLineH1.className = "headLine"
HeadLineH1.innerText = "Rules of the game:"


const GameRulesImg = document.createElement("img")
GameRulesImg.src = "media/RockPaperScissorsLizardSpock.jpg"
GameRulesImg.alt = "diagrm of rock paper scissor lizard spock"
GameRulesImg.id = "gameRulesImg"


RulesAndHeadLineDiv.append(HeadLineH1)
RulesAndHeadLineDiv.append(GameRulesImg)

//Headline, and picture of the rules are in RulesAndHeadLineDiv

// ---------- RULES OF THE GAME END----------

