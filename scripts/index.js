 

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
    let buttPedido = document.createElement('a')
    let headerP    = document.createElement('header')

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
    buttPedido.href = `https://wa.me/5546999747301?text=${name}, Quantas unidades ? =`
    buttPedido.target = "_blank"

    headerP.append(tagh1, tagimg)
    tagfoot.append(tagh2, tagcit, buttPedido)
    tagli.append(headerP, tagfoot)

    return tagli
     
}
let products = document.querySelector('.container__products')

function addProductis(array) {
    array.forEach((element) => {
         products.append(criaTemplate(element))

    })
}
addProductis(baseProducts)


function search(array) {
  const searchValue = document.querySelector(".container__search--input")
  const buttSearch = document.querySelector(".container__search--butt")

  buttSearch.addEventListener('click', (e)=>{
    e.preventDefault()
    const listSearch = array.filter((array)=>{
      const name = array.nome.toLocaleLowerCase()
      const value = searchValue.value 
      return name.includes(value.toLocaleLowerCase())
    })
    products.innerText = " "
     if (listSearch.length == 0) {
       let h1 = document.createElement("h1")
       h1.classList.add("menssageError")
       h1.innerText = "Produto não encontrado"
       let buttRecharge = document.createElement('button')
       buttRecharge.classList.add("buttRecharge")
       buttRecharge.innerText = "Todos os produtos"
       products.append(buttRecharge, h1)
       buttRecharge.addEventListener('click', ()=>{
        window.location.replace("./index.html")
      })
     }else{
      let buttRecharge = document.createElement('button')
      buttRecharge.classList.add("buttRecharge")
      buttRecharge.innerText = "Todos os produtos"
      products.append(buttRecharge)
      buttRecharge.addEventListener('click', ()=>{
        window.location.replace("./index.html")
      })
      listSearch.forEach(product =>{
        products.append(criaTemplate(product))
      })
     }
  })
}
search(baseProducts)

 
 function redirects() {
  
 let instagram = document.querySelector("#instagram")
 instagram.addEventListener('click', (e)=>{
  e.preventDefault()
   window.location.href = "https://www.instagram.com/leandro_0j/"
 })

 let whatsapp = document.querySelector("#whatsapp")
 whatsapp.addEventListener('click', (e)=>{
  e.preventDefault()
   window.location.href = "https://wa.me/5546999140120?text=Olá"
 })

 let linkedin = document.querySelector("#linkedin")
 linkedin.addEventListener('click', (e)=>{
  e.preventDefault()
   window.location.href = "https://www.linkedin.com/in/leandro-da-silva-b14155237/"
 })

 let github = document.querySelector("#github")
 github.addEventListener('click', (e)=>{
  e.preventDefault()
   window.location.href = "https://github.com/Leandro918"
 })


 }
 redirects()