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
let str = "Webb@in Ac@demiy"
let res= ""
for (i of str) {
    if(i == "@"){
        res+=i="a"
    }else{
        res+=i
    }
    str=res
}
console.log(str);
// ====================================================================================================================================
