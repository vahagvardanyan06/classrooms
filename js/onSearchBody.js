function onSearchBody(classroom, time, weekday, group){

    const searchTbody = document.createElement("tbody");
    
    const searchTr = document.createElement("tr");

    const groupTd = document.createElement("td");
    const classroomTd = document.createElement("td");
    const scheduleTd = document.createElement("td");

    groupTd.innerHTML = group["group"];
    classroomTd.innerHTML = classroom;
    scheduleTd.innerHTML = `${weekday.toUpperCase()}: ${time[0]}${time[1]}:${time[2]}${time[3]} Teacher ${group["teacher"]}`


    searchTbody.appendChild(searchTr);

    searchTr.appendChild(groupTd);
    searchTr.appendChild(classroomTd);
    searchTr.appendChild(scheduleTd);

    return searchTbody;


}


export default onSearchBody;