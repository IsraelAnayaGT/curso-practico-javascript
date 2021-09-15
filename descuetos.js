/*****************************************************************************************/
/*Calcular Precio y Descuento Inicio*/
/*****************************************************************************************/

//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}
/*****************************************************************************************/
/*Calcular Precio y Descuento Final*/
/*****************************************************************************************/

/*****************************************************************************************/
/*Calcular Precio y Descuento Interación con HTML Inicio*/
/*****************************************************************************************/
function clickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("inputPrecio");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDescuento");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resutlPrice = document.getElementById("ResultP");
    resutlPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}
/*****************************************************************************************/
/*Calcular Precio y Descuento Interación con HTML Final*/
/*****************************************************************************************/


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });