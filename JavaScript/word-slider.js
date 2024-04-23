/* Simple Script to animate elements based on user scrolling */

let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.marginRight = value * 2.2 + 'px';
    text.style.marginTop = value * 0.5 + 'px';
    btn.style.marginTop = value * 0.5 + 'px';
});