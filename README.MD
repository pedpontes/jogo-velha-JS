# JOGO DA VELHA

O jogo da velha nao é mistério pra ninguém, já fiz um que esta em linguagem C aqui no meu perfil do gitHUB, porém fazer em outra linguagem como JS para treinar sintaxes nunca é demais.
## Variáveis
square

    Descrição: armazena todos os elementos com a classe 'square' selecionados no DOM
    Tipo: objeto NodeList

button

    Descrição: armazena o elemento do DOM com o ID 'reset'
    Tipo: objeto Element

tipo

    Descrição: array de objetos que representam os jogadores
    Tipo: array de objetos

pos

    Descrição: array de objetos que representa a posição dos elementos do jogo
    Tipo: array de objetos

joga

    Descrição: armazena o objeto do jogador atual
    Tipo: objeto

## Funções
Player

    Descrição: construtor da classe Player, que armazena as coordenadas e o número do jogador em um determinado quadrado
    Parâmetros:
        x: coordenada x do quadrado
        y: coordenada y do quadrado
        square: número do jogador

reset

    Descrição: redefine a tabela do jogo chamando a rota '/reset' por meio do fetch
    Parâmetros: nenhum
    Retorno: nenhum

enviar

    Descrição: função que é chamada quando um elemento é clicado e envia um objeto Player para a rota '/send' por meio do fetch
    Parâmetros:
        element: objeto Event, que contém informações sobre o evento de clique
    Retorno: nenhum

forEach

    Descrição: percorre todos os elementos em square e adiciona um listener de clique que chama a função enviar
    Parâmetros:
        callback: função a ser chamada para cada elemento em square
    Retorno: nenhum

Event Listeners
click

    Descrição: listener de clique para o elemento button que chama a função reset
    Parâmetros:
        callback: função a ser chamada quando o elemento é clicado
    Retorno: nenhum

## Fluxo de Execução

Quando a página é carregada, o código seleciona todos os elementos com a classe 'square' no DOM e armazena em square. Ele também seleciona o elemento do DOM com o ID 'reset' e armazena em button. O array tipo armazena objetos que representam os jogadores, e o array pos armazena objetos que representam a posição dos elementos no jogo. A variável joga armazena o jogador atual, inicialmente o primeiro jogador em tipo.

A função Player é um construtor de objetos Player, que armazena as coordenadas e o número do jogador em um determinado quadrado. A função reset redefine a tabela do jogo chamando a rota '/reset' por meio do fetch.

A função enviar é chamada quando um elemento em square é clicado. Ela cria um objeto Player com a coordenada e o número do jogador atual e o envia para a rota '/send' por meio do fetch. Se o jogador atual ganhar o jogo, uma caixa de diálogo de alerta é exibida. Se o jogador atual não ganhar o jogo, mas for adicionado com sucesso a um quadrado, a cor do quadrado será alterada para a cor do jogador atual e a vez será passada para o próximo jogador. Se um quadrado já foi preenchido, uma caixa de diálogo de alerta é exibida para selecionar outro quadrado.
