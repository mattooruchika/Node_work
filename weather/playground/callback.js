var user=(id, callback)=>{
var userobj ={
    id:id,
    name : 'ruchika'
}
setTimeout(()=>{
    callback(userobj)
}, 2000)}

user(2, (user)=>{
console.log(user)
})