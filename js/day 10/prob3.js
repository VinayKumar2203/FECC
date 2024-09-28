// question 8;
//  Asynchronous User Data Retrieval;

function getUserData(id,callback) {
    setTimeout(() => {
        let user = {
            id: id,         
            name: 'John Doe',
            email: 'john@example.com'
        };
        callback(user);
    }, 2000); 
    
}

function displayUser(user) {
    console.log(user)
}
getUserData(1,displayUser);