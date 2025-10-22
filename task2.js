//TASK 2
// نطلب من المستخدم إدخال القيم الثلاث
let Productivity = Number(prompt("أدخل درجة الإنتاجية (من 0 إلى 100)")) ;
let Commitment = Number(prompt("أدخل درجة الالتزام  (من 0 إلى 100)")) ;
let Team_cooperation = Number(prompt("أدخل درجة روح التعاون (من 0 إلى 100)")) ;
// نحسب المتوسط
let avg = (Productivity + Commitment + Team_cooperation) / 3 ;
// نحدد التقييم بناءً على المتوسط  (if conditions)
let Evaluation;
let color; // لون النتيجة

if (avg >= 90){
    Evaluation = " ممتاز جدا 💎" ;
    color = "green";
}
else if (avg >= 75){
    Evaluation = "جيد جدا 🌟" ;
    color = "blue";
}
else if (avg >= 60){
    Evaluation = "مقبول 🙂" ;
    color = "orange";
}
else if (avg >= 50){
    Evaluation = "ضعيف ⚠️" ;
    color = "yellow";
}
else {
    Evaluation = "راسب ❌" ;
    color = "red";
}
 //تضيف شرط إن أي درجة أقل من 50 تجعل التقييم "راسب ❌"
if (Productivity < 50 || Commitment < 50 || Team_cooperation < 50) {
    Evaluation = "راسب بسبب ضعف في أحد الجوانب ❌";
    color = "dark";
}
//اعرض النتائج في صفحة الويب 
//غيّر لون الخلفية أو النص بناءً على النتيجة +
document.write(`
    <div class="container"> 
    <h1> نظام تقييم أداء الموظفين</h1>
    <h3> أدخل درجات الموظف للجصول على تقييم شامل</h3>
    <div class="boxs"> 
    <div class="box-1">
    <p>درجة الإنتاجية : <span>${Productivity} </span> </p>
    <p>درجة الالتزام : <span>${Commitment} </span> </p>
    <p>درجة روح التعاون : <span>${Team_cooperation} </span> </p>
    <p>المتوسط : <span>${avg.toFixed(2)} </span> </p>
    </div>
    <p class="bu-1">المتوسط العام : <span>${avg.toFixed(0)}</span> </p>
    <p class="bu-1 ${color}"> نتيجة التقييم  : <span>${Evaluation} </span> </p>
    </div>
    </div>
    `)
//_______________END ____________




