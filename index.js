/*realizar un clase productmager que gestione un conjunto de porductos*/
// al hablar de gestionar es un CRUD
// Create, Read, Update, Delete
// Create: crear un producto
// Read: leer un producto
// Update: actualizar un producto
// Delete: eliminar un producto
// vamos a crear una clase que se llame ProductManager
// vamos a crear un constructor

//ahora las porpiedades

class ProductManager {
    constructor() {
        this.products = [];
        //this.index = 0
    }

    generateID = () => {
        if (this.products.length === 0) return 1
        return this.products[this.products.length - 1].id + 1
    }

    getProducts = () => {
        return this.products
    }

    addProducts = (tittle, description, thumbnail, price, code, stock) => {

        //this.index++
        const id = this.generateID()
        const events = {id, tittle, description, thumbnail, price, code, stock }

        const codeRepeat = this.products.find((product) => product.code === code)
        if (codeRepeat) {
            return console.log('el codigo ya existe')
        }
        
        //validar que todas las propiedades sean obligatorias  y que el codigo no se repita

        if (!tittle || !description || !thumbnail || !price || !code || !stock) {
            return console.log('faltan datos en las propiedades')
        }
        this.products.push(events)

    }

    //metodo para encontrar producto psandole el id
    getProductById = (id) => {
        const product = this.products.find((product) => product.id === id)
        if (product === undefined) {
            console.error('ERROR NOT FOUND')
        }
        return product

    }
}


const productos = new ProductManager()

productos.addProducts('ropa deportiva', ' camiseta real madrid', '/img/barcelona.jpg', 200000, 'AF25', 2000)
productos.addProducts('ropa deportiva', ' camiseta real madrid', '/img/real.jpg', 200000, 'AF27', 2000)
productos.addProducts('ropa deportiva', ' camiseta real madrid', '/img/real.jpg', 200000, 'AF26', 2000)
productos.getProducts()

//console.log(productos.getProductById(1))
//console.log(productos.getProducts())
console.log(productos.getProducts())
//console.log(productos.addProducts())
