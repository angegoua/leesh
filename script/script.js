const parallax = document.querySelector('.parallax')

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset
    parallax.style.backgroundPositionY =  offset * -0.2 + 'px';
})


const hamburger = document.querySelector('.menu')

hamburger.addEventListener('click', function(){
    const hamburgerContent = document.querySelector('.menu-content')
    const span = document.querySelectorAll('span')
    
    for(let i = 0; i<span.length; i++){
        span[i].style.backgroundColor = 'white'
    }

    hamburgerContent.style.transition = 0.5
    hamburgerContent.style.height = 100 + 'vh';

})