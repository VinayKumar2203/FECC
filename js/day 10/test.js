// Fetch the list of users
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        // Get the first user
        console.log(users);
        const firstUser = users[0];
        console.log("First User:", firstUser);

        // Fetch posts of the first user
        return fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`
        );
    })
    .then((response) => response.json())
    .then((posts) => {
        console.log("First User's Posts:", posts);
        // get the first post
        let FirstPost = posts[0];


        // console.log the first post
        // console.log("first user post", FirstPost);
        // fetch the comments of the first post https://jsonplaceholder.typicode.com/comments?postId=91
        // return that promise
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${FirstPost.id}`)
    })
    .then((post)=>post.json())
    .then((getPost)=>{
        console.log(getPost);
    })
// chain .then and resolve and log all of the comments
