//export thing(s) will only be used in script.js

export const navbarHeader = document.createElement("header")



// ---------- NAVBAR ----------



const navbarNav = document.createElement("nav")
const navbarUl = document.createElement("ul")

const navbarLiUsrName = document.createElement("li")
navbarLiUsrName.innerText = "UserName : "
navbarLiUsrName.className = "navUsrName"

const navbarLiWins = document.createElement("li")
navbarLiWins.innerText = "Wins: "
navbarLiWins.className = "navWins"

const navbarLiNavRound = document.createElement("li")
navbarLiNavRound.innerText = "Round: "
navbarLiNavRound.className = "navRound"



//adds list items to the ul, adds the diffret fields for the navbar
navbarUl.append(navbarLiUsrName)
navbarUl.append(navbarLiWins)
navbarUl.append(navbarLiNavRound)

navbarNav.append(navbarUl)


//entire navbar is in navbarHeader
navbarHeader.append(navbarNav)


// ---------- NAVBAR END ----------
