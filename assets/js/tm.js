
// let x=0.2+0.1;
// console.log(x)

// let y=(0.2*10+0.1*10)/10;
// console.log(y)

// let z=123e3;
// console.log(z)

// let x=10;
// let y=20;

// let z="the result is:"+(x+y);
// console.log(z)

// let x=10;
// let y=20;
// let z="30";

// let res=x+y+z;
// console.log(res)

// let x="100";
// let y="10";

// let z=x+y;
// console.log(z);
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z))

// let x=100/"apple";
// console.log(x);
// console.log(isNaN(x))

// let x=NaN;
// let y="5";
// let z=x+y;

// console.log(z);
// console.log(isNaN(z));

// let x=2/0;
// let y=-2/0;

// console.log(x);
// console.log(y);

// let x=0xFF ;
// console.log(x)

// let my=32;
// console.log(my.toString(32));

// console.log(my.toString(16));
// console.log(my.toString(12));

// console.log(my.toString(2))

// let x=500;
// let y=new Number(500);

// console.log(x);
// console.log(y);
// console.log(x==y)

// let x=new Number(500);
// let y=new Number(500);

// console.log(x===y)


// console.log(Number.isSafeInteger(1010));

// let x=123;
// console.log((100+23).toString());

// let x=9.65;
// console.log(x.toExponential(6));

// let x=4.86;
// console.log(x.toFixed(0));

// let x=9.656;
// console.log(typeof(x))
// console.log(x.toPrecision(6))

// console.log(Number("10.33"));
// console.log("john");

// let x=Number.EPSILON;
// console.log(x)

// let x=Number.MAX_VALUE;
// console.log(x)

// let x=6;
// console.log(x.MAX_VALUE)

// let x=Number.NaN;
// console.log(x)

// let text=`The quick
// brown for 
// jumps over
// the lazy dog`;

// console.log(text)

// let y=new String("john");
// console.log(y)

// let x="john";
// console.log(x)

// console.log(x===y);

// let text="piyush";
// console.log(text.length)

// let text="hello world";
// console.log(text.charAt(4));
// console.log(text[4])

// let te="hello world";
// console.log(te.charCodeAt(1))

// console.log(te.charAt(1))
// console.log(te.at(4))

// let text="apple, banana, kIWI";
// // console.log(text.slice(7,17));

// // console.log(text.slice(-12,-2))
// // console.log(text.substring(4,10))

// // console.log(text.substr(-8))
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// let t1="hello";
// let t2="world";

// console.log(t1.concat(" ",t2));

// let t="   hello world   ";
// console.log(t.trim())

// let text="5";
// let pad=text.padEnd(6,"x");
// console.log(pad)

// let num=5;
// let text=num.toString();
// let pad=text.padEnd(4,"0");

// console.log(text)
// console.log(pad)

// let text="hello world";
// console.log(text.repeat(4))

// let text="please visit microsoft! visit";
// console.log(text.replace("/Visit/i","w3schooles"));

// let text="hello Cats of world Cats"
// // console.log(text.replaceAll(/CATS/i,"dogs"));
// console.log(text.split(""))

// let text="please locate where 'locate' occurs!";
// console.log(text.indexOf("locate"));

// console.log(text.indexOf('locate',15));
// console.log(text.search(/locate/))

// let text = "The rain in SPAIN stays mainly in the plain";

// console.log(text.match(/ain/gi))
// console.log(text.matchAll(/aim/g))

// console.log(text.includes("in",12));

// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("world",6));

// let text=`hello world`;
// console.log(text)

// let firstName="john";
// let lastName="Doe"

// console.log(`welcome ${firstName}, and  ${lastName}`);

// const fr=["banana","orange","apple","mango"];
// console.log(fr.length);
// console.log(fr.toString());
// console.log(fr);
// console.log(fr.at(2));
// console.log(fr.join(" * "))
// console.log(fr.push("lichy"))
// console.log(fr)
// console.log(fr.pop())
// console.log(fr)

// console.log(fr.shift());
// console.log(fr.unshift("gapse"));
// console.log(fr)
// const my=["cecilie","lone"];

// console.log(fr.concat("gapse"));
// console.log(fr)
// console.log(fr.copyWithin(2,1));
// console.log(fr);
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits.copyWithin(2,0,2))

// const myarr=[[1,2],[3,4],[5,6]];
// console.log(myarr.flat())

// const fr = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fr.splice(2,2,"lemon","kiwi"));
// console.log(fr)

// const mn=["jan","feb","mar","apr"];
// console.log(mn.toSpliced(2,1,"dec"))
// console.log(mn)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(fruits)
// console.log(citrus)

// console.log(fruits.findIndex("Lemon"))

// const num=[3,4,7,1200,9,5]
// console.log(fruits.sort())

// let n=num.sort((a,b)=>{
//     return b-a;
// })
// console.log(n)

// console.log(fruits.toSorted())

// let num=[45,4,9,16,25];


// let n=num.map((e)=>{
//     return e*2
// })
// console.log(n)

// let my=[1,2,3,4,5,6];
// let m=my.flatMap((x)=>x*2);
// console.log(m)

// let over=my.filter((e)=>{
//     return e>4;
// })
// console.log(over)

// let sum=my.reduce((occ,funn)=>{
//     return occ+funn;
// })
// console.log(sum)

// const num=[45,4,9,16,25];
// let n=num.some((e)=>{
//     return e>18;
// })
// console.log(n)

// console.log(Array.from("PIYUSH"))

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.entries());

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(myMonths)

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];

// console.log(year)

// const fr= ["Apple", "Orange", "Apple", "Mango"];
// console.log(fr.lastIndexOf("Apple")+1)

// const numbers = [4, 9, 16, 25, 29];
// let fr=numbers.find(numbers);

// console.log()

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// const temp = [27, 28, 30, 40, 42, 35, 30];
// let high = temp.findLastIndex(x => x > 40);
// console.log(high)

// const d=new Date();
// console.log(d)

// const d=new Date("october 13, 2014 11:13:00");
// console.log(d)

// const d = new Date(2019, 3, 24, 10, 33, 30);
// console.log(d);

// const d=new Date(9,11,24)
// console.log(d)

// const d=new Date(24*60*60*1000);
// console.log(d)

// const d=new Date("25 mar 2015");
// console.log(d)

// const e=new Date("january 25 2015");
// console.log(e)

// const d=new Date("2021-03-25");
// // console.log(d.getFullYear())

// console.log(d.getMonth()+1)

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d=new Date("2021-03-25");
// let month=months[d.getMonth()];
// console.log(month)

// console.log(d.getDate());
// console.log(d.getHours())
// console.log(d.getMinutes());

// console.log(d.getSeconds())

// const d=new Date();
// console.log(d.setFullYear(2020,11,3));

// const d=new Date();
// console.log(d.setMonth((11)))

// const d=new Date();
// console.log(d.setDate(15));


// console.log(Math.sqrt(64))

// console.log(Math.abs(-4))

// console.log(Math.sin(90*Math.PI/180));

// console.log(Math.min(150,30,20));

// console.log(Math.log2(8));

// console.log(Math.log10(1000))

// console.log(4000(Math.floor(Math.random())));

// console.log(Math.floor(Math.random()*100)+1);

// let min=4000;
// let max=8000;

// console.log(Math.floor(Math.random()*(max-min))+min)

// console.log(Math.floor(Math.random()*4000)+4000)

// console.log(Math.floor(Math.random()*(15-5))+1);

// let min=4000;
// let max=8000;

// let num= Math.floor(Math.random()*(4000+1));
// // console.log(min+num)
// console.log(num)
 
// let x=false;
// console.log(Boolean(x))
// console.log(typeof(x))

// let y=new Boolean(false);
// console.log(y)
// console.log(typeof(y))

// let age=21;
// let voteable=(age<18)?"Too young":"old enough";
// console.log(voteable)

// console.log(2>"12")

// let name="piyu";
// let text="missing";
// let res=name??text;

// console.log(res)
// let n=[[1,2],[3,4],[5,6]];
// console.log(n.flat())

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

// console.log(day)

// console.log(new Date().getDay())

let x = 1;
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

console.log(text)