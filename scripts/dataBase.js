const baseProdutos = [
    {
        imagem    : "./assets/img/imgProdutos/cervejas/bhamaLata.jpg",
        nome      :"Brahma lata 269ml",
        valor     :"R$ 35,00",
        descricao :"Caixa com 15un",
        setor     :"cervejas"
    },
    {
        imagem    : "./assets/img/imgProdutos/cervejas/brahmaG.jpg",
        nome      :"Brahma 600ml",
        valor     :"R$ 7,00",
        descricao :"A un",
        setor     :"cervejas"
    },
    {
        imagem    : "./assets/img/imgProdutos/cervejas/brahmaM.jpg",
        nome      :"Brahma 300ml",
        valor     :"R$ 2,50",
        descricao :"A un",
        setor     :"cervejas"
    },
    {
        imagem    : "./assets/img/imgProdutos/cervejas/heineken.jpg",
        nome      :"Heineken 330ml",
        valor     :"R$ 140,00",
        descricao :"24un",
        setor     :"cervejas"
    },
    {
        imagem    : "./assets/img/imgProdutos/cervejas/itaipavaG.jpg",
        nome      :"Itaipava 250ml",
        valor     :"R$ 2,50",
        descricao :"A caixa com 12 sai por R$ 30,00",
        setor     :"cervejas"
    },
    {
        imagem    : "./assets/img/imgProdutos/cervejas/itaipavaLata.jpg",
        nome      :"Itaipava lata 269ml",
        valor     :"R$ 2,50",
        descricao :"A caixa com 12 sai por R$ 30,00",
        setor     :"cervejas"
    },
    {
        imagem    : "./assets/img/imgProdutos/cervejas/sol.jpg",
        nome      :"Sol 330ml",
        valor     :"R$ 6,00",
        descricao :"A caixa com 24un sai por R$115,00",
        setor     :"cervejas"
    },
    {
        imagem    : "./assets/img/imgProdutos/cervejas/budG.jpg",
        nome      :"Budweiser 330ml",
        valor     :"R$ 6,00",
        descricao :"A caixa com 24un sai por R$115,00",
        setor     :"cervejas"
    },
    {
        imagem    : "./assets/img/imgProdutos/cervejas/skol.jpg",
        nome      :"Skol 269ml",
        valor     :"R$ 35,00",
        descricao :"A caixa com 15un e a un sai por R$ 3,00",
        setor     :"cervejas"
    },
    {
        imagem    : "./assets/img/imgProdutos/refrigerante/coca2.jpg",
        nome      :"Coca Cola 2L",
        valor     :"R$ 8,00 a un",
        descricao :"A caixa com 6 sai por R$46,00",
        setor     :"refrigerantes"
    },
    {
        imagem    : "./assets/img/imgProdutos/refrigerante/cocaLata.jpg",
        nome      :"Coca Cola lata ",
        valor     :"R$ 4,00 a un",
        descricao :"350 ml",
        setor     :"refrigerantes"
    },
    {
        imagem    : "./assets/img/imgProdutos/refrigerante/cocaGp.jpg",
        nome      :"Coca Cola",
        valor     :"R$ 3,00 a un",
        descricao :"Garrfa 290ml",
        setor     :"refrigerantes"
    },
    {
        imagem    : "./assets/img/imgProdutos/destilados/smirnoff.jpg",
        nome      :"Smirnoff",
        valor     :"R$ 40,00 a un",
        descricao :"Garrafa 998ml",
        setor     :"destilados"
    },
    {
        imagem    : "./assets/img/imgProdutos/destilados/gin.jpg",
        nome      :"Gin Rock's",
        valor     :"R$ 30,00 1L",
        descricao :"Gin seco",
        setor     :"destilados"
    },
    {
        imagem    : "./assets/img/imgProdutos/destilados/ginDoce.jpg",
        nome      :"Gin Rock's",
        valor     :"R$ 30,00 1L",
        descricao :"Gin doce",
        setor     :"destilados"
    },
    {
        imagem    : "./assets/img/imgProdutos/destilados/askov.jpg",
        nome      :"Askov",
        valor     :"R$ 15,00",
        descricao :"Diversos sabores, consultar disponibilidade",
        setor     :"destilados"
    },
    {
        imagem    : "./assets/img/imgProdutos/destilados/velho.jpg",
        nome      :"Velho barreiro",
        valor     :"R$ 13,00 ",
        descricao :"910ml",
        setor     :"destilados"
    },
    {
        imagem    : "./assets/img/imgProdutos/destilados/jamel.jpg",
        nome      :"Jamel",
        valor     :"R$ 13,00 ",
        descricao :"990ml",
        setor     :"destilados"
    },
    {
        imagem    : "./assets/img/imgProdutos/energeticos/redb.jpg",
        nome      :"Red Bull",
        valor     :"R$ 8,00",
        descricao :"250ml",
        setor     :"energeticos"
    },
    {
        imagem    : "./assets/img/imgProdutos/energeticos/redTro.jpg",
        nome      :"Red Bull",
        valor     :"R$ 8,00 250ml",
        descricao :"Sabor tropical",
        setor     :"energeticos"
    },
    {
        imagem    : "./assets/img/imgProdutos/energeticos/baly.jpg",
        nome      :"Baly",
        valor     :"R$ 12,00",
        descricao :"2 L",
        setor     :"energeticos"
    },
    {
        imagem    : "./assets/img/imgProdutos/energeticos/monster.jpg",
        nome      :"Monster",
        valor     :"R$ 8,00 473ml",
        descricao :"Variados sabores, consultar disponibilidade",
        setor     :"energeticos"
    },
    {
        imagem    : "./assets/img/imgProdutos/outros/carvaoC.jpg",
        nome      :"Carvão",
        valor     :"R$ 14,00",
        descricao :"3,5kg",
        setor     :"outros"
    },
    {
        imagem    : "./assets/img/imgProdutos/refrigerante/sprite.jpg",
        nome      :"Sprite",
        valor     :"R$ 8,00",
        descricao :"2L",
        setor     :"refrigerantes"
    },
    {
        imagem    : "./assets/img/imgProdutos/refrigerante/guaLat.jpg",
        nome      :"Guarana lata 350ml",
        valor     :"R$ 28,00",
        descricao :"Caixa com 12 latas",
        setor     :"refrigerantes"
    },
    {
        imagem    : "./assets/img/imgProdutos/outros/vinho.jpg",
        nome      :"Vinho Colonial 2L",
        valor     :"R$ 10,00",
        descricao :"Seco e suave bordô",
        setor     :"outros"
    },
    {
        imagem    : "./assets/img/imgProdutos/whisky/dre.jpg",
        nome      :"Dreher",
        valor     :"R$ 16,00",
        descricao :"900ml",
        setor     :"whisky"
    },
    {
        imagem    : "./assets/img/imgProdutos/whisky/pass.jpg",
        nome      :"Passport",
        valor     :"R$ 50,00",
        descricao :"900ml",
        setor     :"whisky"
    },
    {
        imagem    : "./assets/img/imgProdutos/whisky/jose.jpg",
        nome      :"Jose Cuervo",
        valor     :"R$ 110,00",
        descricao :"750ml tequila",
        setor     :"whisky"
    },
    {
        imagem    : "./assets/img/imgProdutos/carvao/jack.jpg",
        nome      :"Jack ",
        valor     :"R$ 30,00",
        descricao :"coco, 1 kg",
        setor     :"carvao"
    },
    {
        imagem    : "./assets/img/imgProdutos/carvao/chacal.jpg",
        nome      :"Chacal",
        valor     :"R$ 25,00",
        descricao :"500 G",
        setor     :"carvao"
    },
    {
        imagem    : "./assets/img/imgProdutos/outros/jurupin.jpg",
        nome      :"Jurupinga",
        valor     :"R$ 23,00",
        descricao :"975ml",
        setor     :"outros"
    },
    {
        imagem    : "./assets/img/imgProdutos/essencias/ziggy.jpg",
        nome      :"Ziggy",
        valor     :"R$ 10,00",
        descricao :"Sabores variados, consultar disponibilidade",
        setor     :"essencias"
    },
    {
        imagem    : "./assets/img/imgProdutos/essencias/zomo.jpg",
        nome      :"Zomo",
        valor     :"R$ 10,00",
        descricao :"Sabores variados, consultar disponibilidade",
        setor     :"essencias"
    },
    {
        imagem    : "./assets/img/imgProdutos/essencias/adalia.jpg",
        nome      :"Adalya",
        valor     :"R$ 14,00",
        descricao :"Sabores variados, consultar disponibilidade",
        setor     :"essencias"
    },
    {
        imagem    : "./assets/img/imgProdutos/essencias/fm.jpg",
        nome      :"FM brasil",
        valor     :"R$ 12,00",
        descricao :"Sabores variados, consultar disponibilidade",
        setor     :"essencias"
    },
    {
        imagem    : "./assets/img/imgProdutos/essencias/onix.jpg",
        nome      :"Onix",
        valor     :"R$ 10,00",
        descricao :"Sabores variados, consultar disponibilidade",
        setor     :"essencias"
    },
];