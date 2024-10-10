// let form=document.getElementById('myForm');
// form.addEventListener('submit',(event)=>{
//     event.preventDefault();

//     let userName=document.getElementById('userName').value;
//     let userEmail=document.getElementById('userEmail').value;
//     let password=document.getElementById('userPassword').value;

//     console.log('userName:',userName)
//     console.log('userEmail:',userEmail)
//     console.log('password:',password)
// })

let form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let userName = document.getElementById('userName').value.trim();
    let userEmail = document.getElementById('userEmail').value.trim();
    let password = document.getElementById('userPassword').value.trim();

    if (!userName.match(/^[A-Za-z]+$/)) {
        console.log('Error: Name should contain only alphabetic characters.');
    } else if (!userEmail.match(/^[a-z0-9._%+\-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        console.log('Error: Invalid email format.');
    } else if (password.length < 8) {
        console.log('Error: Password should be at least 8 characters long.');
    } else {
        console.log('userName:', userName);
        console.log('userEmail:', userEmail);
        console.log('password:', password);
    }
});
