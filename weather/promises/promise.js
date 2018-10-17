var Add=(a,b)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
if(typeof a === 'number' && typeof b === 'number'){
resolve(a+b)
}
else{
    reject ('args not number, enter again')
}
}, 1500)
})
}

// Add(3,9).then((message)=>{
// console.log(message)
// Add.then((message1)=>{

// }, (error1)=>{

// })
// }, (error)=>{
//     console.log(error)
// })
Add(3,'5').then((success)=>{
console.log(success)
Add(3,6).then((success1)=>{
    console.log(success1)
}).catch((error1)=>{
    console.log(error1)
})
}).catch((error)=>{
console.log(error)
})