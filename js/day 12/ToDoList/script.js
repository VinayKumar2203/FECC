let addToDoBtn = document.getElementById("addToDo");
let value=localStorage.getItem('table');
let tableData = document.getElementById("tableData");

console.log(value)

if (value) {
    tableData.innerText=value;
    deleteFunc();
}



addToDoBtn.addEventListener('click', () => {
    let inputValue = document.getElementById("inputValue").value;
    let optValue = document.getElementById("optValue").value;
    let tableData = document.getElementById("tableData");
    if (inputValue === '') {
        alert("please enter some value");
    }
    else {
        console.log(inputValue);
        console.log(optValue);
        tableData.innerHTML += `<tr>
                        <td>${inputValue}</td>
                        <td>${optValue}</td>
                        <td>vinay</td>
                        <td>
                        <button class="deleteBtn">delete</button>
                        </td>
                    </tr>`
                deleteFunc();
                localStorage.setItem('table',tableData.innerText)
    }
});

function deleteFunc() {
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach((deleteBtn)=>{
       deleteBtn.addEventListener('click',(e)=>{
        e.target.closest('tr').remove();
        localStorage.setItem('table', document.getElementById("tableData").innerHTML);
       });
    });

}