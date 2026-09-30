//-----------Logical operators---------------

console.log(12>7&&20>18);

console.log(10>15&&20>10);

console.log(15>27||17>30);

console.log(5>10||20<15);

console.log(!(35>15));

console.log(!(30<9));

let a=25;
let b=15;
console.log(a>b&&b>a||a<b);

console.log(!(a>b)||(a>b&&a<b));

//--------------Ternary operator---------------

let age=15;
let result=age>=18?"Eligible":"Not eligible";
console.log(result);

let marks=75;
let result2=marks>=35?"pass":"Fail";
console.log(result2);

let num=15;
let result3=num>10?"Greater than 10":"Not Greater than 10";
console.log(result3);

let num1=17;
let result4=num%2==0?"Even nmuber":"odd Number";
console.log(result4);

let salary=25000;
let result5=salary>30000?"Good Salary":"Low Salary";
console.log(result5);

//------------------Concatenation & Template Strings----------------

let fname="Ramcharan";
let lname="saiTeja";
let city="Tadepalligudem";
console.log(fname+" "+lname+" "+city);

let name="Ramcharan";
let age1=23;
console.log(name+" "+age1);

let product="Mobile";
let price=150000;
let brand="Iphone";
console.log(product+" "+price+" "+brand);


let name1="Sai";
let qualification="B.Tech";
let company="satckly";

let msg=`name1 ${name1}, qualification ${qualification}, company ${company}`
console.log(msg);

let username="Ramcharan";
let age2=25;
let city1="Bhimavaram";

let msg1=`Myself ${username}, ${age2} years old. I'm from ${city1}.`
console.log(msg1);

//------------Type casting-----------------

let str1="hello";
let n1=25;
console.log(str1+n1,typeof(str1+n1));

let n2=15;
let n3=15;
console.log(n2+n3,typeof(n2+n3));

let n4=35;
let boolean=true;
console.log(n4+boolean,typeof(n4+boolean));

let n5=35;
let n=null;
console.log(n5+n,typeof(n5+n));

let str2="Ram";
let boolean1=false;
console.log(str2+boolean1,typeof(str2+boolean1));

let str3="SaiTeja";
let arr=[" apple","toy","Biscuits"];
console.log(str3+arr,typeof(str3+arr));

let n6=26;
let obj={
    name:"Ramcharan",
    _age:25
}
console.log(n6+obj,typeof(n6+obj));

console.log("chiranjeevi"+20,typeof("chirajeevi"+20));
console.log(20+undefined,typeof(20+undefined));
console.log(null+a[2,4,6],typeof(null+a[2,4,6]));

//-------------Type Casting — Explicit------------------

console.log(Number("100"));

let s="25";
console.log(Number(s),typeof(Number(s)));

let br=true;
console.log(Number(br),typeof(Number(br)));

let br1=false;
console.log(Number(br1),typeof(Number(br1)));

let s2="";
console.log(Number(s2));

let c=null;
console.log(Number(c));

let c1=undefined;
console.log(Number(c1),typeof(Number(c1)));

let s3="Hello";
console.log(Boolean(s3),typeof(Boolean(s3)));

let s4="";
console.log(Boolean(s4));

let s5=0;
let s6=1;
let s7=-1;
console.log(Boolean(s5),Boolean(s6),Boolean(s7));

let arr2=[1,2,3,4,5];
console.log(arr2,Boolean(arr2));

let obj2={
    player:"Virat",
    Team:"India"
}
console.log(obj2,Boolean(obj2));


//---------------Conditional Statements-----------------

let _age1=33;
if(_age1>=18){
    console.log("Eligible");
}

let _age2=34;
if(_age2>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible");
}

let marks1=52;
if(marks1>=55){
    console.log("pass");
}
else{
    console.log("Fail");
}


let time=prompt("Enter the time in 24 hours format");
if(time>=1&&time<=6){
    console.log("Early Morning");
}
else if(time>=7&&time<=12){
    console.log("Morning");
}
else if(time>=13&&time<=17){
    console.log("Afternoon");
}
else if(time>=18&&time<=19){
    console.log("Night");
}
else{
    console.log("Invalid Time");
}

let temperature = prompt("Enter the temperature?")
if (temperature > 35){
    console.log("Hot");
}
else if(temperature >= 20 && temperature <= 35){
    console.log("Normal");
}
else
{
    console.log("Cold");
}


let ages=25;
let height=174;
let weight=55;

if(ages>=18){
    if(height>=170){
        if(weight>=60){
            console.log("Eligible");
        }
        else{
            console.log("weight is not enough");
        }
    }
    else{
        console.log("Your height is not enough");
    }
}
else{
    console.log("Age is not enough");
}


//--------------Switch Statement--------------

let light="yellow";
switch(light){
  case "red":console.log("Stop the vehicle");
  break;
  case "yellow":console.log("Get ready to move");
  break;
  case "green": console.log("Start the vehicle");
  break;
  default:console.log("Something wrong");
}


let day="Tuesday";
switch(day){
    case "Sunday":console.log("Today is Sunday");
    break;
    case "Monday":console.log("Today is Monday");
    break;
    case "Tuesday":console.log("Today is Tuesday");
    break;
    case "Wednesday":console.log("Today is Wednesday");
    break;
    case "Thursday":console.log("Today is Thursday");
    break;
    case "Friday":console.log("Today is Friday");
    break;
    case "Saturday":console.log("Today is Saturday");
    break;
    default:console.log("No days");
}

let choice = 2;
switch(choice){

    case 1 : console.log("Start");
    break;

    case 2 : console.log("Settings");
    break;

    case 3 : console.log("Exit");
    break;

    default : console.log("This choice is not available");
}

//-----------Loops----------

for(let i=1;i<=10;i++){
    console.log(i);
}

let i=10;
while(i>=1){
    console.log(i);
    i--;
}

let fruits=["apple","orange","banana","pineapple"];
for(let i of fruits){
    console.log(i);
}

let objects={
    name:"Ramcharan",
    role:"Frotend Developer",
    Experience:"1 Year"
}
for(let i in objects){
    console.log(i+":" ,objects[i]);
}









 

