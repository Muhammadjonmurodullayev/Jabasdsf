// let name = { name: 'Muhammadjon' }
// let surname = { surname: "Murodullayev" }
// console.log(Object.assign(name, surname));// Yani objet assign ikkita objectni bir biriga qo'shadi.
// console.log({...name,...surname});// bu siprit opereytori ikkita objektni bir biriga qo'shib  beradi.bu "{...name,...surname}" manashunday yoziladi
// Objectlar keys va valyudan tashkil topgan.
// let ins = { 
//     name:"Muhammadjon",
//     surname: "Murodullayev", 
// getname() {
//     console.log(this.name,this.surname);// this - function ichida objectlarni chaqirishimiz uchun this ishlatiladi u faqat arrfun da ishlamiydi qolgan functionlarda ishlaydi
// }
// }
// ins.getname()
// let add =Object.entries(muhammadjonins)//keys va values dan tashkil topgan
// // console.log(Object.fromEntries(add));//manashu erreydan objektga o'tish
// let name = "It center ";
// let ins = { 
//         name:"Muhammadjon",
//         surname: "Murodullayev", 
//     }
//     const {name:muham} = ins; // yani bu distirakcha deyiladi. biz "." nuqta bilan emas shunchaki keysni o'zini yozib chaqiramiz
//   console.log(muham);
// surname.name = "Otabek";
// delete name.name
// console.log({...name,...surname});
// login.getname()
// getname(){
    // let arr = Object.entries(ar);
    // console.log(Object.entries(ar));
    // console.log(Object.fromEntries(arr));

let log  = {
    name:"Muhammadjon",
    surname:"Murodullayev",
    pw : {
        age: 18,
        name:"Webbrain"
    }
} 
const {name, surname} = log;   
console.log(pw.age);


































  
