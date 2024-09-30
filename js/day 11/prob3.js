let button = document.getElementById('btn');
let display = document.getElementById('display');
let main = document.getElementById('main');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let currentPage = 1;

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        console.log(currentPage);
        getMovies(currentPage);
    }
});

nextBtn.addEventListener("click", () => {
    currentPage++;
    console.log(currentPage);
    getMovies(currentPage);
});


button.addEventListener("click", () => {
    currentPage = 1;
    getMovies(currentPage)
});

function getMovies(page = 1) {
    let API_KEY = "bad97c74";
    let seacrhTitle = document.getElementById('InputType').value;
    display.innerHTML = "";
    if (seacrhTitle == '') {
           display.innerText=`please enter your movie name`
    } else {
        try {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${seacrhTitle}&page=${page}`)
                .then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data.Response === "True") {
                        let getData = data.Search;
                        showData(getData);
                        seacrhTitle = '';
                        // prevBtn.disabled=(page === 1);
                        // nextBtn.disabled = (getData.length < 10);
                        if (page === 1) {
                            prevBtn.disabled = true;
                        }
                        else {
                            prevBtn.disabled = false;
                        }
                        if (getData.length < 10) {
                            nextBtn.disabled = true;
                        }
                        else {
                            nextBtn.disabled = false;
                        }
                    } else {
                        display.innerHTML = `<p>No movies found for "${seacrhTitle}".</p>`;

                    }
                });

        } catch (error) {
            console.log('error fetching data', error);
            display.innerHTML = `something went wrong please try again after some time..`;
        }
    }
}
// getMovies(currentPage)



// show data function;
function showData(movieDetails) {
    // document.getElementById('InputType').value = '';

    // console.log('display clear', display);
    console.log(movieDetails);
    movieDetails.forEach((movie) => {
        let image = document.createElement('img')
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let div1 = document.createElement('div')

        div1.id = 'cont'
        image.id = "image";

        console.log(movie);

        let poster = movie.Poster;
        let title = movie.Title;
        let year = movie.Year;
        let type = movie.Type;

        image.src = poster;
        h2.innerText = `title:- ${title}`;
        p1.innerText = `year :-${year}`;
        p2.innerText = `type:- ${type}`;

        div1.append(image, h2, p1, p2);
        display.append(div1);
    })
}

