console.log("hey! We are in")

let addbtn = document.getElementById("addBtn")
addbtn.addEventListener('click', function(e){
    let addTxt = document.getElementById("addtxt")
    let notes = localStorage.getItem('notes')
    if(notes == null){
            notesObj = []
    }
    else{
        notesObj = JSON.parse(notes)
    }
})

