let stars=document.querySelectorAll(".stars i");
console.log(stars);
stars.forEach((star,index)=>{
    // console.log(star);
    star.addEventListener('click',()=>{
        console.log('clicked',index)

        stars.forEach((star,index2)=>{
            console.log(index2,"nested")
            if (index >= index2) {
                star.classList.add('active');
            }else{
                star.classList.remove('active');

            }
        })
    })
})