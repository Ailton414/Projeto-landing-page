var setaesquerda = window.document.getElementById("setaesquerda")
var setadireita = window.document.getElementById("setadireita")
var samantha = window.document.getElementById("samantha")
var leonardo = window.document.getElementById("leonardo")
var bruna= window.document.getElementById("bruna")


function RolarParaDireita(){
    setadireita.style ="display:none"
    leonardo.style ="display:none"
    samantha.style ="display:flex"
    setaesquerda.style ="display:flex"

}

function RolarParaEsquerda(){
    setadireita.style ="display:flex"
    leonardo.style ="display:flex"
    samantha.style ="display:none"
    setaesquerda.style ="display:none"

}
