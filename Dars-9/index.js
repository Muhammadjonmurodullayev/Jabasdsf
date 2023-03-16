// let n = 12000
// n = n.toString(2)
// console.log(n);
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
// for (i of "webbrain") {
//     if (res[i]) {
//      res[i]=res[i]+1
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
// get(str)
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
// str=arr.join(' ')
// console.log(str);
