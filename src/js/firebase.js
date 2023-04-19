//the url for the entire score board
const url = "https://java22-avjs-mp1-max-tarn-default-rtdb.europe-west1.firebasedatabase.app/score.json"
let sortedScores = fetchAndSortScores()


export async function fetchAndSortScores(newScore = null){

  let sortedScores =  await fetch(url)
  .then((response) => response.json())
  .then((data) => {

    const arrOfScores = data
  
    if(newScore !== null){
      arrOfScores.push(newScore)
    }

    // //for the .sort to work the data needs to be in an array, this adds the data to an array
    // for (let index = 0; index < data.length; index++) {
    //     arrOfScores.push(data[index])
    // }


    //rearanges the array for descending order
    arrOfScores.sort(function (a,b){

        //this makes it sort in descending order, sorted by the score
        return b.score - a.score 
    })
    
    
    //makes the length of the array only 5, and if longer removes the last post
    if(arrOfScores.length >=6){
      arrOfScores.pop()
    }

    return arrOfScores

  });


  return sortedScores
}
  

export async function putScores(newScore){
  
  let sortedScores = await fetchAndSortScores(newScore)

  const bodyContent = {
    0:{
      userName : sortedScores[0].userName,
      score : sortedScores[0].score
    },
    1:{
      userName : sortedScores[1].userName,
      score : sortedScores[1].score
    },
    2:{
      userName : sortedScores[2].userName,
      score : sortedScores[2].score
    },
    3:{
      userName : sortedScores[3].userName,
      score : sortedScores[3].score
    },
    4:{
      userName : sortedScores[4].userName,
      score : sortedScores[4].score
    }
  };


  const header = {
    //Egenskapsnamnet Content-type behöver citattecken eftersom det innehåller ett bindestreck.
        "Content-type": "application/json; charset=UTF-8"
    }

  

  const option = {
    method: "PUT", //Metoden som ska användas
    body: JSON.stringify(bodyContent), //Gör om datan till json
    headers: header //Header-objektet
  };

  fetch(url, option)
  .then(response => response.json())
  .then(data => console.log(data));

}
