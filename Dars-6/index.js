//  // Objectlar                                               
//    let text ={name:"Muhammadjon",surname:"Murodullayev", year:2005
// }          
// console.log(text);          
//  kiy: valyu------deyiladi 
// kiy,name,indeketor-yani ko'rsatuvchi:yalyu         
// let account = {
// name:"Webbrain Academiy",
// major:"frontend",
// foundet:"2020"
// }`
// console.log(account);
// let obj = new Object();
// console.log(obj);
////////// Object ichidagi har bittasini olib kelish uchun ". nuqta" nuqtadan foydalanamiz
// let account = {
//   name:"Webbrain Academiy",
//   major:"frontend",
//   foundet:"2020",
//   "full name" : "Webbrain IT academiy"
// }
// console.log(account["full name"]);
// ikkita bo'g'indan iborat so'zlarni chaqirishimiz uchun "" ikkitalik qo'shtirnoqdan foydalanamiz
// biz raqamlar ham yozishimiz mumkin ularni chaqirganimizda ["1651651"] manashunday holatda chaqiramiz 
// yangi malumot qo'shish ucun masalan:"account.name = 2020;" Manashunaqa qilib qoshiladi 
//   console.log(account.major);
// console.log(account[key]);
// console.log(account["key"]);
let account = {
  name: "Webbrain Academiy",
  major: "frontend",
  foundet: "2020",
  "full name": "Webbrain IT academiy",
  }
account.year =2019
console.log(account); 
Object.freeze(account)----bu kodimiz malumotlarni o'zgartira olmasligimiz ucun ishlatiladi






