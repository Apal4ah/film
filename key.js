// inital references 
let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');
const key = ('f6ab26d1');


// function to fetch data from api
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    // if input field is empty
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Tolong masukkan judul film!</h3>`;
    }
    // if input field is not empty
    else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                // if movie exists in database
                if (data.Response === 'True') {
                    result.innerHTML = `<div class="info">
                    <img src=${data.Poster} class"poster">
                        <div>
                            <h2 class="title">${data.Title}</h2>
                            <div class="rating">
                            <img src="star (1).svg">
                            <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                        <h3>Cast:</h3>
                        <p>${data.Actors}</p>`;
                } else {
                    result.innerHTML= `<h3 class="msg">${data.Error}</h3>`
                }
            })
            // if error eccured
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Kesalahan terjadi, silakan coba lagi nanti.</h3>`;
            })
    }
};
searchBtn.addEventListener('click', getMovie);
window.addEventListener('load', getMovie);

