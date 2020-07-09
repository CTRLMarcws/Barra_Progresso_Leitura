//busca o container do texto
const postWrap = document.querySelector(".post-wrap")

//Cria a barra
let barra = document.createElement("div")

//estilização
barra.style.height = "6px"
barra.style.width = "0"
barra.style.backgroundColor = "#6633cc"
barra.style.position = "fixed"
barra.style.top = "0"
barra.style.left = "0"
barra.style.zIndex = "9999"
barra.style.transition = "0.2s"

//adiciona no corpo da pagina
document.body.append(barra)

//atualizar a barra
function updateBar() {
    //busca o tamanho da caixa que contem o texto
    const textHeight = postWrap.offsetHeight
    
    //verifica a posição da página
    const pagePositionY = window.pageYOffset
    
    //calcula da atualização
    const updatedBar = (pagePositionY * 100) / textHeight
    
    //atualiza a barra
    barra.style.width = updatedBar + "%"
}

window.addEventListener("load", () => {
  //verfica o movimento do scroll
  document.addEventListener("scroll", updateBar)
})