document.getElementById("loginbtn").onclick=alertuser

let username="bro"
let inbox=1
 function alertuser(){
alert(username+"you have "+inbox+"new messages")
 }
 console.log(this)

 //  FUNCTION EXPRESSION
let count=0
document.getElementById("increasebtn").onclick=function(){
    count+=1
    document.getElementById("text").innerHTML=count

}
document.getElementById("decreasebtn").onclick=function(){
    count-=1
    document.getElementById("text").innerHTML=count
}
/*
function increaseCount(){
    count+=1
    document.getElementById("text").innerHTML=count
}

function decreaseCount(){
    count-=1
    document.getElementById("text").innerHTML=count
}
*/

addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
  for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    //...
  }
}

function addJuice(container) {
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
    //...
  }
}

let counter=2
count=count++
console.log(count)
