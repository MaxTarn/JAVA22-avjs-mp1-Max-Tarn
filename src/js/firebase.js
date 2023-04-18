//the url for the entire score board
export const url = "https://java22-avjs-mp1-max-tarn-default-rtdb.europe-west1.firebasedatabase.app/score.json"


export const sortedScores = fetch(url)
  .then((response) => response.json())
  .then((data) => {

    const arrOfScores = [];

    //for the .sort to work the data needs to be in an array, this adds the data to an array
    for (let index = 0; index < data.length; index++) {
        arrOfScores.push(data[index])
    }


    //rearanges the array for descending order
    arrOfScores.sort(function (a,b){

        //this makes it sort in descending order, sorted by the score
        return b.score - a.score 
    })

    console.log(arrOfScores);
    
    return arrOfScores

  });
  

  async function fetchScores(fetchFromThis = url){

    const sortedScores = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
  
      const arrOfScores = [];
  
      //for the .sort to work the data needs to be in an array, this adds the data to an array
      for (let index = 0; index < data.length; index++) {
          arrOfScores.push(data[index])
      }
  
  
      //rearanges the array for descending order
      arrOfScores.sort(function (a,b){
  
          //this makes it sort in descending order, sorted by the score
          return b.score - a.score 
      })
  
      console.log(arrOfScores);
      
      return arrOfScores
  
    });
    return sortedScores
  }