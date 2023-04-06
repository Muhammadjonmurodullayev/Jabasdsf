// Blog Function Global 
// {
//     let name = "webbrain academiy"--------Blog
// }
// console.log(name);

//  function get(){} // if{} for swich while do while ------Function 
let list = [
    { id: 1, name: "eshmat", title: "CEO" },
    { id: 2, name: "toshmat", title: "CTO" },
    { id: 5, name: "eshmat", title: "CEO" },
    { id: 6, name: "toshmat", title: "CTO" },

]
let res = list.filter((a, b) => {
    return a.title
})
// console.log(res);
// let res1=list.filter((a)=>{
//     return a.title=="CTO"
// })
// console.log(res1);
// let res1 = num1.split("")
// res.sort((a, b) => { return a.localeCompare(b) })
// res1.sort((a, b) => { return a.localeCompare(b) })
// res = res.toString()
// res = res1.toString()
// console.log(res == res1);
let str = "web"
let str1 = "bew"
function get(str, str1) {
    let res = str.split("")
    let res1 = str1.split("")
    res.sort((a, b) => { return a.localeCompare(b) })
    res1.sort((a, b) => { return a.localeCompare(b) })
    res = res.toString()
    res = res1.toString()
    console.log(res == res1);
}
get(str, str1)

let obj = {
    id: 1, name: "eshmat", title: "CEO",
    id: 2, name: "toshmat", title: "CTO",
    id: 3, name: "eshmat", title: "CEO",
    id: 4, name: "toshmat", title: "CTO"
}
console.log(obj.title);









