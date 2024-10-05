let imageAnimal=document.getElementById('imageAnimal');
let animal=document.getElementById('animal');
let p1=document.getElementById('viewResult');

let images = {
    lion: 'https://th.bing.com/th?id=OIP.y6MXl1TwB-x2bZFfTsh7MAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    elephant: 'https://th.bing.com/th?id=OIP.-D5xt6nfX4BGup0qkTmyiAHaFI&w=300&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    cat: 'https://th.bing.com/th?id=OIP.cGWmQuhX3NVB2SF2lB-28wHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    dog: 'https://th.bing.com/th/id/OIP.eIEz73xZoLmYwqTF92FciwHaEw?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
};

animal.addEventListener('change',()=>{
    const selectedValue = animal.value;
    p1.innerText=`Selected: ${selectedValue}`

    if (images[selectedValue]) {
        imageAnimal.src=images[selectedValue];
    }
    else{
        imageAnimal.src='https://th.bing.com/th?id=OIP.gYOa8_0w6h_sYZ_SvSeHRQHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    }
})


