console.log('starting app')
const fs= require('fs')
const _ = require('lodash')
const yargs=require('yargs')

const notes = require('./notes')
var argv=process.argv[2]
//console.log(process.argv)
const argvs=yargs.argv
console.log(argvs)

if(argv==='list')
{
   notes.getAll()
     console.log('all entered')
}
if(argv==='add')
{
    
    console.log('add entered')
   var note1= notes.addNote(argvs.title,argvs.body)  
   if(note1){
       console.log(note1.title)
   } 
   else{
       console.log('duplicacy')
   }
}
else if(argv==='read'){
    notes.read()
    console.log('read entered')
}
else if (argv==='remove')
{
    notes.remove(argvs.title)
    console.log('remove entered')
}
else{
    console.log('cs')
}
