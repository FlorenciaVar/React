import { db } from "../firebaseConfig"

import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productsRef = categoryId 
            ? query(collection(db, 'cervezas'), where('category', '==', categoryId))
            : collection(db, 'cervezas')

        getDocs(productsRef)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(documentSnapshot => {
                    const fields = documentSnapshot.data()
                    
                    return {
                        id: documentSnapshot.id,
                        ...fields
                    }
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    }) 
}

export const getProductById = (itemId) => {
    const productRef = doc(db, 'cervezas', itemId)

    return getDoc(productRef)
                .then(documentSnapshot => {
                    const fields = documentSnapshot.data()
                    const productAdapted = { id: documentSnapshot.id, ...fields }
                    return productAdapted
                })
                .catch(error => {
                    return error
                })
}