// var obj={
//     "name" : 'ruchika'
// }
// // obj is object
// //JSON return string
// console.log(typeof(obj))
// console.log(typeof(JSON.stringify(obj)))
// //json .parse converts string into obj
// var obj1='{"name" : "andrew"}'
// console.log(typeof(obj1))
// console.log(typeof(JSON.parse(obj1)))

const fs= require('fs')

var Note={
    title: 'titles',
    body: 'body'
}
fs.writeFileSync('note.json',JSON.stringify(Note))
var js=JSON.parse(fs.readFileSync('note.json'))

console.log(js.title)
