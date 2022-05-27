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


// CAROUSEL
document.addEventListener("click", e => {
    let flecha
    if (e.target.matches(".flecha")) {
        flecha = e.target
    } else {
        flecha = e.target.closest(".flecha")
    }
    if (flecha != null) onflechaClick(flecha)
})

const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
}, 250)

window.addEventListener("resize", throttleProgressBar)

document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

function calculateProgressBar(progressBar) {
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".carousel").querySelector(".slider")
    const itemCount = slider.children.length
    const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"))
    let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)
    if (sliderIndex > progressBarItemCount) {
        slider.style.setProperty("--slider-index",progressBarItemCount - 1)
        sliderIndex = progressBarItemCount - 1
    }
    for (let i = 0; i < progressBarItemCount; i++) {
        const barItem = document.createElement("div")
        barItem.classList.add("progress-item")
        if ( i === sliderIndex) {
            barItem.classList.add("active")
        }
        progressBar.append(barItem)
    }
}

function onflechaClick(flecha) {
    const progressBar = flecha.closest(".carousel").querySelector(".progress-bar")
    const slider = flecha.closest(".carousel-container").querySelector(".slider")
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    const progressBarItemCount = progressBar.children.length
    if (flecha.classList.contains("left-flecha")) {
        if (sliderIndex - 1 < 0) {
            slider.style.setProperty("--slider-index",progressBarItemCount - 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[progressBarItemCount - 1].classList.add("active")
        } else {
            slider.style.setProperty("--slider-index",sliderIndex - 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[sliderIndex - 1].classList.add("active")
        }
    }

    if (flecha.classList.contains("right-flecha")) {
        if (sliderIndex + 1 >= progressBarItemCount) {
            slider.style.setProperty("--slider-index", 0)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[0].classList.add("active")
        } else {
            slider.style.setProperty("--slider-index",sliderIndex + 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[sliderIndex + 1].classList.add("active")
        }
    }
}

//Funcion para mejorar el rendimiento de la funcion de progress bar
function throttle(cb, delay = 250) {
    let shouldWait = false
  
    return (...args) => {
      if (shouldWait) return
  
      cb(...args)
      shouldWait = true
      setTimeout(() => {
        shouldWait = false
      }, delay)
    }
}

// DROPDOWN EFFECT

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})