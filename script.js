 

let cervejas      = document.querySelector('.ulCervejas')
let essencias     = document.querySelector('.ulEssencias')
let refrigerantes = document.querySelector('.ulRefrigerantes')
let destilados    = document.querySelector('.ulDestilados')
let carvao        = document.querySelector('.ulCarvao')
let outros        = document.querySelector('.ulOutros')
let whisky        = document.querySelector('.ulWhisky')
let energeticos   = document.querySelector('.ulEnergeticos')

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
                 



function add6(array, ref) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.setor == "essencias") {
           let template = criaTemplate(element)
           ref.append(template)
        }
        
    }
    
}
 

function add0(array, ref) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.setor == "refrigerantes") {
           let template = criaTemplate(element)
           ref.append(template)
        }
        
    }
    
}
add0(baseProdutos, refrigerantes)

function add1(array, ref) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.setor == "destilados") {
           let template = criaTemplate(element)
           ref.append(template)
        }
        
    }
    
}
add1(baseProdutos, destilados)

function add2(array, ref) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.setor == "carvao") {
           let template = criaTemplate(element)
           ref.append(template)
        }
        
    }
    
}
add2(baseProdutos, carvao)

 function add3(arr, ref) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.setor == "cervejas") {
            let template = criaTemplate(element)
            ref.append(template)
        }
        
    }
 }
 add3(baseProdutos, cervejas)

 function add4(arr, ref) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.setor == "energeticos") {
            let template = criaTemplate(element)
            ref.append(template)
        }
        
    }
 }
 add4(baseProdutos, energeticos)

 function add5(arr, ref) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.setor == "whisky") {
            let template = criaTemplate(element)
            ref.append(template)
        }
        
    }
 }
 add5(baseProdutos, whisky)

 function add6(arr, ref) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.setor == "outros") {
            let template = criaTemplate(element)
            ref.append(template)
        }
        
    }
 }
 add6(baseProdutos, outros)

 function add7(arr, ref) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.setor == "essencias") {
            let template = criaTemplate(element)
            ref.append(template)
        }
        
    }
 }
 add7(baseProdutos, essencias)



 


