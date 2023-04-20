//the url for the entire score board
const url = "https://java22-avjs-mp1-max-tarn-default-rtdb.europe-west1.firebasedatabase.app/score.json"


export async function fetchAndSortScores(newScore = null){

  let sortedScores =  await fetch(url)
  .then((response) => response.json())
  .then((data) => {

    const arrOfScores = data
  
    if(newScore !== null){
      arrOfScores.push(newScore)
    }

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

  
  return fetch(url, option)
  .then(response => response.json())
  .then(data => console.log(data));

}


//replaces all the current high scores with
export function resetScores(){

  //the new scores
  const bodyContent ={
    0:{
        userName : "user1",
        score : 0
      },
      1:{
        userName : "user2",
        score : 0
      },
      2:{
        userName : "user3",
        score : 0
      },
      3:{
        userName : "user4",
        score : 0
      },
      4:{
        userName : "user5",
        score : 0
      }
  }

  //what type of content that the request is, and what type of charset accepted
  const header = {
    //Egenskapsnamnet Content-type behöver citattecken eftersom det innehåller ett bindestreck.
        "Content-type": "application/json; charset=UTF-8"
  }

  
  //the request sent to the database 
  const option = {
    method: "PUT", //Metoden som ska användas
    body: JSON.stringify(bodyContent), //Gör om datan till json
    headers: header //Header-objektet
  };
  
  //sends request to the database, returns promise 
  //so that you can make .then(updateHighScore()) 
  return fetch(url, option)
}
