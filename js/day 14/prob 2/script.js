let formData=document.getElementById('formData');
formData.addEventListener('submit',(e)=>{
    e.preventDefault();

    let name=document.getElementById("name").value;
    let price=document.getElementById("price").value;
    let rating=document.getElementById("rating").value;


console.log(name,price,rating);
// console.log()
})

function fetchData() {
 fetch(db.json)
}