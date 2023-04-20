import {
    fetchAndSortScores,
    putScores
} from './firebase.js'

export const highScoreDiv = document.createElement('div')
const highScoreList = document.createElement('ol')

const scores = await fetchAndSortScores()

for (let index = 0; index <= 4; index++) {
    const li = document.createElement('li')
    li.innerText = `${scores[index].score} : ${scores[index].userName}`
    highScoreList.append(li)
}


highScoreDiv.append(highScoreList)