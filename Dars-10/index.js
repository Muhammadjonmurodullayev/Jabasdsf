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
// console.log(arr.toString(2));// Malumotlarni stringga o'tkazib beradi
//                                                                       -----------
// console.log(arr.join());///////////Malumotlarni sitringga o'tkazib beradi
// let arr = [2,3,4,5,6,5,4,6,3,5,3]
// console.log(arr.toString());
// console.log(arr.join(" "));
// arr.forEach( arr => {
//     console.log(arr);
// });
// let a = [1,2,33,4,5,6,7,7]
// console.log( typeof Map);
// let str = "Murodullayyev "
// let str1 = `Muhammadjon ${str} `
// let str2 = new String('Muhammadjon')
//     console.log(str2);
// const calendar = document.querySelector('.calendar');

// // Oyning nechta kuni borligini aniqlang
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();

// // Kalendar uchun HTML kodini yarating
// let calendarHTML = `
//   <div class="month">${month}</div>
//   <div class="year">${year}</div>
//   <div class="days">
// `;

// // Oyning har bir kuniga blok qo'shish
// for (let i = 1; i <= 31; i++) {
//   calendarHTML += `<div class="day">${i}</div>`;
// }

// // HTML kodini kalendar elementiga qo'shing
// calendar.innerHTML = calendarHTML + '</div>';
// arr.pop()//   arr eng oxiridan malumot o'chiradi
// arr.push(5)// err eng oxiridan malumot qoshadi
// arr.shift()// err boshidan malumot o'chiradi
//  arr.unshift(0)//err boshidan malumot qo'shadi
//  arr.splice(2, 3)// Bu asil arr ni o'zgartiradi
// arr.slice(2, 3)// Asil arrni ozgartirmaydi
// let arr2 = arr.slice(2,4)// Agar 2 ta qiymat biriktirsak shu ikita qiymatni ichidagi malumotlarni chiqarib beradi
// let arr2 = arr.splice(2,5)// Agar 2 taqiymat bersak shu qiymatlarni kesib olib chiqarib beradi
// arr.reverse()// Bu bizga arr ni teskarisiga ozgartirib beradi
// let arr = [0, 1, 2, 3, 4]
// console.log(arr);
// let arr = [2,3]
// for (i of arr){
//     arr=arr[i]+arr[i]
// }
// console.log(arr);
//                                              Homework
// let arr =[2,3]
// function get(son){
// let yigindi=0
// for(i=0;i<son.length;i++){
// yigindi+=son[i]
// }
// console.log(yigindi);
// }
// get(arr)
// let arr2 = [8, 2, 3,4,5,6,7,1,0];
// let arr1 = [{
//     name:"Muhammadjon",
//     surname:"Murodullayev"
// }];
// // let arr2 = ["Apple","Nok","olma","Awewer"];
// // console.log(arr1.sort((a,b) =>b-a ));//Bu bizga
// // console.log(arr2.sort((a,b) => a.localeCompare(b) ));
//  let some= arr2.some((valyus,index)=>{
//     console.log(valyus);
//     return valyus>0;
// })
// console.log('some');
// let sum =0
// name.forEach((valyus) => {
//     sum+=valyus

// });
// console.log(sum);
//     let arr = [1,2,3,4]
// let sum =arr.reduce((prev,valyus)=>{
//     // console.log(prev,valyus);
//     return prev+3;
// },0)
// console.log(sum);
// let arr1 =["muhammadjon","azizbek","ozodbek","Bekki"]
// arr1.sort((a,b)=>{return a.localeCompare(b)})
// arr.sort((a,b)=> a-b)
// let res = arr.filter((valyus,index)=>{
//     // valyus,index
//     return true;
// })
// console.log(res);
// let res = arr.map((valyus)=>{
//     // console.log(valyus);
//     return 10;
// })
// console.log(res);
// console.log(arr.map((valyus)=> {
//     return valyus<10;
// }));
// // let res = Array.from("muhammadjon", (valyus) => valyus.toUpperCase())
// console.log(res);
// let res = Array.from("zik", (valyus) =>valyus.toLowerCase() )
// console.log(res);
// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.5, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.2, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damaz" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracer" },
// ]
// ============================================================================================================================
// let res = users.filter((v)=>{
//     return v.year<2000;
// })
// console.log(res);
// // ==============================================================================================================================
// let res =users.filter((v)=>{
//     return v.year>2010
// })
// console.log(res);
// ===================================================================================================================================
// let res =users.sort((a,b)=>{
//    return a.engine-b.engine
// })
// console.log(res);
// ===================================================================================================================================
// let res = users.sort((a,b)=>{
//     return a.year-b.year
// })
// console.log(res);
// ===================================================================================================================================
// let res =users.sort((a,b)=>{
//     return a.name.localeCompare(b.name)
// })
// console.log(res);
// ===================================================================================================================================
// function get(data){
//     let res =data.map((v)=>{
//         return v.year<2000 ?{...v,status:"Eski"}:v
//     })
// users=res
// console.log(users);
// }
// get(users)
// ===================================================================================================================================
// function get(data) {
//     let res = data.map((v) => {
//         return v.year < 2010 && v.year > 2000 ? { ...v, status: "O'rta" } : v
//     })
//     users = res
//     console.log(users);
// }
// get(users)
// ===================================================================================================================================
// function get(data) {
//     let res = data.map((v) => {
//         return v.year < 2022 && v.year > 2010 ? { ...v, status: "Yangi" } : v
//     })
//     users = res
//     console.log(users);
// }
// get(users)
// // ===================================================================================================================================
// let arr1 = [4,5,6,7,8,9]
// console.log(arr.toString());
// console.log(arr.concat(arr1));
// console.log(Array.isArray(arr1));
// console.log(arr.length);
// arr.pop()
// arr.pop()
// arr.pop()
// arr.push(3)
// arr.shift()
// arr.shift()
// arr.shift()
// arr.unshift(2)
// arr.unshift(2)
// console.log(arr.slice(2,6));
// let res=arr.splice(2,6)
// console.log(res);
// console.log(arr.indexOf(1,2));
// console.log(arr.lastIndexOf(7));
// console.log(arr.includes(7));
// console.log(arr.reverse());
// let arr1 = "12345678"
// console.log(arr.join());//-------- arr string
// console.log(arr1.split());//-------sitring arr
let arr = [1, 2, 3, 4, 5, 6, 7, 8]// yig'indisini chiqarib bersin
let arr1 = ["webbrain","Academiy"]// 2 ta malumot bor
























