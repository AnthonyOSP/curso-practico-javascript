var precioOriginal = 120;
var descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}
