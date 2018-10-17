const yargs= require('yargs')
const geocode= require('./geocode/geocode')
const temp=require('./temperature/temp')
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
//console.log(argv)
//geocode.Geocode(argv.address)
geocode.Geocode(argv.address, (error, results)=>{
if(error){
    console.log(error)
}
else{
    console.log(results)
   //console.log(results.latitude)
    //temp.temperature(results.Lat, results.Lng)
    temp.temperature(results.latitude,results.longitude, (error, tempresult)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(tempresult)
        }


    })

}
})