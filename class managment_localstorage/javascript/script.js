let sum = 0, average = 0, counter = 0, arr = [];
function datafun(studentname, studentscore) {
    studentname = document.getElementById("name");
    studentscore = document.getElementById("score");

    if (studentname.value == '' || studentname.value == null) {
        alert("student name missing please insert student name");
    } else {
        if (studentscore.value == '' || studentscore.value == null) {
            alert("student score missing please insert student score");
        } else {
            let obj = {
                stdname: studentname.value,
                stdscore: parseInt(studentscore.value),
            };

            display(studentname.value, studentscore.value);
            set_local_storage(obj);

            // reset data
            studentscore.value = "";
            studentname.value = "";
        }
    }
}

function display(studentname, studentscore) {

    // creating tabel for student name and score
    let tabel = document.getElementById("dataview");
    let commontr = document.createElement("tr")
    let namedata = document.createElement("td");
    let namelabel = document.createElement("label");
    let scoredata = document.createElement("td");
    let scorelabel = document.createElement("label");

    namelabel.textContent = studentname;
    namedata.appendChild(namelabel);
    commontr.appendChild(namedata);
    tabel.appendChild(commontr);
    tabel.className = "td1";

    scorelabel.textContent = studentscore;
    scoredata.appendChild(scorelabel);
    commontr.appendChild(scoredata);
    tabel.appendChild(commontr);
    tabel.className = "td1";

    // calculating average and student number
    sum = sum + parseInt(studentscore);
    counter = counter + 1;
    average = Math.round(sum / counter);
    let x = document.getElementById("stc");
    x.textContent = counter;
    let y = document.getElementById("sta");
    y.textContent = average;
}

//uplode data to localstorge
function set_local_storage(obj) {
    arr.push(obj);
    localStorage.setItem("studentdata", JSON.stringify(arr));
}

//downlode data from localstorage
function get_local_storage() {
    if (localStorage.getItem("studentdata")) {
        arr = JSON.parse(localStorage.getItem("studentdata"));
        for (let i = 0; i < arr.length; i++) {
            display(arr[i].stdname, arr[i].stdscore);
        }
    }
}
get_local_storage();
document.getElementById("cleardata").addEventListener("click",function(){
localStorage.clear();
location.reload();
});
    











