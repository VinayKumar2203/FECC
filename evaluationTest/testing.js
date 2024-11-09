// let search='leanne'
let root = document.getElementById('root');
let search = document.getElementById('search');
let currentPage = 1;
let userPerPage = 2;

function fetchUser(page) {

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(users => {
            let filterUsers = users.filter(user =>
                user.name.toLowerCase().includes(search.value.toLowerCase())
            )

            let start = (page - 1) * userPerPage;
            let end = start + userPerPage;

            let pagination = filterUsers.slice(start, end);
            root.innerHTML = "";
            displayUsersDetails(pagination);
        })
}

function displayUsersDetails(json) {
    console.log(json);
    let users = json;
    users.map((user) => {
        // console.log(user);
        let { name, email, phone } = user
        // console.log(name)
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let div = document.createElement('div');
        let p2 = document.createElement('p');
        p2.innerText = `phone:- ${phone}`
        h3.innerText = `name:-${name}`;
        p.innerText = `email:-${email}`;

        div.append(h3, p, p2);
        // console.log(div)
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

search.addEventListener('input', () => {
    fetchUser(currentPage);
})

fetchUser(currentPage)