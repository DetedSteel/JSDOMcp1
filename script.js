const table = document.body.firstElementChild.nextElementSibling.firstElementChild

let count = 0
let count2 = 0

for (let i = 0; i < 6; i++){
    table.innerHTML+='<tr></tr>'
    let tr = table.childNodes[i]
    for (let j = 0; j < 5; j++) {
        tr.innerHTML+=`<td ${arr[count] >= 50?'class="orange"':''}>${arr[count]}</td>`
        count++
    }
}

table.innerHTML+='<tr></tr>'
function add(){
    if (count2 < 5){
        create()
        count2++
    } else {
        table.innerHTML+='<tr></tr>'
        create()
        count2 = 1
    }
    
}

function create(){
    let tr = table.lastElementChild
        number = getNumber(0, 100)
        tr.innerHTML+=`<td ${number >= 50?'class="orange"':''}>${number}</td>`
}