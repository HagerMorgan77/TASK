
//TASK 1 JS
// ____________#1 ,#2 ______________
let employee1 = {
    name : "Hager Morgan" ,
    age : 22 ,
    jobTitle : "Architect" ,
    isManager : false ,
    address : {
        country: "Turkey" ,
        city : "Istanbul" ,
    } ,
    skills : ["planning" , "ArcGIS" ,"Photoshop" , "Organization"] ,
    salary : [8000 , 9000 , 10000] ,
}
let employee2 = {
    name : "Malak ELsaid" ,
    age : 27 ,
    jobTitle : "Software Engineer" ,
    isManager : true ,
    address : {
        country: "Egypt" ,
        city : "Cairo" ,
    } ,
    skills : ["HTML" , "CSS" ,"JAVASCRIPT" , "REACT JS"] ,
    salary : [15500, 16200 , 17000] ,
}
let employee3 = {
    name : "Ahmed Ali" ,
    age : 30 ,
    jobTitle : "UI/UX Designer" ,
    isManager : false ,
    address : {
        country: "UAE" ,
        city : "Dubai" ,
    } ,
    skills : ["Figma" , "Photoshop" ,"Time Management" , "Creativity"] ,
    salary : [5000, 5500 , 6100] ,
}
// ____________#3______________
var allEmployees = [employee1 , employee2 , employee3];
// ____________#4______________
// avg Emp1 Hesaplama = 9000$
var employee1total = allEmployees[0].salary[0] + allEmployees[0].salary[1] + allEmployees[0].salary[2] ;
var avg_1 = employee1total /  allEmployees[0].salary.length ;
// avg Emp2 Hesaplama = 16233$
var employee1tota2 = allEmployees[1].salary[0] + allEmployees[1].salary[1] + allEmployees[1].salary[2] ;
var avg_2 = employee1tota2 /  allEmployees[1].salary.length ;
// avg Emp3 Hesaplama = 5533$
var employee1tota3 = allEmployees[2].salary[0] + allEmployees[2].salary[1] + allEmployees[2].salary[2] ;
var avg_3 = employee1tota3 /  allEmployees[2].salary.length ;
// ____________#5______________
//اسم الموظف ووظيفته
console.log(allEmployees[0].name + " " +allEmployees[0].jobTitle);
console.log(allEmployees[1].name + " " +allEmployees[1].jobTitle);
console.log(allEmployees[2].name + " " +allEmployees[2].jobTitle);
//هل هو Manager ولا لأ.
console.log(allEmployees[0].isManager);
console.log(allEmployees[1].isManager);
console.log(allEmployees[2].isManager);
//عدد المهارات اللي عنده.
console.log(allEmployees[0].skills.length + " " + "Skills");
console.log(allEmployees[1].skills.length + " " + "Skills");
console.log(allEmployees[2].skills.length + " " + "Skills");
//متوسط راتبه.
console.log(avg_1 + "$");
console.log(avg_2 + "$");
console.log(avg_3 + "$");
//مجموع مرتب الموظف الاول  علي مدار شهرين
console.log(allEmployees[0].salary[0] + allEmployees[0].salary[1]) ;
// احسب مجموع الرواتب لكل الموظفين مع بعض (يعني total company salary).
console.log(employee1total + employee1tota2 + employee1tota3 + "$") ;
//نوع بيانات كل خاصية باستخدام typeof.
console.log(typeof allEmployees[0].name);
console.log(typeof allEmployees[0].age);
console.log(typeof allEmployees[0].jobTitle);
console.log(typeof allEmployees[0].isManager);
console.log(typeof allEmployees[0].address);
console.log(typeof allEmployees[0].skills);
console.log(typeof allEmployees[0].salary);
//___________________Bonus Challenge _________________
var message = "Hi , My Name Is  Mahmoud Habib   And I Am  30 Years Old   I Work As A  Software Engineer   My Salary Is  5500   I Live In  Cairo   Egypt   And I Am A Manager true   My Skills Is  3."
console.log(allEmployees[0] + message ) ;
console.log(allEmployees[1] + message ) ;
console.log(allEmployees[2] + message ) ;


















