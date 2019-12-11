// var number =5 //number
// var name= "lam hoang hai" //string
// var hai ={name:'hai',age:10} //object
// var array  = [1,2,3,4,5,6]    //object
// var specialundified= undefined  //undefined
// var specialNull = null //object
// var specialfunction = console.log //function
// console.log(typeof specialfunction) 


//13- Array Method
// const numbers = [1,2,3,4,5]

// Them phan tu vao vi tri cuoi cung
//numbers.push(6,7,8)
// console.log(numbers)

//Xoa phan tu vi tri cuoi cung
//numbers.pop()

//Them phan tu vi tri dau tien
//numbers.unshift(-1,0)

//Xoa phan tu vi tri dau tien
 //numbers.shift()

//Them phan tu vao giua mang
// numbers.splice(1,2,3,4,5)
//  console.log(numbers)

//14- Call back tham so


// function tinhtong(a ,b){
//         return a + b;
// }

// function showLog(fun){
//     console.log(fun)
// }
// showLog(tinhtong(5,10))


// var giangvien ={
//     name:"Duong Thanh Phet",
//     thoigianlam: function(dosth){
//         console.log("Thoi gian lam luc 7h ")
//         dosth()
//     }
// }
// function tanca(){
//     console.log("Tan ca luc 22h")
// }

// giangvien.thoigianlam(tanca)


/**
 * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó.
 * Sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */

function double(num) {
    
}

function sumAndDo(nums, callback) {

}

sumAndDo([1, 2, 3], double);


