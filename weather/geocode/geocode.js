const request= require('request')
var Geocode=(address, callback)=>{

    var string=encodeURIComponent(address)
   // console.log(string)
    request({
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=aHTMj9FS50Gp75wHW3qEhhoFfAwjjiF8&location=${string}`,
      json:true
    } ,(error,response,body)=>{
    if(error)
        {
        callback('error, incorrect URL or address')
        }
    else{
        
            // var x=JSON.stringify(body.results[0].locations[0].latLng, undefined, 2)
            
            
    //console.log(body.info.statuscode)
    callback(undefined,{
        latitude : body.results[0].locations[0].latLng.lat,
        longitude:body.results[0].locations[0].latLng.lng
})
        }
    
    })
  
}


module.exports={
    Geocode
}