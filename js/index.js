import classroomHeader from "./classroomHeader.js";
import classroomBody from "./classroomBody.js";
const root = document.getElementById("root");

 const url = "https://academyclassrooms.com/api/schedule";

 fetch(url).then(resp=> resp.json())
            .then(resp=>{
                for(let classroom in resp){
                   // console.log(resp[classroom]["1000"]["mon"]["teacher"]);
                    classroomTable(resp[classroom], classroom);
                }
            });

// table.appendChild(classroomBody())



function classroomTable(classroom, classroomName){

    const div = document.createElement("div");
          div.className = classroomName;


    const table = document.createElement("table");
    div.appendChild(table);
    const h1 = document.createElement("h1");
    table.appendChild(h1);

    h1.innerHTML = classroomName;

    const thead = classroomHeader()
    table.appendChild(thead)
    
    const tbody = classroomBody(classroom,classroomName);

    table.appendChild(tbody)


    root.appendChild(div);
    
}


