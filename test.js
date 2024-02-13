class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            throw new Error('Error: Todos los campos son obligatorios');
        }

        if (this.products.some(existingProduct => existingProduct.code === product.code)) {
            throw new Error('Error: Código duplicado');
        }

        product.id = this.productIdCounter++;
        this.products.push(product);
        console.log('Producto agregado:', product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error('Error: Not found');
        }
        return product;
    }
}

const manager = new ProductManager();

console.log('Productos al inicio:', manager.getProducts());

try {
    manager.addProduct({
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25
    });
} catch (error) {
    console.error(error.message);
}

console.log('Todos los productos:', manager.getProducts());

try {
    manager.addProduct({
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25
    });
} catch (error) {
    console.error(error.message);
}

try {
    console.log('Producto con id 1:', manager.getProductById(1));
    console.log('Producto con id 99:', manager.getProductById(99));
} catch (error) {
    console.error(error.message);
}
