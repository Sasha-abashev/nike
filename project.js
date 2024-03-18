document.addEventListener('DOMContentLoaded', function() {
    var link = document.querySelector('.scroll-to-end');
    link.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
var link = document.querySelector('.scroll-to-top');
link.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
});

document.addEventListener('DOMContentLoaded', function() {
var link = document.querySelector('.scroll-to-25');
link.addEventListener('click', function(event) {
    event.preventDefault();
    var offset = window.innerHeight * 0.25;
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});
});

document.addEventListener('DOMContentLoaded', function() {
var link = document.querySelector('.scroll-to-50');
link.addEventListener('click', function(event) {
    event.preventDefault();
    var offset = window.innerHeight * 1.16;
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});
});

document.addEventListener('DOMContentLoaded', function() {
var link = document.querySelector('.scroll-to-75');
link.addEventListener('click', function(event) {
    event.preventDefault();
    var offset = window.innerHeight * 2;
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});
});

