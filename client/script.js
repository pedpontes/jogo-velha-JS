const square = document.querySelectorAll('.square')
const button = document.querySelector('#reset')
const tipo = [{id: 1, color: 'red'},{id: 2, color: 'blue'}]
const pos = [{x: 0,y:0},{x: 0,y:1},{x: 0,y:2},
            {x: 1,y:0},{x: 1,y:1},{x: 1,y:2},
            {x: 2,y:0},{x: 2,y:1},{x: 2,y:2}]
var joga = tipo[0]

function Player(x,y,square){
    this.x = x;
    this.y = y;
    this.square = square;
}
function reset(){
    fetch('/reset', {method: 'GET'})
        .then( res => {
            res.ok ? location.reload() : console.log('Erro ao redefinir a tabela!')
        })
}

function enviar(element){
    element = element.target
    id = element.getAttribute('id')
    let player = new Player(pos[id-1].x, pos[id-1].y, joga.id)

    fetch('/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/JSON'},
        body: JSON.stringify({ player })
    })
    .then(res => res.json())
    .then( data => {
        console.log(data)
        if(data.win){
            element.style.backgroundColor = joga.color
            alert(`Jogador ${joga.id} ganhou o GAME`);
        }
        else if(data.add){
            element.style.backgroundColor = joga.color
            joga.id == 1 
                ? joga = tipo[1]
                : joga = tipo[0]
        }
        else{
            alert('Square ja utilizada, escolha outra!')
        }
    })
}

square.forEach( element => {
    element.addEventListener('click', enviar)
})
button.addEventListener('click', reset)
