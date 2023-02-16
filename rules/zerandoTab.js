function zerandoTab(tab){
    for(let lin = 0; lin < 3; lin++){
        for(let col = 0; col < 3; col++){
            tab[lin][col] = ''
        }
    }
    return tab
}

module.exports = zerandoTab