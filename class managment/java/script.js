let sum = 0, average = 0, counter = 0;
function datafun() {
    let studentname = document.getElementById("name");
    let studentscore = document.getElementById("score");
    let tabel = document.getElementById("dataview");

    // let scorerow = document.createElement("tr");
    // let namerow = document.createElement("tr"); 

    // creating tabel for student name and score
    let commontr = document.createElement("tr")
    let namedata = document.createElement("td");
    let namelabel = document.createElement("label");
    let scoredata = document.createElement("td");
    let scorelabel = document.createElement("label");

    if (studentname.value == '' || studentname.value == null) {
        alert("student name missing please insert student name");
    } else
        if (studentscore.value == '' || studentscore.value == null) {
            alert("student score missing please insert student score");
        } else {
            namelabel.textContent = studentname.value;
            namedata.appendChild(namelabel);
            commontr.appendChild(namedata);
            tabel.appendChild(commontr);
            tabel.className="td1";

            scorelabel.textContent = studentscore.value;
            scoredata.appendChild(scorelabel);
            commontr.appendChild(scoredata);
            tabel.appendChild(commontr);
            tabel.className="td1";

            // calculating average and student number
            sum = sum + parseInt(studentscore.value);
            counter = counter + 1;
            average = Math.round(sum / counter);
            let x = document.getElementById("stc");
            x.textContent = counter;
            let y = document.getElementById("sta");
            y.textContent = average;

            // reset data
            studentscore.value = "";
            studentname.value = "";
        }
}








