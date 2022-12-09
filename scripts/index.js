 

function criaTemplate(arr) {
    let img       = arr.imagem
    let name      = arr.nome
    let preco     = arr.valor
    let info      = arr.descricao

    let tagli   = document.createElement('li')
    let tagimg  = document.createElement('img')
    let tagfoot = document.createElement('footer')
    let tagh1   = document.createElement('h1')
    let tagh2   = document.createElement('h2')
    let tagcit  = document.createElement('cite')

    tagli.classList.add("liProdutos")
    tagimg.classList.add("imgProdutos")

    tagimg.src = img
    tagimg.alt = "imgProdutos"
    tagh1.innerText = name
    tagh2.innerText = preco
    tagcit.innerText = info

    tagfoot.append(tagh1, tagh2, tagcit)
    tagli.append(tagimg, tagfoot)

    return tagli
     
}
          

let cervejas      = document.querySelector('.ulCervejas')
let essencias     = document.querySelector('.ulEssencias')
let refrigerantes = document.querySelector('.ulRefrigerantes')
let destilados    = document.querySelector('.ulDestilados')
let carvao        = document.querySelector('.ulCarvao')
let outros        = document.querySelector('.ulOutros')
let whisky        = document.querySelector('.ulWhisky')
let energeticos   = document.querySelector('.ulEnergeticos')


function addProductis(arr) {
    arr.forEach((element) => {
         if (element.setor === "essencias") {
            essencias.append(criaTemplate(element))

         }else if (element.setor == "refrigerantes") {
            refrigerantes.append(criaTemplate(element))

         }else if (element.setor == "destilados") {
            destilados.append(criaTemplate(element))

         }else if (element.setor == "carvao") {
            carvao.append(criaTemplate(element))

         }else if (element.setor == "cervejas") {
            cervejas.append(criaTemplate(element))

         }else if (element.setor == "energeticos") {
            energeticos.append(criaTemplate(element))

         }else if (element.setor == "whisky") {
            whisky.append(criaTemplate(element))

         }else  if (element.setor == "outros") {
            outros.append(criaTemplate(element))

         }

    })
}
addProductis(baseProdutos)





 


