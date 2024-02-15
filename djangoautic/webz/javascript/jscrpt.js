//template literal "" ''ozhivakiyaa 

let username="Darshu"
let item=30
let gotit=100

//console.log("You have",username)
//console.log(`You select item ${item} great`)
//console.log(`You have gotit${gotit} sprbb`)
 let text=`
 You have ${username}<br>
 You select item ${item} great<br>
 You have gotit${gotit} sprb`
 
 //console.log(text)
 document.getElementById("paraaa").innerHTML=text


 let mynum=12345.678

 //mynum=mynum.toLocaleString("en-US");
 //mynum=mynum.toLocaleString("hi-IN");
 mynum=mynum.toLocaleString("de-DE");

 console.log(mynum)


 document.getElementById("submit").onclick=function(){
    let temp;

    if(document.getElementById("cbtn").checked){
        temp=document.getElementById("temp").value
        temp=Number(temp)
        temp=toCelsius(temp)
        document.getElementById("h3").innerHTML=temp+""


    }
    else if(document.getElementById("fbtn").checked){

    }
    else{
        document.getElementById("h3").innerHTML="Selact a unit"
    }

 }
 let counter=2
 countt=counter--
 console.log(countt)

 /*


  <session id="menu-session" >
        <div class="row">
            <div class=" col-12  col-md-12" style="background-color: black;">
                <h1 class="headng"> Cheers to the coctail hour </h1>
                
                <img src="water.jpeg " style="margin-left: 50px; margin-top: 50px;">

                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-md-6">
                           
                        </div>
                    </div>
                    <p class="paraaa">semi-dry and delicious, perfect for sharing ... or not.</p>
                </div>
            </div>
        </div>
        <style>
            .paraaa{
                color: white;
                display: flex;
                justify-content: center;
             
            }
            .headng{
                color: white;
                text-align: center;
                font-size: 3em;
                margin-top: 70px;
                font-style: unset;
            }
        </style>


    </session>

 */
 
