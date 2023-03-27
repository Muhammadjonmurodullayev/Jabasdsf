// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.5, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.2, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damaz" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracer" },
// ]
// // =====================================================================================================================================================
// ,                       R - Read Malumotni ekranga chiqarishimiz ( Read == o'qish degani ) hisoblanadi
// const getyear = () => {
//     let res = users.sort((a,b) => a.year - b.year)
//     users=res
// }
// getyear()
// console.log(users);
// =====================================================================================================================================================
//                         R - Read Malumotni ekranga chiqarishimiz ( Read == o'qish degani ) hisoblanadi
// const getAlfabit=()=>{
//     let res=users.sort((a,b)=>a.name.localeCompare(b.name))
//     users=res
// }
// getAlfabit()
// console.log(users);
// =====================================================================================================================================================
//                                                    Delete
// const getdelete=(id)=>{
// let res =users.filter(valyus => valyus.id !== id)
// users=res
// }
// getdelete()
// console.log(users);
// =====================================================================================================================================================
//           Ichida nechta katta harf bor yoki yo'q ligini tekshirib beradi
// let arr = "WeBBrain aCCademiy"
// let res = 0
// let res1 = 0
// for (i of arr) {
//     if (i === i.toUpperCase() && i !== " ") {
//         res++
//     }
//     else if(i === i.toLowerCase()&& i !== " "){
//         res1++
//     }
// }
// console.log(`${res}-ta kata harf
// ${res1}-ta kichkina harf`);
// ====================================================================================================================================
// stringda berilgan ("@") su belgini chiqarib yuborish
// let str = "Webb@in Ac@demiy"
// let res= ""
// for (i of str) {
//     if(i == "@"){
//         res+=i="a"
//     }else{
//         res+=i
//     }
//     str=res
// }
// console.log(str);
// ====================================================================================================================================
// let str = "webbbraiiiin accaddemmy"
// let res = ""
// for (i of str) {
//     if (i == i + i) {
//         res1+=i
//     }else{
//         res+=res+i
//     }
// }
// console.log(res);
// ================================================================================================================
//                   stringni ichida nechta harf qatnashgan?
// function get(str){
//     let res={}
//     for(i of str){
//         if(res[i]){
//             res[i]++;
//         }else{
//             res[i]=1;
//         }
//     }
//     console.log(res);
// }
// get("webbbrain")
// ==============================================================================================================
//                             sitring ichidagi sonlarni topish
// let num = "web3b5rain"
// let str = 0
// let son = 0
// for (i of num) {
//     if ( i== i.toUpperCase()) {
//         str++;
//     } else {
//         son++;
//     }

// }
// console.log(`${str}-ta son`);
// ==============================================================================================================
//                                    Harflarni 2 taga ko'paytirib beradi
// let str = "webrain"
// let res = ""
// for (i of str) {
//   res+=i+i
// }
// console.log(res);
// ==============================================================================================================
//             so'zni palindirom yoki palindirom emasligini
// let res="non"
// let str =""
// for(i=res.length-1;i>=0;i--){
// str+=res[i]
// }
// if(str==res){
//     console.log("Palindirom");
// }else{
//     console.log("Palindirom emas");
// }
// ==============================================================================================================
//                                                    Harfni oldida nechtaligini chiqarib beradi
// function text(str) {
//   let res = ""
//   let count = 1
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++
//     } else {
//       res += str[i]
//       if (count > 1) {
//         res += count
//         count = 1
//       }
//     }
//   }
//   console.log(res)
// }
// text("weebbbrrrraaaaaiiiiiinnnnnnn")
// ============================================================================================================================================================
//                                 Taqqoslash 
// let str = "web"
// let str1 = "bew"
// function get(str, str1) {
//     let res = str.split("")
//     let res1 = str1.split("")
//     res.sort((a, b) => { return a.localeCompare(b) })
//     res1.sort((a, b) => { return a.localeCompare(b) })
//     res = res.toString()
//     res = res1.toString()
//     console.log(res == res1);
// }
// get(str, str1)
// ============================================================================================================================================================
//                   Objectni ichidagi age larni yig'indisi
// let obj = {
//     name: "Webbarain",
//     age: 2,
//     child: {
//         age: 4,
//         name: "Webbrain",
//         child: {
//             age: 3,
//         }
//     }
// }
// let a = 0
// while (obj) {
//     a += obj.age
//     obj = obj.child
// }
// console.log(a);
// ============================================================================================================================================================
//                    valyularini qo'shishi
// let obj = {
//     id: 1,
//     name: "webbrain",
//     offline: true,
//     online: true,
//     invidual: false,
//     dfgh:false,
//     ghjkjhg:"dsfdgf"
// }
// let res = Object.values(obj)
// let res1 = res.filter((values) => {
//     return typeof values == "boolean"
// })
// console.log(res1);
// ============================================================================================================================================================
//                                Ikkita bolganlarni chiqarib yuborish Dupleceytet
// let str = "weeebbbraaaiiinn";
// function deldeb(string) {
//     let res = "";
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] !== string[i + 1]) {
//             res += string[i];
//         }
//     }
//     console.log(res);
// }
// deldeb(str);
// ============================================================================================================================================================
//                                              Faqat 2 xonali sonlarni chiqarish
let num = [12, 34, 567, 12, 111, 23, 77, 84]
let num1 = num.filter((valyus) => {

    return valyus < 99
})
console.log(num1);
// ============================================================================================================================================================
let num = [12, 34, 567, 12, 111, 23, 77, 84]
let num1 = num.filter((valyus) => {

    return valyus < 99
})
console.log(num1);let num = [12, 34, 567, 12, 111, 23, 77, 84]
let num1 = num.filter((valyus) => {

    return valyus < 99
})
console.log(num1);




