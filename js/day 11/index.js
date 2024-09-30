    // Q.6 prob6
    // https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    // https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
    let getIngredient = document.getElementById('get-ingredeint-data');
    let getcategory = document.getElementById('get-category-data');
    function getCategoryData() {
        try {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
                .then((res) => {
                    return res.json();
                }).then((data) => {
                    console.log(data);
                })
        } catch (error) {
            console.log(error)
        }
    }


    function getIngredientData() {
        try {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
                .then((res) => {
                    return res.json();
                }).then((data) => {
                    console.log(data);
                })
        } catch (error) {
            console.log(error)
        }
    }


    getcategory.addEventListener('click', () => {
        getCategoryData();
    })

    getIngredient.addEventListener('click', () => {
        getIngredientData();
    })