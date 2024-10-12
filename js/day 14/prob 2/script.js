let formData = document.getElementById('formData');
let product = [];
formData.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let rating = document.getElementById("rating").value;


    console.log(name, price, rating);
    let obj = {
        name,
        price,
        rating
    }
    product.push(obj);
    renderData();
})
console.log(product);

function renderData() {
    // product.innerHtml="";
    let priceGraph = document.getElementById('priceGraph');
    let ratingGraph = document.getElementById('ratingGraph');

    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';
    product.forEach((ele) => {
        console.log(ele);

        //  this is for price=--------

        let div1 = document.createElement('div');
        div1.classList = "gethringData"
        let hOne = document.createElement('h2');
        hOne.innerText = `name:-${ele.name}`;

        let p1 = document.createElement('p');
        p1.innerText = ` price:-${ele.price}`;

        let pRating = document.createElement('p');
        pRating.innerText = `rating:-${ele.rating}`;


        div1.append(hOne, p1, pRating);

        let div2 = document.createElement('div');
        div2.classList = "gethringData"
        let hPn = document.createElement('h2');
        hPn.innerText = `name:-${ele.name}`;

        let p2 = document.createElement('p');
        p2.innerText = ` price:-${ele.price}`;

        let pRating1 = document.createElement('p');
        pRating1.innerText = `rating:-${ele.rating}`;


        div2.append(hPn, p2, pRating1);

        priceGraph.append(div1);
        ratingGraph.append(div2);
    })
}

let shortByPrice = document.getElementById('shortByPrice');
shortByPrice.addEventListener('click', () => {
    product.sort((a, b) => {
        return b.price - a.price;
    })
    renderData();
})

let shortByRating = document.getElementById('shortByRating');
shortByRating.addEventListener('click', () => {
    product.sort((a, b) => {
        return b.rating - a.rating;
    })
    renderData();
})
