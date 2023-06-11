

function classroomBody(classroom) {


    const tbody = document.createElement("tbody");
    tbody.className = "classroomBody"
  
    for (let time in classroom) {
        const tr = document.createElement("tr");
        tr.className = "clases_same_time"
        
        const tdTime = document.createElement("td");
        tr.appendChild(tdTime);

      for (let weekday in classroom[time]) {

        const tdTeacherSubject = document.createElement("td");
        tdTeacherSubject.className = "tdTeacherSubject  "
                      

        tr.appendChild(tdTeacherSubject);

        const teacherName = document.createElement("div");
        teacherName.className = "teacherName"

        const subjectName = document.createElement("span");
        subjectName.className = "subjectName"

        tdTeacherSubject.appendChild(subjectName);
        tdTeacherSubject.appendChild(teacherName);


        tdTime.innerHTML = `${time[0]}${time[1]}:${time[2]}${time[3]}` ;

        teacherName.innerHTML = classroom[time][weekday]["teacher"];
        subjectName.innerHTML = classroom[time][weekday]["group"];


        if(classroom[time][weekday]["reserved"] && classroom[time][weekday]["rec"]){

          subjectName.style.backgroundColor = "yellow"

        }else if(!classroom[time][weekday]["reserved"] && classroom[time][weekday]["rec"]){

          subjectName.style.backgroundColor = "red"

        }else{

          subjectName.style.backgroundColor = "green"

        }


        tbody.appendChild(tr)
      }
    }
  
    return tbody;
  }
  
  export default classroomBody;
  