//export thing(s) will only be used in script.js

export const buttonsDiv = document.createElement("div")


// ---------- BUTTONS ----------


buttonsDiv.id = "buttonsDiv"

export const buttonsForm = document.createElement("form")
buttonsForm.className = "buttonsForm"

const HeadLineH3 = document.createElement("h3")
HeadLineH3.className = "headLine"
HeadLineH3.innerText = "Choose your weapon:"


//CREATING THE BUTTONS
const RockButton = document.createElement("button")
RockButton.className = "optionBtn"
RockButton.name = "chosenOption"
RockButton.value = "rock"
const RockImg = document.createElement("img")
RockImg.className = "optionImg"
RockImg.src = "media/rock.png"


const PaperButton = document.createElement("button")
PaperButton.className = "optionBtn"
PaperButton.name = "chosenOption"
PaperButton.value = "paper"
const PaperImg = document.createElement("img")
PaperImg.className = "optionImg"
PaperImg.src = "media/paper.png"


const ScissorButton = document.createElement("button")
ScissorButton.className = "optionBtn"
ScissorButton.name = "chosenOption"
ScissorButton.value = "scissor"
const ScissorImg = document.createElement("img")
ScissorImg.className = "optionImg"
ScissorImg.src = "media/scissor.png"


const LizardButton = document.createElement("button")
LizardButton.className = "optionBtn"
LizardButton.name = "chosenOption"
LizardButton.value = "lizard"
const LizardImg = document.createElement("img")
LizardImg.className = "optionImg"
LizardImg.src = "media/lizard.png"


const SpockButton = document.createElement("button")
SpockButton.className = "optionBtn"
SpockButton.name = "chosenOption"
SpockButton.value = "spock"
const SpockImg = document.createElement("img")
SpockImg.className = "optionImg"
SpockImg.src = "media/spock.png"

//CREATING THE BUTTONS END


//add the imgs to the corresponding buttons
SpockButton.append(SpockImg)
LizardButton.append(LizardImg)
ScissorButton.append(ScissorImg)
PaperButton.append(PaperImg)
RockButton.append(RockImg)

//adds buttons to the form
buttonsForm.append(RockButton)
buttonsForm.append(PaperButton)
buttonsForm.append(ScissorButton)
buttonsForm.append(LizardButton)
buttonsForm.append(SpockButton)

//adds the headline, and the div containing the buttons to the buttonsDiv
buttonsDiv.append(HeadLineH3)
buttonsDiv.append(buttonsForm)


//entire form is in buttonsDiv

// ---------- BUTTONS END ----------

