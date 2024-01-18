class Carrito {
    #productos;
    #carrito;
    #cantidad;
  
  
    constructor(productos) {
      this.#productos = productos;
      this.#carrito = [];
      this.#cantidad = 0;
    }
  
    addProductos(producto) {
      this.#carrito.push(producto);      
    }
  
    quitarProducto(referencia) {
      this.productos = this.#productos.filter(
        (refSelec) => refSelec !== referencia);
    }
  
    obtenerProducto(referencia) {
      return this.#productos.products.find((producto) => producto.SKU === referencia);
    }
  
    calcularTotal(cantidad, precio) {
      return (cantidad * precio) + this.#productos.currency;
    }
  
    actualizarCantidad() {
      Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    }
  
  
  }
  
  
  