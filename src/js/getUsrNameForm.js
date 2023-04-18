//export thing(s) will only be used in script.js

export const getUsrNameForm = document.createElement("form")

//---------- GET USR NAME FORM ----------


// getUsrNameForm.method = "get"
// getUsrNameForm.action = "?"
getUsrNameForm.id = "getUsrNameForm"

const getUsrNameH2 = document.createElement("h2")
getUsrNameH2.innerText = "Enter your Name"

const getUsrNameDiv = document.createElement("div")
getUsrNameDiv.className = "input-parent"

export const getUsrNameInput = document.createElement("input")
getUsrNameInput.type = "text"
getUsrNameInput.name = "usrName"
getUsrNameInput.id = "name"

export const getUsrNameButton = document.createElement("button")



// getUsrNameButton.type = "submit"
getUsrNameButton.className = "usrNameSubmit"
getUsrNameButton.innerText = "Submit"

getUsrNameDiv.append(getUsrNameInput)

getUsrNameForm.append(getUsrNameH2)
getUsrNameForm.append(getUsrNameDiv)
getUsrNameForm.append(getUsrNameButton)

//entire form is in getUsrNameForm


// ---------- GET USR NAME FORM END ----------
