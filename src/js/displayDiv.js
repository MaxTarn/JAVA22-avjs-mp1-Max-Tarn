//export thing(s) will only be used in script.js

// ---------- DISPLAY RESULT ----------



export const displayDiv = document.createElement("div")
const displayUsrDiv = document.createElement("div")
const displayMiddleDiv = document.createElement("div")
const displayComputerDiv = document.createElement("div")

displayDiv.className = "displayDiv"
displayUsrDiv.className = "displayUsr"
displayMiddleDiv.className = "displayMiddle"
displayComputerDiv.className = "displayComputer"


export const displayUsrH1 = document.createElement("h1")
displayUsrH1.innerText = "You chose: "
displayUsrH1.id = "displayUsrH1"
export const displayUsrImg = document.createElement("img")
displayUsrImg.className = "displayUsrImg"

export const displayMiddleH1 = document.createElement("h1")
export const displayMiddleH3 = document.createElement("h3")

export const displayComputerH1 = document.createElement("h1")
displayComputerH1.innerText = "Computer chose: "
export const displayComputerImg = document.createElement("img")




displayComputerDiv.append(displayComputerH1)
displayComputerDiv.append(displayComputerImg)

displayMiddleDiv.append(displayMiddleH1)
displayMiddleDiv.append(displayMiddleH3)

displayUsrDiv.append(displayUsrH1)
displayUsrDiv.append(displayUsrImg)

displayDiv.append(displayUsrDiv)
displayDiv.append(displayMiddleDiv)
displayDiv.append(displayComputerDiv)


//all content in display is in displayDiv



// ---------- DISPLAY RESULT END ----------

