console.log('notes executed')
const fs=require('fs')
var fetchNotes=()=>{
    try{
        return JSON.parse(fs.readFileSync('notes-data.json'))
    
    
       } catch(e){
           return []
       }

}
var saveNotes=(notess)=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notess))
    

}
//console.log(module)
var addNote = (title, body)=>{

    var notess=fetchNotes()
    var note={
        title,
        body
    }
    var duplicateNotes= notess.filter((note)=>note.title===title)
   if(duplicateNotes.length==0){
    notess.push(note)
    saveNotes(notess)
    return note
    
   }
   else{
       console.log('duplicate')
   }
  
  
   
}

var getAll = ()=>{
    console.log('getting all')
   
}
var read = ()=>{
    console.log('reading all')
   
}

var remove = (title)=>{
    console.log('remove ', title)
   
}


module.exports={
    addNote,
    getAll,
    read, 
    remove
}