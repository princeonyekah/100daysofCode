let color = document.querySelector('.color');

var body = document.querySelector("body")

color.addEventListener('keyup', function(event){
    body.style.backgroundColor = event.target.value
});

