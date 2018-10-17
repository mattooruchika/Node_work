const yargs= require('yargs')
const geocode= require('./geocode/geocode')
const temp=require('./temperature/temp')
const axios= require('axios')
const argv=yargs
.options({
a:{
    demand:true,
    alias:'address' ,
    describe:'address for weather',
    string:true
}
})
.help()
.alias('help', 'h')
.argv

var string=encodeURIComponent(argv.address)
var url= `http://www.mapquestapi.com/geocoding/v1/address?key=aHTMj9FS50Gp75wHW3qEhhoFfAwjjiF8&location=${string}`

console.log(url)
axios.get(url).then((success)=>{
    
console.log(JSON.stringify(success.data.results[0].locations[0].latLng, undefined, 2))
var latitude = success.data.results[0].locations[0].latLng.lat
var longitude= success.data.results[0].locations[0].latLng.lng
var url1=`https://api.darksky.net/forecast/0476488b5f3d0bc7dde1f32019298c4e/${latitude},${longitude}`
axios.get(url1).then((success1)=>{
console.log(`temp is: ${success1.data.currently.temperature}`)
}).catch((error1)=>{
    console.log(error1)
})
}).catch((error)=>{
    console.log(error)
})