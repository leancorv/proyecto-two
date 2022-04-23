
// EFECTO SCROLL NAVBAR
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let ubicacionActual = window.pageYOffset

    // console.log(ubicacionActual)
    if( ubicacionPrincipal >= ubicacionActual ) {
        $nav.style.backgroundColor = "transparent"
    } else {
        $nav.style.backgroundColor= "#141414"
    }

    // ubicacionPrincipal = ubicacionActual
})



// MENU SEARCH
const ARRMOVIES = [
    "The sinner",
    "Venom",
    "El Irlandes",
    "The Suits",
    "La Maldicion",
    "La triple frontera",
    "Defenders",
];

// PASOS
// 1 - ONCLICK I SEARCH
// 2 - AÑADIR LISTENER INPUT VALUE
// 3 - PINTAR PELICULAS QUE TENGAN EL VALUE DEL INPUT

function clickSearchIcon() {
    let icon = document.getElementById("searchIcon");

    // 1
    icon.classList.toggle("selected")

    let input = document.getElementById("searchInput");
    let searchListContainer = document.getElementById("searchListContainer");

    if(icon.classList.contains("selected")){
        input.style.visibility = "visible";
        input.style.opacity = 1;
        searchListContainer.style.display = "block";
        //2
        input.addEventListener("input",searchList)
    } else {
        input.style.visibility = "hidden";
        input.style.opacity = 0;
        searchListContainer.style.display = "none"; 
        // 2
        input.removeEventListener("input",searchList)

    }
}

function searchList(event) {
    const VALUE = event.target.value;

    //3
    let searchList = document.getElementById("searchList");

    searchList.innerHTML = "";

    for(let index = 0; index < ARRMOVIES.length; index++) {
        const MOVIE = ARRMOVIES[index]
        // MOVIE = The Sinner => the sinner
        // VALUE = T => t
        if(MOVIE.toLowerCase().includes(VALUE) && VALUE != ""){
            let htmlMovie = document.createElement("li");
            htmlMovie.innerHTML = MOVIE;
            searchList.appendChild(htmlMovie);

        }
    }
}