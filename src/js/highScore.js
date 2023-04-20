import {
    fetchAndSortScores,
    putScores
} from './firebase.js'

let scores 
export const highScoreDiv = document.createElement('div')
highScoreDiv.id = "high-score-div"
highScoreDiv.innerHTML = 
`<h1>Score Board</h1>
<table class="styled-table">
<thead>
    
    <tr>
        <th>Place</th>
        <th>Name</th>
        <th>Points</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>1</td>
        <td id="row-1-name">a2</td>
        <td id="row-1-points">a3</td>
    </tr>
    <tr>
        <td>2</td>
        <td id="row-2-name">b2</td>
        <td id="row-2-points">b3</td>
    </tr>
    <tr>
        <td>3</td>
        <td id="row-3-name">b2</td>
        <td id="row-3-points">b3</td>
    </tr>
    <tr>
        <td>4</td>
        <td id="row-4-name">b2</td>
        <td id="row-4-points">b3</td>
    </tr>
    <tr>
        <td>5</td>
        <td id="row-5-name">b2</td>
        <td id="row-5-points">b3</td>
    </tr>
</tbody>
</table>
<button id="reset-scores">Reset Scores stored in firebase</button>`;


export function updateHighScore(){
    fetchAndSortScores().then((data)=>{
        scores = data
    
        for (let index = 1; index <= 5; index++) {
            const tableCellName = document.getElementById(`row-${index}-name`)
            const tableCellPoints = document.getElementById(`row-${index}-points`)
    
            tableCellName.innerText = scores[index-1].userName
            tableCellPoints.innerText = scores[index-1].score        
        }
    })
}


