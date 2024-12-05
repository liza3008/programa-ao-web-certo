var imagemE = window.document.getElementById("imagemE")
var imagemA= window.document.getElementById("imagemA")
var imagemB = window.document.getElementById("imagemB")
var imagemC=   window.document.getElementById("imagemC")
var  imagemD= window.document.getElementById("imagemD")

function Deslizarparadireita(){
imagemA.style="display:none"
imagemB.style="display:flex"
imagemC.style="display:flex" 
imagemD.style="display:flex; margin-top:50px"
imagemE.style="display:none"
}
function Deslizarparaesquerda(){
    imagemA.style="display:flex"
    imagemB.style="display:none"
    imagemD.style="display:flex; margin-top:50px"
    imagemE.style="display:none"
}