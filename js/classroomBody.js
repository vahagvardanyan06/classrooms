

function classroomBody(classroom) {
    const tbody = document.createElement("tbody");
  
    for (let time in classroom) {
        const tr = document.createElement("tr");
        const tdTime = document.createElement("td");
        tr.appendChild(tdTime);

      for (let weekday in classroom[time]) {

        const tdTeacherSubject = document.createElement("td");

        tr.appendChild(tdTeacherSubject);

        const teacherName = document.createElement("div");
        const subjectName = document.createElement("span");

        tdTeacherSubject.appendChild(teacherName);
        tdTeacherSubject.appendChild(subjectName);


        tdTime.innerHTML = time;

        teacherName.innerHTML = classroom[time][weekday]["teacher"];
        subjectName.innerHTML = classroom[time][weekday]["group"];




        // const tr = document.createElement("tr");
        // const tdTime = document.createElement("td");
        // tdTime.innerHTML = time
  
        // const teacherName = document.createElement("div");
        // teacherName.textContent = classroom[time][weekday]["teacher"];

        // const tdGroup = document.createElement("td")

        // tdGroup.innerHTML = classroom[time][weekday]["group"];
        
        // tdTime.appendChild(teacherName);

        // tr.appendChild(tdTime);
        // tr.appendChild(tdGroup)
        // tbody.appendChild(tr);

        tbody.appendChild(tr)
      }
    }
  
    return tbody;
  }
  
  export default classroomBody;
  