function verify(tab) {
    if(tab[0][0] == tab[0][1] && tab[0][0] == tab[0][2] && tab[0][0] != '') {return true}  //primeira linha
    else if(tab[1][0] == tab[1][1] && tab[1][0] == tab[1][2] && tab[1][0] != '') {return true} //2 linha
    else if(tab[2][0] == tab[2][1] && tab[2][0] == tab[2][2] && tab[2][0] != '') {return true} //3 linha
    else if(tab[0][0] == tab[1][1] && tab[0][0] == tab[2][2] && tab[0][0] != '') {return true} //diagonal principal
    else if(tab[0][2] == tab[1][1] && tab[0][2] == tab[2][0] && tab[0][2] != '') {return true} //diagonal inversa    
    else{return false}
};

module.exports = verify