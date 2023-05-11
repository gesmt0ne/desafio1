class ProductManager {
    constructor(){
        this.products = [];
    }


    generateId() {
        return Math.random().toString(36).substr(2,9);
    }


    getProducts() {
        return this.products;
    }

    addProduct(productsData){
        const { code } = productsData;
    

        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            throw new Error("El codigo del producto esta en uso");
        }

        const newProduct = {
            id: this.generateId(),
            ...productsData
    };

    this.products.push(newProduct);
}

  

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);

        if (!product) {
          throw new Error("No se encontro el producto con el ID especificado");
        }

         return product;
    }  
    
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

try {
    productManager.addProduct({
        title: "Product",
        description: "Testing product",
        price: 200,
        thumbnail: "No image",
        code: "abc123",
        stock: 25
    })
    console.log("Producto agregado exitosamente");
}   catch (error) {
    console.log("Error al agregar el producto", error.message);
}

try {
    const productId = productManager.getProducts()[0].id;
    const product = productManager.getProductById(productId);
    console.log("Producto encontrado", product);
}   catch (error) {
    console.log("Error al obtener el producto", error.message);
}

try {
    const invalidProductId = "invalid-id";
    const product = productManager.getProductById(invalidProductId);
    console.log("Producto encontrado", product);
}   catch (error) {
    console.log("Error al obtener el producto", error.message);
}

