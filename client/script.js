const square = document.querySelectorAll('.square')
const tipo = [1,2]
const pos = [{x: 0,y:0},{x: 0,y:1},{x: 0,y:2},
            {x: 1,y:0},{x: 1,y:1},{x: 1,y:2},
            {x: 2,y:0},{x: 2,y:1},{x: 2,y:2}]
var joga = tipo[0]

function Player(x,y){
    this.x = x;
    this.y = y;
}

function enviar(element){
    element = element.target
    id = element.getAttribute('id')
    let player = new Player(pos[id-1].x, pos[id-1].y)
    let data = fetch('/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/JSON'},
        body: JSON.stringify({ player })
    // console.log(player)
    })
}

square.forEach( element => {
    element.addEventListener('click', enviar)
})

