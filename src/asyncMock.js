const products = [
    { 
        id: '1', 
        name: 'Blonde Ale', 
        price: 2000, 
        category: 'Clásicas', 
        img:'https://cervezagoyeneche.com.ar/wp-content/uploads/2020/10/Cerveza-Artesanal-Goyeneche-Blonde-Ale.png', 
        stock: 25, 
        description:'Cerveza rubia de alta tomabilidad, brillante y cristalina. Se percibe el sabor dulce de la malta en perfecto equilibrio con el aroma de los lúpulos que otorgan agradables notas cítricas.'
    },
    { id: '2', name: 'Honey', price: 2500, category: 'Aromáticas', img:'https://cervezagoyeneche.com.ar/wp-content/uploads/2020/10/Cerveza-Artesanal-Goyeneche-Honey.png',description:'Cerveza de color dorado profundo con el aporte justo de miel que se luce junto a un complejo blend de maltas. Perfectamente balanceada y de alta tomabilidad, final seco con retrogusto dulce y aromático.'},
    { id: '3', name: 'IPA', price: 2500, category: 'Lupuladas', img:'https://cervezagoyeneche.com.ar/wp-content/uploads/2020/10/Cerveza-Artesanal-Goyeneche-IPA.png', description:'Cerveza de estilo moderno, de color dorado, con alta tomabilidad. El blend de maltas otorga el soporte justo para destacar y resaltar el aroma y los sabores del lúpulo, entre ellos se perciben notas cítricas, frutas de carozo, frutas tropicales y sutil resina.'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}