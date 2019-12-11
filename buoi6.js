//built in function 
//5 - 10
// const number = (Math.random()*5)+5

//Ham lam tron
// const number1 = 1.5

//console.log(Match.round(number1))

//Lam tron xuong
//console.log(Math.floor(number1))

//Lam tron len
//console.log(Math.ceil(1.01))

// var a=7
// var b=6
// Tim so lon nhat
// console.log(Math.max(a,b))


//Handle Object

// const hai={
//     name:'lam hoang hai',
//     age:21,
//     date:25,
// }

// delete hai.name
// console.log(hai)

// console.log(Object.keys(hai).length)

//Prototype
// function Person(name,age){
//     this.name = name
//     this.age = age
//     this.showName = function(){
//         console.log(age)
//     }

// }
// Person.prototype.showName = function(){
//     console.log(this.showName)

// }


// const hai = new Person('lam hoang hai',5)
// const hau = new Person('lam hoang hai',5)
// console.log(hai == hau)

//Toan tu 3 ngoi
// var a = 3
// var b = 1

// console.log(a > b ? "A lon hon B" : "B lon hon A")

//Funtional scope 
//Block Scope : { }
// var a = 5

// function show(){
//     a = 2 // Cuc bo co the truy cap toi toan cuc
//     console.log(a)
// }
// show()
// console.log(a)

// var a = 1;

// var b = {
//   a: 2,
//   foo: function() {
//     console.log(this.a);
//   }
// };

// b.foo();

// var fooCopy = b.foo;

// fooCopy.bind({'5'})()
// fooCopy()

//Hoisting

// console.log(a)
// var a

//Khi dung a. No se lap tu khoi tao ra a cho viec su dung
// function show(){
//     console.log(a)
//     var a =5
// }
// show()

//Su dung let , const : tranh tinh trang redecle
// let a = 5
//  let b = 10

// console.log(a)

//Cac function context va bind
//Phan loai tu khoa this 
var mouse ={
    name: 'Mickey',
    sayhi : function(){
        console.log("hi my name is",this.name)
    }
}
var say = mouse.sayhi.bind({name:'hai'}) ()
//say()