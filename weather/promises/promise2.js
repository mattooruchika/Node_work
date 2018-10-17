const request= require('request')
var geocode=(address)=>{
    return new Promise((resolve, reject)=>{
        var string=encodeURIComponent(address)
        // console.log(string)
        request({
            url:`http://www.mapquestapi.com/geocoding/v1/address?key=aHTMj9FS50Gp75wHW3qEhhoFfAwjjiF8&location=${string}`,
          json:true
        } ,(error,response,body)=>{
        if(error)
            {
           reject('error, incorrect URL or address')
            }
        else{            
             
        resolve({
            latitude : body.results[0].locations[0].latLng.lat,
            longitude:body.results[0].locations[0].latLng.lng
    })
            }
   })      
})
}




geocode(19146).then((success)=>{
console.log(JSON.stringify(success, undefined, 2))
}, (error)=>{
    console.log(error)

})