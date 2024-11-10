let root = document.getElementById('root');
let inputVal = document.getElementById('inputVal');
let selectValue = document.getElementById('selectValue');

let currentPage = 1;
let postPerPage = 10;


function fetchUser(page) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            let filterUsers = json.filter(user =>
                user.title.toLowerCase().includes(inputVal.value.toLowerCase())
            )
            let start = (page - 1) * postPerPage;
            let end = start + postPerPage;
            let paginatation = filterUsers.slice(start, end);
            root.innerHTML = "";

            if (selectValue.value === "asc") {
                paginatation.sort((a, b) => a.id - b.id);
            } else if (selectValue.value === "desc") {
                paginatation.sort((a, b) => b.id - a.id);
            }
            displayData(paginatation);
        })
        .catch((err) => {
            console.log('this is err', err)
        })
        .finally(() => {
            console.log('ok');
        })
}

function displayData(posts) {
    posts.forEach(post => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let pId = document.createElement('p');
        pId.innerText = `id:-${post.id}`;
        p.innerText = `title:- ${post.title}`;
        div.append(pId, p);
        root.append(div);
    });


}

inputVal.addEventListener('input', () => {
    fetchUser(currentPage);
})

function nextBtn() {
    if (currentPage < 10) {
        currentPage++;
        fetchUser(currentPage);
    }
}
function prevBtn() {
    if (currentPage > 1) {
        currentPage--;
        fetchUser(currentPage);
    }
}

selectValue.addEventListener('change', () => {
    console.log(selectValue.value)
    fetchUser(currentPage);
})

fetchUser(currentPage);