let count=0;

document.getElementById("decreasebtn").onclick=function(){
    count-=1;
    document.getElementById("text").innerHTML=count

}
document.getElementById("reset").onclick=function(){
    count=0
    document.getElementById("text").innerHTML=count

}
document.getElementById("Increasebtn").onclick=function(){
    count+=1;
    document.getElementById("text").innerHTML=count

}

let username="Darshuuuuu heyy"
console.log(username.length);
console.log(username.charAt(2))
console.log(username.lastIndexOf(-5))
console.log(username.trim())

let fullname="john daniel"

firstname=fullname.slice(0, 3)//slicing ()nte ulill index firstname strt and ending number
lastname=fullname.slice(5)
console.log(firstname)
console.log(lastname)

let usename="darshu"

let length=usename.charAt(0).toUpperCase().trim()
 lengh=usename.toUpperCase()
console.log(length)

let time=80

if(time<=10){
    console.log("good mrng")
}
else if(time>=90){
    console.log("good day")
}
else{
    console.log("good evng")
}

document.getElementById("spr").onclick=function(){

if(document.getElementById("checkbox").checked){
    console.log("You are subscribed")

}
else{
    console.log("You are not subsribe")

}
}
document.getElementById("buuu").onclick=function payment(){
const fst=document.getElementById("fst")
const snt=document.getElementById("snd")
const thr=document.getElementById("thrd")

if(fst.checked){
    console.log("You choose Online payment")

}
else if(snt.checked){
    console.log("You choose cards")

}
else if(thr.checked){
    console.log("You choose cash in hand")

}
else{
    console.log("plz choose any off payment")
}
}
//=assignment operator
//==comaprison 
//===strict equality operator compare two values and its datatype
//    same datatype is true number is same as lhs and rhs

let x="3.14"
   
if(x===3.14){
    console.log("this is pi")
}
else{
    console.log("not pi")
}

let fruit=20

if(fruit>0 && fruit<=20){
    console.log("its nice")

}
else{
    console.log("its not ")
}

let temp=-15
let suuy=true

if(!(temp>0)){
    console.log("its warn outside")
}
else{
    console.log("its cold outside")
}

if(!(suuy)){
    console.log("its cloudy outside")
}
else{
    console.log("its sunny outside")
}


//looopz


let usernme=""

while(usernme ==""|| usernme == null){
    usernme=prompt("Entetr you name")
}
console.log("hello",usernme)

while(1 == 2){
    console.log("Im stuck in infinite loop")
}

// for loop repeat a certain amoutnt of time 
//for( var i=10;i>0;i-=1){
 //   console.log(i)
//}
console.log("Happy New year")

/*for(i=1;i<=20;i+=1){
    (i==14){
        continue
    }
    console.log(i)
}
Nested loop

let symbol=prompt("Enter the symbo")
let row=prompt("Enter thr rows")
let colm=prompt("Enter the column")

for(var i=1;i<=row;i++){
    for(var j=1;j<=colm;j++){
        document.getElementById("myRect").innerHTML += symbol
    }
    document.getElementById("myRect").innerHTML += "<br>"
}
darshuu()

function darshuu(){
    console.log("Hey Darshuuu ")
}

let width=window.prompt("Enter the width")
let height=prompt("Enter the height")

areaaa=areaoftriangle()
console.log("area is",areaaa)
function areaoftriangle(){
    return width*height   
}
*/

//Ternary operator is Shorcut for if/else statemnt take 3 operands
            //1. condition ? 2.if true 3.false

    function agee(){
        let agee=88
        let  result=(agee>59)?"senior citizen":"nrml mahn"
        console.log(result)
    }
    agee()

    function checkwinner(win){
        win? console.log("You will Win!!"):console.log("You will Loss")
    }

    checkwinner(true)

    // multipe ?

    let age=prompt("Enter your age:")
    let message=(age<5)?"hello bae":
    (age<18)?"helooo":
    (age<100)?"senior":"what a dramastic age"
    console.log(message)

    
    // let and var
    // let = variables are limited to block scope(like for loop nte ulill matrm) 
    // var = variables are limited to a function(function nte ulill matree call cheyan patuluu)
lets()
function lets(){
    for(var i=1;i<=3;i++){
        console.log(i)
    }

}
    for(var i=1;i<=3;i++){
       // console.log(i)
    }
    console.log(i)
