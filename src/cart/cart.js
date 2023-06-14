function criaTemplate(array) {
  let img       = array.imagem
  let name      = array.nome
  let preco     = array.valor
  let info      = array.descricao
  let id        = array.id

  let tagli      = document.createElement('li')
  let tagimg     = document.createElement('img')
  let tagfoot    = document.createElement('footer')
  let tagh1      = document.createElement('h1')
  let tagh2      = document.createElement('h2')
  let tagcit     = document.createElement('cite')
  let remove     = document.createElement('button')
  let headerP    = document.createElement('haeder')

  tagli.classList.add("container__product")
  tagimg.classList.add("product__img")
  remove.classList.add("product__butt")
  tagfoot.classList.add("product__descripition")
  headerP.classList.add("product__header")

  tagimg.src = `../../${img}`
  tagimg.alt = "imgProdutos"
  tagh1.innerText = name
  tagh2.innerText = preco
  tagcit.innerText = info
  remove.innerText = "Remover"
  remove.id = id

  headerP.append(tagh1, tagimg)
  tagfoot.append(tagh2, tagcit, remove)
  tagli.append(headerP, tagfoot)

  remove.addEventListener('click', (e)=>{
    e.preventDefault()
    removeProductCart(id)

  })

  return tagli
}


const buttReturn = document.querySelector(".box__buttReturn")
  buttReturn.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location = "index.html"

  })

let arrayCart = JSON.parse(localStorage.getItem("products"))
const productsContainer = document.querySelector(".products__cart")

function addProductsCart(array) {
   if (arrayCart == 0) {
      productsContainer.innerText = "Adicione produtos ao seu carrinho"
   }else{
       productsContainer.innerText = " "
      array.forEach(element => {
        productsContainer.appendChild(criaTemplate(element))
        
      })
   }
}
addProductsCart(arrayCart)

function removeProductCart(id) {
  const remove = arrayCart.findIndex(e => e.id == id)
  arrayCart.splice(remove, 1)

  localStorage.setItem("products",JSON.stringify(arrayCart))
  addProductsCart(arrayCart)

}
