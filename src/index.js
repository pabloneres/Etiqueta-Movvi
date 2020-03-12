const getvalues = require('./getvalues')

let run = getvalues.gerarepl()

function mostrar(){
let p = document.querySelector('p')
let txt = document.createTextNode(run)
p.appendChild(txt)
}

mostrar()