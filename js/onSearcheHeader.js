function onSearchHeader(){


//     const searchResult = document.createElement("div");
//           searchResult.className = "searchResult";   

//     const title = document.createElement("h4");
//           title.innerHTML = "Search Results";

          
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


      //  searchResult.appendChild(title);
      //  searchResult.appendChild(resultsTable);
       
       resultsTable.appendChild(resultsThead);

       resultsThead.appendChild(resultsTr);

       resultsTr.appendChild(groupTh);
       resultsTr.appendChild(classroomTh);
       resultsTr.appendChild(scheduleTh);

       return resultsTable;

    

}


export default onSearchHeader;