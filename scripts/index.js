 

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
    let headerP    = document.createElement('header')
    let span1      = document.createElement('span')
    let span2      = document.createElement('span')
    let span3      = document.createElement('span')
    let span4      = document.createElement('span')

    tagli.classList.add("container__product")
    tagimg.classList.add("product__img")
    buttPedido.classList.add("product__butt")
    tagfoot.classList.add("product__descripition")
    headerP.classList.add("product__header")
    span1.classList.add("pruduct__butt--first")
    span2.classList.add("pruduct__butt--second")
    span3.classList.add("pruduct__butt--third")
    span4.classList.add("pruduct__butt--fourth")

    tagimg.src = img
    tagimg.alt = "imgProdutos"
    tagh1.innerText = name
    tagh2.innerText = preco
    tagcit.innerText = info
    buttPedido.innerText = "Fazer pedido"
    buttPedido.addEventListener('click', (e)=>{
       e.preventDefault()
       window.location.href = 'https:///wa.me/554699747301'
    })

    buttPedido.append(span1, span2, span3, span4)
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
   
  const buttSearch = document.querySelector(".container__search--butt")

  buttSearch.addEventListener('click', (e)=>{
    e.preventDefault()
    loadingCreate()

    setTimeout(()=>{
      let container = document.querySelector(".container__products")
      container.innerText = ""
       
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
  products.innerText = " "
   if (listSearch.length == 0) {
     let h1 = document.createElement("h1")
     h1.classList.add("menssageError")
     h1.innerText = "Produto não encontrado"
     let buttRecharge = document.createElement('button')
     buttRecharge.classList.add("buttRecharge")
     buttRecharge.innerText = "Todos os produtos"
     products.append(buttRecharge, h1)

     buttRecharge.addEventListener('click', (e)=>{
      e.preventDefault()
      addProductis(baseProducts)
    })
   }else{
      let buttRecharge = document.createElement('button')
      buttRecharge.classList.add("buttRecharge")
      buttRecharge.innerText = "Todos os produtos"
      products.append(buttRecharge)
      buttRecharge.addEventListener('click', (e)=>{
        e.preventDefault()

        buttRecharge.remove()
        addProductis(baseProducts)
      })

      listSearch.forEach(product =>{
        products.append(criaTemplate(product))
      })
   }
}
 
function loadingCreate() {
   let container = document.querySelector(".container__products")
   container.innerText = ""
   
   let loading = document.createElement('div')
   let div1    = document.createElement('div')
   let div2    = document.createElement('div')
   let div3    = document.createElement('div')
   let pLoad   = document.createElement('p')

   loading.classList.add("loading")
   div1.classList.add("ring")
   div2.classList.add("ring")
   div3.classList.add("ring")
   pLoad.classList.add("text__loading")

   pLoad.innerText = "Loading..."

   loading.append(div1, div2, div3, pLoad)

   container.appendChild(loading)

}

 


 