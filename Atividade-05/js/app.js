/*window.alert("Esse comando veio de um outro arquivo")
window.console.log("Eu sou o console") //Mensagem escrita no console do inspecionar
//window.document.getElementById("titulo") //Pega o elemento do documento html
window.console.log(window.document.getElementById("titulo")) //Pega a div inteira
window.console.log(window.document.getElementById("titulo").innerHTML) //Pega o conteúdo da div
//window.screen.width //Retorna a largura da janela
window.console.log(window.screen.width) //Pode omitir o window - Printa no console a largura da tela
console.log(screen.height) //Printa no console a altura da tela
console.log(screen.orientation.type) //Printa no console a orientação da tela
console.log(screen) //Printa todos os dados da tela no console
console.log(navigator) //Printa todos os dados do navegador no console
console.log(location) //Printa no console dados sobre a pagina atual
//console.log(location.href="http://www.google.com") //Abre outra página
console.log(history)

function voltar() {
    history.back() //Volta pra página que tava
}

function adiantar() {
    history.forward() //Vai pra próxima página
}

document.getElementById("largura").innerHTML = screen.width //Associa o conteúdo da div ao valor da largura da tela 

console.log(
    document.getElementsByClassName("carro")[0].innerHTML 
)

console.log(
    /*document.getElementsByTagName("div")[0].innerHTML, //Pega as tags - Mesmo se tiver só um ainda retorna um collection
    document.getElementsByTagName("br")
    document.querySelector("div") //Retorna só o primeiro elemento - .nomeDaClasse pra pegar pela class
    document.querySelectorAll(".times")
    document.getElementById("futebol-europeu").querySelectorAll(".times")
)

var paragrafo = document.getElementById("p1")

paragrafo.innerHTML = "Novo conteúdo" //Muda o conteúdo do elemento 
paragrafo.style.color = "blue"
paragrafo.style.backgroundColor = "#333"
paragrafo.style.height = "400px"

var imagem = document.getElementById("imagem")

imagem.src = "img/5x5.jpg"
imagem.alt = "Teste de imagem"
imagem.width = "30"

var imagem = document.createElement("img")

imagem.src = "img/5x5.jpg"

var paragrafo = document.createElement("p")

paragrafo.innerHTML = "Olá, pessoal"

console.log(
    imagem, paragrafo
)

var p = document.createElement("p")
var img = document.createElement("img")

p.innerHTML = "Olá, pessoal"
img.src = "img/5x5.jpg"

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

document.getElementById("conteudo").removeChild(p)

console.log(
    document.documentElement.lastChild
)*/

console.log(
    document.body.childNodes
)

var lista = document.body.childNodes
alert(lista.length)
alert(lista[5].innerHTML)
alert(lista[5].nodeType) //1 - Nó de elemento 2 - Nó de atributo 3 - Nó de texto 8 - Nó de comentário
alert(lista[3].nodeValue)