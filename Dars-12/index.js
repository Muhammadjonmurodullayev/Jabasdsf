//                                  Distirakcha
// let name="webbrain"
// let obj={
//     name:"webbrain",
//     title:"It center",
//     info:{age:18}
// }
// // let {name:web,title,info:{age}}=obj
// // console.log(info);
// // console.log(web);
// function getdata({name,title,info:{age}}){
//     console.log(name,title,age);
// }
// getdata(obj)
// let arr =["webbrain","it center","academiy"]
// // let [bir,ikki,uch]=arr
// // console.log(ikki);
// function getdata([bir,ikki,uch]){
//     console.log(bir,ikki,uch);
// }
//  getdata(arr)
// ======================================================================================================
// console.log(time.getHours());//------Soatni chiqarib beradi
// console.log(time.getMinutes());//------Minutinini chiqarib beradi
// console.log(time.getSeconds());//------Sekundini chiqarib beradi
// console.log(time.getMilliseconds());//------Millisekundini chiqarib beradi
// =============================================================================================
// console.log(time.getDate());//----Kunni chiqarib beradi
// console.log(time.getDay());//-----Hafata kunini chiqarib beradi
// console.log(time.getFullYear());//---Nechanchi yilligini chiqarib beradi
// console.log(time.getMonth());//---Oylarni chiqarib beradi
// let time = new Date()
// let data=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
// console.log(data);
// =========================================================================================================================
let arr = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"]
let arr1 = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
const get = (data) => {
    let time = new Date()
    if (data == "") {
        console.log("en");
    }
    else if (data == "LTS") {
        console.log(`${time.getHours() % 12}:${time.getMinutes()}:${time.getSeconds()} PM`);
    } else if (data == "LT") {
        console.log(`Today: ${time.getHours() % 12}:${time.getMinutes()} PM`);
    } else if (data == "L") {
       console.log( time.getMonth()<10?`0${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`:`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`);
    } else if (data == "l") {
        console.log(`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`);
    } else if (data == "LL") {
        console.log(`${arr1[time.getMonth()]} ${time.getDate()},${time.getFullYear()}`);
    }else if (data == "ll") {
        console.log(`${arr1[time.getMonth()].slice(0,3)} ${time.getDate()},${time.getFullYear()}`);
    }else if (data=="LLL"){
        console.log(`${arr1[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()} ${time.getHours()%12}:${time.getSeconds()} PM`);
    }else if (data=="lll"){
        console.log(`${arr1[time.getMonth()].slice(0,3)} ${time.getDate()}, ${time.getFullYear()} ${time.getHours()%12}:${time.getSeconds()} PM`);
    }else if (data=="LLLL"){
        console.log(`${arr[time.getDay()]}, ${arr1[time.getMonth()]}, ${time.getFullYear()} ${time.getHours()%12}:${time.getSeconds()} PM`);
    }else if (data=="llll"){
        console.log(`${arr[time.getDay()].slice(0,3)}, ${arr1[time.getMonth()].slice(0,3)}, ${time.getFullYear()} ${time.getHours()%12}:${time.getSeconds()} PM`);
    }
}
get("")