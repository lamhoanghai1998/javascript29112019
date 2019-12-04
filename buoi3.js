// 8 -- Function
//style : Camelcase

// function showName (name){
//     console.log(name)
//     return name;
// }

// console.log(showName('lam hoang hai'))

//(TH3) Phuong thuc ko co return 
// hoac return ve mot doi tuong chua khoi tao
//function showName


//BT 8
// Bài tập: Viết hàm tính thể tích khối hộp.
// Nhận vào các tham số như dưới, trả về thể tích của khối hộp.

// 
//  * Tính thể tích khối hộp
//  * https://www.wikihow.com/Calculate-Volume-of-a-Box
//  * @param {Number} w Chiều rộng
//  * @param {Number} h Chiều cao
//  * @param {Number} l Chiều dài
//  * @returns {Number} Diện tích
//  */
//  function getBoxVolume(w, h, l) {
      
    
//     return w*h*l
     

     
//   }
//    console.log(getBoxVolume(10, 20, 30));  //6000
//    console.log(getBoxVolume(4, 5, 6));  //120
  



//9 -- Object method
// const hai ={
//     name:'lam hoang hai',
//     age:5,
//     speakLanguage : function(){
//         console.log(this.name)
//     }

// }
// hai.speakLanguage()

// Khai báo biến `rectangle` là 1 object gồm có các property:
// * - width: chiều rộng, là 1 số bất kì
// * - height: chiều cao, là 1 số bất kì
// * Viết các method:
// * - getWidth: trả về chiều rộng
// * - getHeight: trả về chiều cao
// * - getArea: trả về diện tích
// *

// const rectangle={
//     width:10,
//     height:15,
    
//     getWidth: function(){
//         return this.width

//     },

//     getHeight: function(){
//         return this.height

//     },

//     getArea:function(){
//         return this.width*this.height
//     }
// }
//goi y code: console + space
//console.log(rectangle.getArea())


//10. Cac phep so sanh
// var a =5
// var b =6

//  **6 gia tri la false: 0, null, false, undefined, NaN, ''.
// if(undefined){
//     console.log("nhay vao if")
    
// }
// else{
//     console.log("nhay vao false")
// }

//console.log((a,b)) => Bieu thuc dau phay tinh gia tri bai trai va in ra ben phai 
//console.log(a+null) => null co gia tri la 0
//console.log(a+'') => mot gia tri cong cho chuoi => chuoi . VD: a + '6' => 56


// so sanh su dung == khi so sanh ve gia tri
// so sanh su dung === thi so sanh ve gia tri va kieu du lieu
// var a = '1555'
// var b = '5'


// if(a === b){
//     console.log("a bang b")
// }
// else{
//     console.log("a khac b")
// }


// Kieu object
// const teo = {name :5}
// const ti = {name :5 }

// if(teo === ti){
//          console.log("teo lon hon ti")
// }
// else{
//          console.log("teo be hon ti ")
// }


// 11. Vong lap
var arrayNames =['hai','hung','hau','huan']

for(var i = 0 ; i< arrayNames.length; i++){
    if(arrayNames[i]== 'huan'){
        continue
    }
console.log(arrayNames[i])
}