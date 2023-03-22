// function get(str){
//     let b = ""
//     for (i = str.length-1; i > 0; i--) {
//         b += str[i]
//     }
//     console.log(b);
// }
// get("Muhammadjon")
// let str = "web"
// let res= ""
// for(i of str){
//     res+=i+i
// }
// console.log(res);
// let a = "muhammadjon"
// let res = ""
// for (i =a.length-1; i > 0; i--) {
//     res=res+a[i]
// }
// console.log(res);
// let a= "123456789"
// res = ""
// for(i of a){
// res+=i+i
// }
// console.log(res);

// let a = {
//     name: "Muhammadjon",
//     age: 2,
//     num: 3
// }
// for (i in a) {
//     if (typeof a[i] == "number") {
//         a[i] *= 2
//     }

// }
// console.log(a);
//                                         arr // Tarifi----faqat valyudan tashkil topgan malumot turiga aytiladi
// let arr =[]     //// arr ni belgisi
// let arr1 =[]// buni ichiga xoxlagan data turini kirita olamiz
// console.log(typeof arr);muh
// let obj ={
//     name:"Muhammadjon"
// }
//        pirmitoiv
// Number
// Boolean
// null
// undefined
// BigInt 
// String
// Symbol
//                none primitiv
// Object
// let arr = [2005, "Muhammadjon","Murodullayev",]
// console.log(arr[1],arr[2]);
// let arr = "web"
// let b = ""
// for(i = arr.length-1;i<0;i--){
//     b=b+arr[i]
// }
// console.log(b);
// console.log(Muhammadjon);
// let num  = [1,"Muhammadjon",Number,4,5,3,]// Arr nima? ==== faqatgina valyus tashkil topgan malumot turiga aytiladi 
// let srr =new Array()=======// Yangi arr yasab beradi.//
// console.log(num,srr);
// let arr2 =new Array("4")
// let arr1 =new Array(4)// 4 ta bo'sh arr elementi bor degani  
// arr[0]="A"
// let num = 12
// let arr = [4,2,5,5,4,6,3,7,`Muhammadjon ${num} `,4,6,4]
// console.log(arr)
// console.log(arr.at(1));
let arr = [2,3,[4,5,[6,5,4],6,3],5,3]
console.log(arr[2][2][2]);