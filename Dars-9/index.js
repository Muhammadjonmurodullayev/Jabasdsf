// let n = 12000
// let bir = 0
// let nol = 0
// for (i = 0; i < n.length; i++) {
//     if (Number(n[i])) {
//         bir++;
//     }else{
//         nol++
//     }
// }
// console.log(bir,`Bir`,nol,`Nol`);
// let str ="webbrain"
// console.log(str[1]); // Bu bizga indexlar orqali har bitta harfini  chiqarib beradi 
// console.log(str.charAt(-3));
// console.log(str.at(-1));  
// console.log(str[-1]);
// console.log(str.charAt(-1));
// console.log(str.at(-1));  
// console.log(str.length);
// console.log(str.toUpperCase());// Bu bizga stringda yozilgan malumotlarimizni hammsini kotta harfga o'gartiradi
// console.log(str.toLowerCase());// Bu bizga stringda yozilgan malumotlarimizni hammsini kichkina harfga o'gartiradi
// console.log(str.indexOf("brain"));// Bu bizga o'zimiz yozgan so'zni text ichidan qidirib nechanchi indexdan boshlanishini aytib beradi.Yana agar noto'g'ti malumot kiritiksa bizga -1 natija qaytaradi
// console.log(str.indexOf("web",5));// Biz bunga 2 chi parametr bersak ham bo'ladi yani ( , ) verguldan keyin nechchi son yossak u son nechanchi indexdan boshlab qidirish bo'ladi
// console.log(n.indexOf("web",-5));
// console.log(n.lastIndexOf('web',10));//Bu lastIIndexof oxiridan boshlab qidiradi
// console.log(n.includes("webbrain"));// Bu bizga ichida shu soz bor yoki yo'qligini tekshirib beradi 
// let n = "+998997726700"
// console.log(n.startsWith("+99899"));// Bu bizga boshi manshu qiymat bilan boshlanganmi yoki yo'qligini aytib beradi 
// console.log(n.endsWith("00"));// Bu bizga oxiri shu qiymatt bilna boshlanganmi yoki yo'qligini aytib beradi 
// console.log(n.startsWith("web"));
// let n = "997726700"
// console.log(n.padStart(13, "+998"));// Boshiga shuni qo'shib qo'yadi
// console.log(n.slice(3,8));// Bu biszga nechanchi index den boshlab nechanchi indexgacha qirqib olishini aytib beradi 
// let n = "webbrain It academy"
// console.log(n.slice(9,15));Bu soni nechanchi indexdan nechanchi indexgacha qirqib olishi
// console.log(n.substring(3,8));// Bu ham slice ga o'xshagan nechanchi indexdan boshlab neechanchi indexgacha qirqib olishga aytiladi 
// console.log(eval(n));// Bu bizaga sitrinng ichidagi arifmetik amallarni bajarib beradi 
// console.log(eval(`2+5+96+7+8+2+85+96`));// Eval
// console.log(n.split(''));// Bu bizga malumotlarimizni erreyga o'zgartirib beradi 
// let n= '21.01.2005'
// console.log(n.concat(" Muhammadjon"));// Bu bizga ozgaruvchiga yozgan sozimizdan keyin consol dagi so'zni qo'shib beradi 
// let a =52
// console.log(String.raw`Muhammadjon ${a} `);//Bu bizga istaganimizdek String yasab beradadi 
// let a="Muhammadjon"
// console.log(a.indexOf(a,));
// console.log(a.indexOf("4A"));// Bu nechanchi indexdan boshlanishini aytib beradi 
// let a = "124A9568"
// console.log(a.search(/4/i));// Bu nechanchi indexdan boshlanishini aytib beradi 
// let n = "Muhammadjon"
// let n = String.raw`123456789876543212345678987654321234567898765432`//yangi string yasab beradi
// for(i in n){
//     console.log(i);-------------For in Yozgan yozuvlarimizni indexni chiqarib beradi 
// }
// let n = "Muhammadjon"
// for(i of n){
//     console.log(i);//-------------For of yozgan yozuvimizni har bitta harfini chiqarib beradi 
// }
// console.log(n.length);
// let s = "Muhamadjon"
// console.log(s.localeCompare("Muhamadjon"));// Bu bizga ( -1  0  1  ) qiymat qaytaradi.
//                                Homework
// if(str1.localeCompare(str2)){
//     console.log("Umuman to'g'ri emas");
// }
// }else if (str1.localeCompare(str2)){
//     console.log("Qisman to'g'ri");
// }else{
//     console.log("Yuz foin to'g'ti");
// }
// let str1 = "Webbrain"
// let str2 = "brain"
// switch (str1.localeCompare(str2)) {
//     case -1: console.log("Umuman to'g'ri emas"); break
//     case 0: console.log("Yuz foiz to'g'ri"); break
//     case 1: console.log("Qisman to'g'ri"); break
// }
// let str = "Webbrainacademiy"
// let res = {};
// for (i of str) {
//     if (res[i]) {
//         res[i] = res[i] + 1
//     } else {
//         res[i] = 1
//     }

// }
// console.log(res);


// let str = "Muhammadjon"
// function name(text, index) {
//     let res = text.substr(text, index)
//     console.log(res);
// }
// name(str, 2)
// let name = "1200"
// function get(name) {
//     let res = ""
//     for (i of name) {
//         if (i !== "$") {
//             res += i
//         }
//     }
//     name = res
//     console.log(+name);
// }
// // get(name)
// let name = "$1200"
// let res = ""
// function get(text) {
//     for (i of text) {
//         if (i !== "$") {
//             res += i
//         }
//     }
//     text = res
//     console.log(+text);
// }
// get(name)
// console.log(str.toUpperCase(str[0],str[6]));
// function get(text) {
// text=str[0]=str.toUpperCase(0)
// console.log(text);
// }
// get(str)
// let str = "webbrain academy"
// function get(res){
//     res=str.slice(0,1)
//     console.log(res);

// }
// // get(str)
// let str = "salom dunyo";
// let words = str.split(' ');
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// str = words.join(' ');
// console.log(str);
// let str = "webbrain academiy"
// let arr = str.split(' ')
// for (let i=0;i<arr.length;i++){
// arr[i]=arr[i][0].toLocaleUpperCase()+arr[i].substr(1)
// }
// // str=arr.join(' ')
// // console.log(str);
// function get(str){
//     let res = ""
//     for(i of str){
//         if(i in res){
//             res[i]++;
//         }else{
//             res[i]=1
//         }
//     }
//     console.log(str,res);
// }
// get("web")
// let a ="webbrain"
// // console.log(a.search("brain"));
// console.log(a.includes("web"));
// function get(str1) {
//     let res = { son: 0, str: 0, char: 0, }
//     for (i of str1) {
//         if (Number([i])) {
//             res.son++;
//         } 
//         else if (i.toLowerCase() !== i.toUpperCase()) {
//             res.str++;
//         }
//         else {
//             res.char++
//         }
//     }
//     console.log(res);
// }
// get(`web$6787625`)
// console.log(Math.floor(2.24));
// console.log(Math.ceil(2.94));
// console.log(Math.sign(0))
// // let m = " dfggb"
// // console.log(n.concat(m));
// console.log(n.indexOf("5"));
// let n = "2345@#$%^%$##$67890"
// console.log(n.search(/5@/i));
// let str = "webbrain"
// let str2 ="qwertyui"
// function get(){
//     if(str==str2){
//         console.log("Yuz foiz to'g'ri");
//     }else if (str.includes(str2)){
// console.log("qisman to'g'ri");
// }else{
//     console.log("Umuman to'g'ri emas");
// }
// }
// get()
// let bir= 0
// function get(str) {
//     let res = {}
//     for (i of str) {
//         // if (res[i] ) {
//         // res[i]++;
//         // } else {
//         //     res[i] = 1;
//         // }
//     }
//     console.log(str);
// }
// get("Muhammadjon")
// function get(num) {
//     let res = {}
//     for (i of num) {
//         if (res[i]) {
//         res[i]++;
//         }else{
//             res[i]=1
//         }
//     }
//     console.log(res);
// }
// get('!@#$%^&&^%$#@!@#$%^&*(8765432345676543ertyuioiuydsdfgh')
// function get(muh) {
//     let bir = {}
//     for (i of muh) {
//         if (bir[i]) {
//             bir[i]++;
//         } else {
//             bir[i] = 1
//         }
//     }
//     console.log(bir);
// }
// get("Muhammadjon")
// let n = {// }
// for (i in n) {
//     if (n[i]) {
//         console.log(true);
//     } else if (n = Object) {
//         console.log(false);
//     }
// }
//  function get(str){
//     if(isNaN(str[0]))
//     console.log(parseInt(str.slice(1))); 
//         else console.log(parseInt(str));

//  }
//  get(`$##123$`)
// let str = "werdhsj@#54"
// function get(text) {
//     let res= {Str1:0,son:0,char:0}
//     for(i of text ){
//         if(Number(i)){
//             res.son++;
//         }else if(i.toUpperCase()!==i.toLowerCase()){
//             res.Str1++;
//         }else{
//             res.char++;
//         }
//     }
//     console.log(res);
// }
// get(str)
// function get(str){
//     for(i in str){
//      if(str[i]==" "){
//         console.log(`gh`);
//      }
//     }
// }
// get("webbrain it academiy")
function get (str){
for(i of str){
if(str[i]=str){
    str[i]+2
}
}
}
get("webbrain")
console.log(i);


// ==================================================================================================================================================
//    Harflarni 2 taga ko'paytirib beradi 
// let str = "Muxammadjon"
// function get(string) {
//     let res = ""
//     for (i of string) {
//         res += i + i;
//     }
//     console.log(res);
// }
// get(str)
// =========================================================================================================================================================
//                                                           so'zlarni teskarisiga o'qib beradi
// let a = "Muha"
// let b =""
// for (let i = a.length-1; i>=0; i--) {
//         b=b+a[i]
// }
// console.log(b); 
// ====================================================================================================================================================
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
// function get(str) {
//   let res = ""
//   let count = ""
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] == str[i + 1]) {
//       count++;
//     } else {
//       res = res + str[i];
//       if (count > 1) {
//         res = res + count;
//         count = 1
//       }
//     }
//   }
//   console.log(res);
// }
// get("wwwweebbbrrraaaiiinnn")
// function get(str) {
//   let res = "";
//   let num =0
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] == str[i + 1]) {
//       num++;
//     } else {
//       res = res + str[i]
//       if (num > 1) {
//         res = res + num;
//         num = 1;
//       }
//     }
//   }
//   console.log(res);
// }
// get("wweeeeeeerrrrrrrtty")
function getname(){
    console.log(1);
}