const cartItemsList = document.getElementById('cart-items');
const totalSpan = document.getElementById('total');
const cart = [];
let totalPrice = 0;

// const menuBar = ['home', 'news', 'cart', 'about'];

// menuBar.forEach(i => {
//     const item = document.getElementById(i);
//     item.style.padding = (window.width)/4;
// });



function addToCart(itemName, itemPrice) {
    const cartItem = { name: itemName, price: itemPrice };
    cart.push(cartItem);
    updateCart();
}

function updateCart() {
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        totalPrice += item.price;
    });

    totalSpan.textContent = totalPrice.toFixed(2);
}





// // Listen for the scroll event
// window.addEventListener('scroll', function () {
//     // Check if the page is scrolled to the bottom
//     const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

//     // If scrolled to the bottom, expand the cart width
//     if (isBottom) {
//         cartElement.style.width = '100%';
//     } else {
//         cartElement.style.width = 'auto';
//     }
// });