let root = document.getElementById("root");
let search = document.getElementById('search');
// let search = "leanne";
let currentPage = 1;
const userPerPage = 2;

function fetchUser(page) {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then((users) => {
            let filterUsers = users.filter(user =>
                user.name.toLowerCase().includes(search.value.toLowerCase())
            );

            let start = (page - 1) * userPerPage;

            let end = start + userPerPage;

            let paginatedUser = filterUsers.slice(start, end)

            console.log('paginatedUser', page, paginatedUser);

            root.innerHTML = "";

            displayUsersDetails(paginatedUser)
        })
        .catch((err) => {
            console.log(`error from fetch api ${err}`)
        })
        .finally(() => {
            console.log('api is completely runnig');
        })
}

// user display details running here.................

function displayUsersDetails(json) {
    let users = json;
    users.map((user) => {
        let { name, email, phone } = user
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let div = document.createElement('div');
        let p2 = document.createElement('p');
        p2.innerText = `phone:- ${phone}`
        h3.innerText = `name:-${name}`;
        p.innerText = `email:-${email}`;


        div.append(h3, p, p2);
        root.append(div);
    })

}


function nextfun() {
    if (currentPage < 5) {
        currentPage++;
        fetchUser(currentPage)
    }
}
function prevfun() {
    if (currentPage > 1) {
        currentPage--;
        fetchUser(currentPage);
    }
}

search.addEventListener('input',()=>{
    fetchUser(currentPage);
})
fetchUser(currentPage);