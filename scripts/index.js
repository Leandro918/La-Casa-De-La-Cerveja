 import { baseProducts } from "../scripts/dataBase.js"
 import { modalProduct } from "./modal.js"

function criaTemplate(array) {
    let img       = array.imagem
    let name      = array.nome
    let preco     = array.valor
    let info      = array.descricao

    let tagli      = document.createElement('li')
    let tagimg     = document.createElement('img')
    let tagfoot    = document.createElement('footer')
    let tagh1      = document.createElement('h1')
    let tagh2      = document.createElement('h2')
    let tagcit     = document.createElement('cite')
    let buttPedido = document.createElement('button')
    let headerP    = document.createElement('haeder')

    let span1      = document.createElement('span')
    span1.classList.add("pruduct__butt--first")
    let span2      = document.createElement('span')
    span2.classList.add("pruduct__butt--second")
    let span3      = document.createElement('span')
    span3.classList.add("pruduct__butt--third")
    let span4      = document.createElement('span')
    span4.classList.add("pruduct__butt--fourth")

    tagli.classList.add("container__product")
    tagimg.classList.add("product__img")
    buttPedido.classList.add("product__butt")
    tagfoot.classList.add("product__descripition")
    headerP.classList.add("product__header")

    tagimg.src = img
    tagimg.alt = "imgProdutos"
    tagh1.innerText = name
    tagh2.innerText = preco
    tagcit.innerText = info
    buttPedido.innerText = "Fazer pedido"
    
    buttPedido.append(span1, span2, span3, span4)
    headerP.append(tagh1, tagimg)
    tagfoot.append(tagh2, tagcit, buttPedido)
    tagli.append(headerP, tagfoot)

    buttPedido.addEventListener('click', (e)=>{
      e.preventDefault()
      window.location.href = 'https:///wa.me/554699747301'
   })
   headerP.addEventListener('click', (e)=>{
      e.preventDefault()
      modalProduct(array)
   })

    return tagli
     
}

const containerProducts = document.querySelector('.container__products')
function addProductis(array) {
    array.forEach((element) => {
       containerProducts.append(criaTemplate(element))

    })
}
addProductis(baseProducts)

const loadingSearch = document.querySelector("#loadingSearch")
function search(array) {
  const buttSearch = document.querySelector(".container__search--butt")

  buttSearch.addEventListener('click', (e)=>{
    e.preventDefault()
    containerProducts.innerText = ""
    createLoadingSearch()
    setTimeout(()=>{
       containerProducts.innerText = ""
       loadingSearch.classList.remove("loadingStyle")
       loadingSearch.innerText=""
       searchSeconds(array)
    },2000)
  })
}
search(baseProducts)

function searchSeconds(array) {
  const searchValue = document.querySelector(".container__search--input")

  const listSearch = array.filter((array)=>{
    const name = array.nome.toLocaleLowerCase()
    const value = searchValue.value 
    return name.includes(value.toLocaleLowerCase())
  })
  containerProducts.innerText = " "

   if (listSearch.length == 0) {
     let h1 = document.createElement("h1")
     h1.classList.add("menssageError")
     h1.innerText = "Produto não encontrado"
     let buttRecharge = document.createElement('button')
     buttRecharge.classList.add("buttRecharge")
     buttRecharge.innerText = "Todos os produtos"
     containerProducts.append(buttRecharge, h1)

     buttRecharge.addEventListener('click', (e)=>{
      e.preventDefault()
      addProductis(baseProducts)
    })
   }else{
      let buttRecharge = document.createElement('button')
      buttRecharge.classList.add("buttRecharge")
      buttRecharge.innerText = "Todos os produtos"
      containerProducts.append(buttRecharge)
      buttRecharge.addEventListener('click', (e)=>{
        e.preventDefault()

        buttRecharge.remove()
        addProductis(baseProducts)
      })

      listSearch.forEach(product =>{
        containerProducts.append(criaTemplate(product))
      })
   }
}


function createLoadingSearch() {
  loadingSearch.classList.add("loadingStyle")
  loadingSearch.innerText = "Loading..."
}

 


 