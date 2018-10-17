// var square =(x)=>{
//     //use as many lines
//    return x*x
// }

// var square1 = x =>x*x
// console.log(square1(9))

// var square =(x)=> x*x

// console.log(square(10))

var user={
    name : 'ruchika',
    fun : () =>{
        //console.log("sx")
        console.log(`${this.name}`)

    },
    fun1  () {
        //console.log("sx")
        console.log(`${this.name}`)

    }

}
user.fun()
user.fun1()