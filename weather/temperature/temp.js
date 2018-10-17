// console.log('cscvdv')
const request= require('request')
var temperature=(Lat, Lng, callback)=>{
// var lat=latLng.lat
// var Lng=latLng.Lng
// console.log('czxc')
// console.log(Lat)
// console.log(Lng)
   
    request({
        url:`https://api.darksky.net/forecast/0476488b5f3d0bc7dde1f32019298c4e/${Lat},${Lng}`,
      json:true
    } ,(error,response,body)=>{
    if(error)
        {
        callback('error, incorrect URL or address')
        }
    else{
            var y=JSON.stringify(body.currently.temperature, undefined, 2)
            
    //console.log(body.info.statuscode)
         callback(`temperature is : ${y}`)
        }
    
    })
  
}

module.exports={
    temperature
}