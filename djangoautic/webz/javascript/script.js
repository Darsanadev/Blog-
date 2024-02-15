console.log("heyy");

let name=("arun")

let age=25
age=age+1

console.log(age+2)
console.log(name+1)

let students=10

 let extrastdnt = students+5
 let extrastdnts = students%5
 console.log(extrastdnts)

 students+=5
 //students%=5
 //students*=2
 console.log(students)


 //let input=window.prompt("i love pizza")
 //console.log(input)


document.getElementById("mybutton").onclick=function hey(){


 username=document.getElementById("mytext").value
 console.log(username)
 document.getElementById('labell').innerHTML='heyu'+username
 document.getElementById("h1").innerHTML="hello"+username

}

//let bday=window.prompt("Enter your age")
//bday=Number(bday)
//bday +=1
//console.log(" happ birthday you age is"+bday+"congrats")

let x;
let y;

x=Number("hfyuyuv")
console.log(x,typeof x)


document.getElementById('btn').onclick=function(){
dis=document.getElementById("place").value
console.log(dis)
document.getElementById("label").innerHTML="gdmrng"+dis
}

//let bdayy=prompt("Enter you bdayy")
//console.log(bdayy)
//bdayy=Number(bdayy)
//bdayy=bdayy+1
//alert("happy bdayy you have "+bdayy+"year old")

console.log(1+'1');

//Mathhhhh


 let ab =255
 let a=4
 let b=3;
 let z=2
 let maximum


//a=Math.round(ab)
//a=Math.abs(ab)
//a=Math.sqrt(ab)
maximum=Math.max(a,b,z);
maximum=Math.min(a,b,z)

    console.log(maximum);
    //Hypotenuous of right angel triangle using math function

let q;  
let r;
let s;  

//q=prompt("Enter the side q:")
//q=Number(q)
//r=prompt("Enter the  side r:")
//r=Number(r)

s=Math.sqrt(Math.pow(q,2)+Math.pow(r,2))
console.log("side of s :",s)

document.getElementById("submitbutton").onclick=function hy(){
    d=document.getElementById("dtext").value
    d=Number(d)
    f=document.getElementById("ftext").value
    document.getElementById("glabel").innerHTML=f
    f=Number(f)
    g=Math.sqrt(Math.pow(d,2)+Math.pow(f,2))
 
    document.getElementById("glabel").innerHTML="side of c:"+g
    
     
}
  