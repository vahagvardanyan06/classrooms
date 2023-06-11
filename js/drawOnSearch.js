function drawOnSearch(classroom,time, weekday,group){


    const searchResult = document.createElement("div");
          searchResult.className = "searchResult";   

    const title = document.createElement("h4");
          title.innerHTML = "Search Results";

          
    const resultsTable = document.createElement("table");
          resultsTable.className = "resultsTable";
          
    const resultsThead = document.createElement("thead");
          resultsThead.className = "resultsThead";


    const resultsTr = document.createElement("tr");
          resultsTr.className = "resultsTr";


    const groupTh = document.createElement("th");
          groupTh.innerHTML = "GROUP";

    const classroomTh = document.createElement("th");
          classroomTh.innerHTML = "CLASSROOM";


    const scheduleTh = document.createElement("th");
          scheduleTh.innerHTML = "SCHEDULE";     


}


export default drawOnSearch;