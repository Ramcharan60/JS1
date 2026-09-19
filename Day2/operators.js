//----------------Variables & Data Types

let name="Ramcharan";
console.log(typeof(name));

let age=23;
console.log(age);
console.log(typeof(age));

let b1=true;
console.log(b1);
console.log(typeof(b1));

let b2;
console.log(b2);
console.log(typeof(b2));

let a1=null;
console.log(a1);
console.log(typeof(a1));

let name1="Ram";
let age1=25;
let boolean=false;
let u;
let b3=null;

console.log(name1);
console.log(age1);
console.log(boolean,typeof(boolean));
console.log(u,typeof(u));
console.log(b3,typeof(b3));

let qualification="B.tech";
console.log(typeof(qualification));

let salary=50000;
console.log(typeof(salary));

let num="100";
let num1=100;
console.log(typeof(num));
console.log(typeof(num1));

let name2="Dency";
let age2=50;
let _qualification="Degree";
let workingstatus="employee"

console.log(name2,typeof(name2));
console.log(age2,typeof(age2));
console.log(_qualification,typeof(_qualification));
console.log(workingstatus,typeof(workingstatus));

console.clear();


//----------------Arrays------------------

let arr1=["mango","orange","apple","pineapple","guava"];
console.log(arr1);

let arr2=[1,2,3,4,5];
console.log(arr2[0]);

let arr3=["pink",'yellow',"blue","violet","white","black"];
console.log(arr3[2]);

let arr4=["vivo","iphone","oppo","realme","readme","samsung"];
console.log(arr4[arr4.length-1]);

let arr5=[1,2,3,4,5,6,7];
console.log(arr5[arr5.length-2]);

let arr6=["teddy bear","toy car","toy block","rubiks cube","baby doll"];
console.log(arr6[arr6.length-1]);

let arr7=[1,2,3,4,5,6,7,8,9,10];
console.log(arr7[0]);;
console.log(arr7[arr7.length-1]);
console.log(arr7[arr7.length-2]);

let all=["pineapple","toy car","Siraj","dhoni","rubiks cube","guava"]
console.log(all)
console.log(all[2])
console.log(all[4])
console.log(all[all.length-1])

console.clear();


//----------------objects-------------------------

let obj1={
    name3:"Ramcharan",
    age5:66,
    city1:"Tadepalligudem"
}
console.log(obj1);


let obj2={
    name4:"Allu",
    qualification1:"Inter",
    company:"stackly"
}
console.log(obj2.company,typeof(obj2.company));

let obj3={
    fruits:["mango","orange","apple","pineapple","guava"]
}
console.log(obj3.fruits[1]);

let obj4={
    crickter:"Rohit",
    Team:"India"
}
console.log(obj4.crickter);

let obj5={
    fruitname:"apple",
    toyName:"lulu",
    Crickter:"kohli"
}
console.log(obj5.fruitname,",",obj5.Crickter);

let obj6={
    students:["ram","leela","abbas"],
    courses:["python","java","sql"]
}
console.log(obj6.students[0]," , ",obj6.courses[1]);

let obj7={
    mobiles:["redmi","oppo","vivo","realme","iqoo"]
}
console.log(obj7.mobiles[2]);

let obj8={
    employeeName:"Abdul",
    skills:["HTML","CSS","JavaScript","sql","MongoDb","python"],
    experience:"2 years"
}
console.log(obj8.skills[1]);

let obj9={
    name:"Abdul",
    skills:["HTML","CSS","JavaScript","React.js","sql","MongoDb","python"],
    age:23,
    location:"Bhimavaram"
}
console.log(obj9.name,obj9.age,obj9.location)

console.clear();


//-----------------Arithmetic Operators----------------

let nm1=10;
let nm2=50;
console.log(nm1+nm2);
console.log(nm1-nm2);
console.log(nm1*nm2);
console.log(nm1%nm2);
console.log(nm1%nm2);

console.log(2**5);

let nm3=10;
console.log(nm3+5);

console.clear();

//----------------Increment & Decrement----------------------

let n1=10;
++n1;
console.log(n1);

let n2=10;
n2++;
console.log(n2);

let n3=30;
--n3;
console.log(n3);

let n4=30;
n4--;
console.log(n4);

let n5=50;
let n6=50;
console.log(n5++);
console.log(n5);
console.log(++n6);
console.log(n6);


console.clear();


//------------Assignment Operators----------------

let a=20;
let b=10;
a+=30;
b+=30;
console.log(a);
console.log(b);

let aa1=50;
let bb1=20;
console.log(aa1-=bb1);
console.clear();

//------------------Comparison, Logical & Ternary---------------

let t1=25;
let t2=22;
console.log(t1<t2);
console.log(t1>t2);
console.log(t1<=t2);
console.log(t1>=t2);

let t3=50;
let t4="50";
console.log(t3==t4);
console.log(t3===t4);

let t5=20;
let t6=67;
console.log(t5>20&&t<67);
console.log(t5>=20||t<67);
console.log(!(t5<t6));

let _age=25;
let res=_age>=18?"Eligible":"Not Eligible"
console.log(res);

let marks=95;
let res1=marks>=35?"pass":"Fail";
console.log(res1);

console.clear();

