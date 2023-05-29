const dialog = document.querySelector("dialog")
export function modalProduct(product) {
   dialog.showModal()
    dialog.appendChild(createModalProduct(product))

 }

function createModalProduct(product) {
    let div = document.createElement('div')
    let divProduct = document.createElement('div')
    let header = document.createElement('header')
    let imgProduct = document.createElement('img')
    let name =  document.createElement('h3')
    let description = document.createElement('p')
    let buttClose =  document.createElement('button')
    let buttBuy =  document.createElement('button')
    let price =  document.createElement('p')
    let cite = document.createElement('cite')
    let sect = document.createElement('section')

    name.innerText = product.nome
    description.innerText = product.descricao
    price.innerText = product.valor
    imgProduct.src = product.imagem
    buttClose.innerText = "X"
    buttBuy.innerText = "Adicionar ao carrinho"
    
    div.classList.add("modal__container")
    divProduct.classList.add("modal__container--product")
    header.classList.add("modal__container--header")
    imgProduct.classList.add("modal__container--imgProduct")
    name.classList.add("modal__container--name")
    description.classList.add("modal__container--descripition")
    buttClose.classList.add("modal__container--close")
    buttBuy.classList.add("modal__container--buy")
    price.classList.add("modal__container--price")
    sect.classList.add("modal__box")
    cite.classList.add("modal__box--footer")

    cite.append(price, description, buttBuy)
    header.append(buttClose)
    sect.append(imgProduct, name)
    divProduct.append(sect, cite)
    div.append(header, divProduct)

    buttClose.addEventListener('click', (e)=>{
      e.preventDefault()
      dialog.close()
    })

    return div
} 