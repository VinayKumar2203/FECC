// here i am working in cart.js   

function getAddToCart() {
    let cartVal = localStorage.getItem('cart');
    console.log(cartVal);
    if (cartVal) {
        let addToCartvalue = JSON.parse(cartVal);
        addToCartvalue.forEach(element => {
            console.log(element);

            let name = document.createElement('h2');
            let email = document.createElement('p');
            let button = document.createElement('button');
            let div1 = document.createElement("div");
            div1.id = "cont";

            name.innerText = `Name: ${element.name}`;
            email.innerText = `Email: ${element.email}`;
            button.innerText = "Delete";

            div1.append(name, email, button);

            let displayData = document.getElementById('display');
            displayData.append(div1);

            button.addEventListener('click', () => {
                addToCartvalue = addToCartvalue.filter((item) => {
                    console.log(item);
                    item.name === element.name
                });
                localStorage.setItem('cart', JSON.stringify(addToCartvalue));
                div1.remove();
            })


        });
    }
}


getAddToCart();