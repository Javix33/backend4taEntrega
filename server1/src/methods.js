const products = require("./arrayProductos");
class requests {
    static getAll() {
        return products.Products();
    }
    static getById(id) {
        return products.getProductById(id);
    }
    static add(product) {
        return products.addProduct(product);
    }
    static update(id, newContent) {
        return products.updateProduct(id, newContent);
    }
    static delete(id) {
        return products.deleteProduct(id);
    }
}

module.exports = requests;