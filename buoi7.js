
//On lai buoi 6
// const numbers = [1,2,3,4,5,6,7,8]
//TH1
// const newNumbers = numbers.map(function (value){
//     return value
// })

//TH2
//  const newNumbers = numbers.map(value => (value*2))
// console.log(newNumbers)


// var a={
//     name:'hai',
//     run:function(){
//         var run2 =function(){
//             console.log(this.name)
//         }
//         run2.bind(this)()
//     }
// }
// a.run()




//Template String
// const sayhi = 'say hi'

// const haisayhi = `hai ${sayhi}`

// const haisayhello=`hai ${sayhi}`

// console.log(haisayhello)




// function showName(){
//     console.log(typeof arguments)
// }
// showName("hai","hau","hoang")



// var a = {
//     0 : 'phat',
//     1 : '10',
//     length : 2
// }
  
//   console.log(Array.from(a))



//Default parameter
function tinhTong(a,b = 0){
    console.log(a+b)
}
tinhTong(10)


function greeting(name,age){
    console.log(`Hi ${name}, i am ${age}`)

}
greeting.call(null,'hai',10)