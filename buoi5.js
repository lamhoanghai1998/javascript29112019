//Array map
// const numbers=[1,3,5,7,9]


// const newnumbers = numbers.map(function(value,index,Array){
//     if(value >= 5){
//         return value*2
//     }
//     return value
    
// });
// console.log(newnumbers)


// Array.prototype.myMap = function(fn){
//     var output= []
//     for(var i = 0; i< this.length; i++){
//     const value = fn(this[i]);
//     output.push(value)
//     }
//     return output;
// }


// const newnumbers = numbers.myMap(function(value){
//     return value*2;
// });
// console.log(newnumbers)


// function namesOnly(arr) {
//     const newArray = arr.map(function(Object){
//     return Object.name;
// })
// return newArray;
// }


// console.log(namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]))
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// const name = ['hai','hau','hoang','hung','tun']

// const newName = name.filter(function(value){
//     if(value ==='hi') return false
//     return true;
// })
// console.log(name)

// function findFirstEvenNumber(array){
//     return array.find(function(item){
//     if(item %2 === 0)return true
//     return false
//     })
// }

// console.log(findFirstEvenNumber[1,1,1,1,1,1,1])


//Ham reduce
// const numbers =[1,2,3,4,5,6,7,8]

// const sum =  numbers.reduce(function(total,currentValue){
//     // console.log(total)
//     return total + currentValue
// },0)
// console.log(sum)


// const arrayUser = [
//     {id:1, name:'Teo',age: 5},
//     {id:2, name:'Ti',age: 3},
//     {id:3, name:'Tun',age: 7},
//     {id:4, name:'Tut',age: 9},
//     {id:5, name:'Tet',age: 1},
//]
// TH1
    // const sumAge = arrayUser.reduce(function(totalAge, currentAge){
    //     return totalAge + currentAge.age

    // },0)

    // console.log(sumAge)
//TH2
    
    // const sumAge = arrayUser.map(function(user){
    //     return user.age;
    // }).reduce(function(total,currentAge){
    //     return total + currentAge;

    // })
    // console.log(sumAge)


//Ham Sort
const numbers =[1,2,3,4,5,6,7,8]

//a - b >0, thi a dung truoc vab dung sau
const newNumbers = numbers.sort(function(a,b){
    return a - b  
});
console.log(newNumbers)