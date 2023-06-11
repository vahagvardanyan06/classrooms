import drawOnSearch from "./drawOnSearch.js";

const searchInput = document.getElementById("search");



const url = "https://academyclassrooms.com/api/schedule";


let arr = []

 



function performSearch(arr){

  fetch(url)
          .then(resp=>resp.json())
          .then(resp=> onSearching(resp)); 

 

    }
  

function onSearching(arr){
  for(let classroom in arr){

    for (let time in arr[classroom]) {

        for (let weekday in arr[classroom][time]) {


            if(hasAllLetters(searchInput.value, arr[classroom][time][weekday]["teacher"]) ||  hasAllLetters(searchInput.value, arr[classroom][time][weekday]["group"])){

                  drawOnSearch(classroom, time, weekday,arr[classroom][time][weekday] )
                  
            }

          
    }
  }
}
}



function hasAllLetters(str1, str2) {

    var regex = new RegExp(str1, "i");
    return regex.test(str2);

}


  


export default performSearch;
