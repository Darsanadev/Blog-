// Spread operator
let number=[1,2,3,4,5,6,7,8,9]
console.log(...number)

let usernme="bro code"
console.log(usernme)

let class1=["anju","john","mosh"]
let class2=["amen","abil","renju"]
 class1.push(...class2)
 console.log(...class1)

 let valuee=prompt("Enter your name:")
document.getElementById("btn").onclick=function(){
    
    document.getElementById("label").innerHTML=valuee
}

let smash=["leo","beautifull","moon","apple","sunlight"]
//for(result of smash)

console.log(smash.sort())


class students{
    constructor(name,age,place){
        this.name=name
        this.age=age
        this.place=place
    }
    study(){
        console.log(`heyy${this.name}  nyc to meet you` )
    }
}
const student1=new students("Abil",22,"kochi")
const student2=new students("tikuu",7,"plkd")

console.log(student1.name)
console.log(student1.age)
console.log(student1.place)
student1.study()

console.log(student2.name)
console.log(student2.age)
console.log(student2.place)

class purchase{
    constructor(name,price,quality){
        this.name=name
        this.price=price
        this.quality=quality

    }
    heuu(){
        console.log("heyy")
}
}
const heuuy=new purchase("cereve","$23",100)
const heuuyy=new purchase("cetaphil","$67",800)

 console.log(heuuy.name)
 console.log(heuuy.price)
 console.log(heuuy.quality)

 console.log(heuuyy.name)
 console.log(heuuyy.price)
 console.log(heuuyy.quality)