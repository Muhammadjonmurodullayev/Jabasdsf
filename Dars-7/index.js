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

// let log  = {
//     name:"Muhammadjon",
//     surname:"Murodullayev",
//     pw : {
//         age: 18,
//         name:"Webbrain"
//     }
// } 
// const {name, surname} = log;   
// // console.log(pw.age);
// function makeuser (){
//     return{
//         name:"john",
//         ref:this
//     }
// }
// let user = makeuser()
// // console.log(user.ref.name);

// let ladder ={
//     step:0,
//     up(){
//         this.step++;
//     },
//     down(){
//         this.step--;
//     },
//     showstep:function(){
//         console.log(this.step);
//     }
// }
// ladder.showstep()
// let obj={
//     name:"Muhammadjon",
//     surname:"Murodullayev",
//     age:18
// }
// while(obj.name){
//     console.log(obj);
// }
// // console.log(obj);
// let obj1 = {name:"webrain"}
// // let obj2 ={ surname:"Academy"}
// let obj3 = obj1
// // console.log(obj1==obj3);
// // console.log(obj1===obj2);
// let a= 10
// let c=a
// console.log(a==c);
// console.log(a);
// ==========================---//Garbich colekshin biz ishlatib bolganimizdan keyin o'chirib yuboradi
// function get(name){
//     console.log(name);
// }
// // console.log(obj.get('name'));
// let obf = {
//     name: "Academy",
//     // get() {
//     //     console.log(`Webbrain ${this.name}`);

//     // },
//     get:function()
//     {  return  ()=>{
//         console.log(`webrain ${this.name}`);
//                  }
// }
// }
// obf.get()()
let obj = {
    name: 'Muhammadjon',
    core: 'hsdsd',
    age: 'sdnsd',
    eyes: 'sdhfsdh'
}
// let arr = Object.values(obj)
for(i in obj){
    console.log(obj[i]);
}
for (n in i) {
    if (typeof obj[n] == "string") {
        obj[n] = "Dilmurod"
    }
}
console.log(obj);




























