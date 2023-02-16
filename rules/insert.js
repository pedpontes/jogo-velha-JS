function insert(tab, pos, player){
    let add = tab[pos.x][pos.y] == ''
                ? (tab[pos.x][pos.y] = player.square, true)
                : false
    return add;
}

module.exports = insert