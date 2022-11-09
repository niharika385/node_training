//console.log("hi")
const fs=require('fs')

const savenotes= (notes)=> {
    const data = JSON.stringify(notes)
    fs.writeFileSync('data.json', data)
}

const load = () => {
    try{
        buffer = fs.readFileSync('data.json')
        string_data = buffer.toString()
        console.log(string_data)
        parsed = JSON.parse(string_data)
        console.log(parsed)
        return parsed
    }catch{
        return []
    }


}
const add = (title, body) => {
    const notes = load()
    
    const dups = notes.filter( (note) =>  note.title===title   )

    if (dups.length === 0){
        notes.push({
            'title':title,
            'body':body
        })

        savenotes(notes)
    }else{
        console.log('noted!!!!')
    }


}

const remove = (title) => {
    const notes = load()

    const notes_to_keep = notes.filter( (note)=> note.title !==title )

    savenotes(notes_to_keep)
}

module.exports={
    'add':add,
    'remove': remove
}

    
