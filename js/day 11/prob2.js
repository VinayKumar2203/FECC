let fetchUser = document.getElementById('fetchUser');
let display = document.getElementById('display');
// let div = document.createElement('div');
// let h2 = document.createElement('h2');
// let p = document.createElement('p');
fetchUser.addEventListener('click', () => {
  getUser()
});

function getUser() {
  try {
    console.log("hello vinay");
    let getUserFromApi = fetch("https://jsonplaceholder.typicode.com/users");
    getUserFromApi.then((res) => {
      return res.json();
    }).then((data) => {
      let getData = data;
      getData.map((ele) => {
        ShowDetails(ele);
      })
    })
  } catch (error) {
    console.log(error);
  }
}
function ShowDetails(ele) {
  // console.log(ele);
  let div = document.createElement('div');
  div.id='myDiv'
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  let name = `name:-${ele.name}`
  // console.log(name)
  h2.innerText = `name:-${ele.name}`;
  p.innerText = `email:-${ele.email}`;
  div.append(h2, p);
  display.append(div);
}