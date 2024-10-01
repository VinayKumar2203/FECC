let user = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    },
];
let arrOfAddToCart = JSON.parse(localStorage.getItem('cart')) || [];
let count = 0;

 function upDateCounter(){
     let addProduct = document.getElementById('addProduct');
     addProduct.innerText= count;
    // console.log('i am ',addProduct);
    }
user.forEach((userDetails) => {
    showData(userDetails);
})

function showData(detailsOFuser) {
    // let count = 0;
    let displayData = document.getElementById("display");
    
    //of add to cart====================== 
   

    let name = document.createElement('h2')
    let email = document.createElement('p');
    let button = document.createElement('button');
    let div1 = document.createElement("div");
    div1.id = "cont";
    name.innerText = `Name: ${detailsOFuser.name}`;
    email.innerText = `Email: ${detailsOFuser.email}`;

    button.innerText = "AddCart"
    button.id = "btn";
    div1.append(name, email, button)
    displayData.append(div1);


    // logic for addToCart--------------'
    button.addEventListener("click", (event) => {
        alert(`${detailsOFuser.name} is now added the in cart`);
        // console.log(name, email)
        ++count;
        upDateCounter();
        // console.log('co',count);
        // console.log(addProduct);
        event.preventDefault();
        localStorage.setItem('UserName', detailsOFuser.name);
        localStorage.setItem('UserEmail', detailsOFuser.email);
        let obj = {
            name: detailsOFuser.name,
            email: detailsOFuser.email
        }
        arrOfAddToCart.push(obj);
        // console.log(arrOfAddToCart);
        localStorage.setItem('cart', JSON.stringify(arrOfAddToCart));
    });



}


