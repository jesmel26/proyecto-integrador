fetch('api/products/products-in-cart.json')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .then(productsCart => {
        let htmlCartProductAdd = '';
        let subTotal = 0;
        let total = 0;

productsCart.forEach(product => {
    subTotal = product.price * product.amount;
    total += subTotal;
    htmlCartProductAdd += 
    `
    <tr>
        <td class="product__image"><img src="img/products/${product.image}" alt="${product.title}"></td>
        <td class="product__title">${product.title}</td>
        <td class="product__price">$${product.price}</td>
        <td class="product__amount">${product.amount}</td>
        <td class="product__subtotal">$${subTotal}</td>
        <td class="product__remove"><span>❌</span></td>
    </tr>
    `;
    });

    document.querySelector('.products-container').innerHTML = htmlCartProductAdd;
    document.querySelector('.product__cart-total').innerHTML = '$' + total;

    /* Simular eliminar productos del carrito */
    const removeProduct = document.querySelectorAll('.product__remove');
    const productTitle = document.querySelectorAll('.product__title');

    removeProduct.forEach((removeBtn, index) => {
        removeBtn.addEventListener('click', () => {
            const productName = productTitle[index].innerHTML;
            console.log(`El producto "${productName}" ha sido eliminado del carrito`);
        });
    });
    /* Fin de simular eliminar productos del carrito */
    
    })
    .catch(error => {
    console.error('Error:', error);
});


