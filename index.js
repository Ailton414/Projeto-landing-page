var setaEsquerda = window.document.getElementById("setaesquerda")
var setadireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")


function rolarparadireita(){
    leonardo .style = "display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}


function RolarParaEsquerda(){
    leonardo .style = "display:flex"
    bruna.style = "display:none"
    setadireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}