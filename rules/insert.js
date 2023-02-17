function insert(tab,player){
    let add = tab[player.x][player.y] == ''
                ? (tab[player.x][player.y] = player.square, true)
                : false
    return add;
}

module.exports = insert 