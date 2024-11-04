let stars = document.querySelectorAll('.stars i');
console.log(stars);

stars.forEach((star, index1) => {
    console.log(star)
    star.addEventListener('click', () => {
        // console.log('clicked');
        // console.log(star)
        console.log("i",index1);

        stars.forEach((star, index2) => {
            console.log("2",index2)
            if (index1 >= index2) {
                star.classList.add('active');
            }
            else{
                star.classList.remove('active');
            }
        })
    })

})