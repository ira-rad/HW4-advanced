const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

 function getStudentsPairs() {
    const girls = [];
    const boys = [];
    const pairsStudents = [];
    for(let oneStudent of students){
        oneStudent.endsWith('а') ? girls.push(oneStudent) : boys.push(oneStudent);
    }

    for(let i = 0; i < students.length/2; i++) {
        pairsStudents.push([` ${boys[i]} i ${girls[i]} `]);
    }
    return pairsStudents;
}
const pairs = getStudentsPairs()
 
function getStudentsTheme(){
const studentsWithTheme = [];
for(let i = 0; i < themes.length; i++) {
    studentsWithTheme.push([`${pairs[i]} - ${themes[i]}`]);
}
return studentsWithTheme
}

function getStudentsMarks(){
    const studentsMarks = [];
    for(let i = 0; i < themes.length/0.5; i++) {
        studentsMarks.push([` ${students[i]} - ${marks[i]}`]);
    } 
    return  studentsMarks
}

function getRandomMarks(){
    const studentsMarks = [];
    for(let i = 0; i < themes.length/1; i++) {
        studentsMarks.push([`${pairs[i]}, ${themes[i]} - ${Math.floor(Math.random() * 5 + 1)}`]);
    } 
   return studentsMarks;
    }
   


document.writeln(`<p> №1:  ${getStudentsPairs()}</p>`);
document.writeln(`<p> №2:  ${getStudentsTheme()}</p>`);
document.writeln(`<p> №3:  ${getStudentsMarks()}</p>`);
document.writeln(`<p> №4:  ${getRandomMarks()}</p>`);