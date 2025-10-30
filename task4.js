//___________________ START DATE ______________________

const students = [
    {
    name: "Ahmed",
    age: 17,
    grade: "A",
    subject: "Math",
    teacher: "Mr. Khaled",
    isPresent: true,
    absences: 1,
    score: 92,
    },
    {
    name: "Mahmoud",
    age: 18,
    grade: "B",
    subject: "Physics",
    teacher: "Ms. Salma",
    isPresent: true,
    absences: 2,
    score: 85,
    },
    {
    name: "Sara",
    age: 17,
    grade: "A+",
    subject: "English",
    teacher: "Mr. Tamer",
    isPresent: false,
    absences: 0,
    score: 98,
    },
    {
    name: "Omar",
    age: 16,
    grade: "C",
    subject: "History",
    teacher: "Mrs. Dina",
    isPresent: false,
    absences: 4,
    score: 67,
    },
    {
    name: "Nour",
    age: 17,
    grade: "B+",
    subject: "Biology",
    teacher: "Mr. Yasser",
    isPresent: true,
    absences: 1,
    score: 89,
    },
    {
    name: "Youssef",
    age: 18,
    grade: "A-",
    subject: "Chemistry",
    teacher: "Ms. Fatma",
    isPresent: true,
    absences: 0,
    score: 91,
    },
    {
    name: "Hala",
    age: 16,
    grade: "C+",
    subject: "Geography",
    teacher: "Mr. Ahmed",
    isPresent: false,
    absences: 3,
    score: 72,
    },
];
// _______________________________END DATE____________________________


//_________ إحصاءات __________


let absentCount = 0;     // عدد الغائبين
let topCount = 0;        // عدد المتفوقين 
let i = 0;

while (i < students.length) {
    if (!students[i].isPresent) {
        absentCount++; }
    if (students[i].score >= 90) {
        topCount++; }
    i++;  
}

document.write(`
    <div class="stats">
        <p>عدد الغائبين : <span>${absentCount}</span></p>
        <p>عدد المتفوقين : <span>${topCount}</span></p>
    </div>
`);


//________#اعرض بيانات كل طالب# + # Template Literals #__________

document.write(`<div class="container">`); 
for (let student of students) {
    document.write(`
    <div class="card">
        <div class="card-body">
            <div class="card-header">
                <h2> <span>${student.name}</span> <hr></h2>
            </div>
        <div class="card-content">
                <p> Age : <span>${student.age}</span> </p>
                <p> Grade : <span>${student.grade}</span> </p>
                <p> Subject : <span>${student.subject}</span> </p>
                <p> Teacher : <span>${student.teacher}</span> </p>
                <p> Absences : <span>${student.absences}</span> </p>
                <p> Score : <span class="score">${student.score}</span> </p>
    `);

    //__#الحضور 

    if(student.isPresent===true){
        document.write(`<p> Status : <span> حاضر 👍  </span> `);
    } else {
        document.write(`<p> Status : <span> غائب ❌ </span></p>`);
    }

    //__#التقييم IF CONDITION

    if (student.isPresent && student.score >= 90) {
        document.write(`<p class="status excellent"> Excellent Student </p>`);
    } else if (student.absences > 3 || student.score < 50) {
        document.write(`<p class="status needs-improvement"> ⚠️ Needs Tracking </p>`);
    } else {
        document.write(`<p class="status average"> 🆕 New Student </p>`);
    }

    //___#التقدير SWITCH
    switch(student.grade) {
        case "A":
            document.write(`<p class="grade">🥇 ممتاز</p>`);
            break;
        case "A+":
            document.write(`<p class="grade"> 🎉 ممتاز جدًا جدًا </p>`);
            break;
        case "A-":
            document.write(`<p class="grade"> 🥈 جيد جدًا</p>`);
            break;
        case "B+":
            document.write(`<p class="grade"> 👍 جيد</p>`);
            break; 
        case "B":
            document.write(`<p class="grade"> 🙂 مقبول</p>`);
            break;
        case "C+":
            document.write(`<p class="grade"> ⚠️ تحت المتوسط</p>`);
            break; 
        case "C":
            document.write(`<p class="grade"> ❌ ضعيف</p>`);
            break;
        default:
            document.write(`<p class="grade"> 📚 غير مصنف</p>`);              
    }


    document.write(`</div></div></div>`); 
}
document.write(`</div>`);

//___________END TASK 4___________



