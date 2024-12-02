var setadireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha=   window.document.getElementById("Samantha")
var setaesquerda = window.document.getElementById("setaesquerda")

function Deslizarparadireita(){
    Leonardo.style="display:none"
    Bruna.style="display:flex"
    Samantha.style="display:flex" 
    setaesquerda.style="display:flex; margin-top:50px"
    setadireita.style="display:none"
}
function Deslizarparaesquerda(){
    Leonardo.style="display:flex"
    Bruna.style="display:none"
    setadireita.style="display:flex; margin-top:50px"
    setaesquerda.style="display:none"
}