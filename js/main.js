// MODELO TIENDA VIRTUAL ALQUILER EQUIPAMIENTO DJS 

class producto {
    constructor(nombre, caracteristicas, precio) {
        this.nombre  = nombre;
        this.caracteristicas = caracteristicas;
        this.precio  = precio;
        
    }
    descuentos () {
        this.descuento = this.precio / 100 * 95;
        }
}

//Declaro un array de productos para almacenar objetos

const stock = [];
stock.push(new producto("CDJ 2000 Nexus 2", "Reproductor Digital Para Dj" , "6200"));
stock.push(new producto("DJM 900 Nexus 2", " Procesador de señal digital Para Dj" , "7000"));
stock.push(new producto("Das Vantec Combo", " Sistema profesional Sonido Dj" , "22000"));



for (const producto of stock)
    producto.descuentos ();
for (let index = 0; index < 4; index++){
    console.log (stock[index]);
}




