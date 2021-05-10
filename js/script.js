$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("+7 (999) 999-9999");
});

let elms = document.getElementsByClassName( 'splide' );
for ( let i = 0, len = elms.length; i < len; i++ ) {
    new Splide( elms[ i ] ).mount();
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}