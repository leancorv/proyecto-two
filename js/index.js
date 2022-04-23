
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



