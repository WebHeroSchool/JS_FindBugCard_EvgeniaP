const menuItem = document.getElementsByClassName('menu__item-text');
const btn = document.getElementById('btn');
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const card = document.querySelectorAll('.card');
const back = document.querySelectorAll('.card__back');
const face = document.querySelectorAll('.card__face');


[].forEach.call(menuItem, function(elem, i) {

    menuItem[i].addEventListener('click', event => {

        const rectanagle = document.getElementsByClassName('menu__item-rectanagle');
        [].forEach.call(rectanagle, function(elem) {
            elem.classList.remove('active');
        });
        rectanagle[i].classList.add('active');
        const activelevel = menuItem[i].getAttribute('id') + '-level';

        btn.onclick = function() {
            const level = document.getElementById(activelevel);
            header.classList.add('hidden');
            nav.classList.add('hidden');
            level.classList.add('active-level');
            const randomCard = level.querySelectorAll('.card__face');
            const random = Math.floor(Math.random() * randomCard.length);
            randomCard[random].classList.add('card__face-bug');
        }

    });

});

cardHover(card);
flipTheCard(card);


function cardHover(el) {
    el.forEach(function(item) {
        item.addEventListener('mouseover', function f() {
            item.classList.add('card-hover');
            item.addEventListener('mouseout', event => {
                item.classList.remove('card-hover');
            });
            item.onclick = function() {
                item.removeEventListener('mouseover', f);
            }
        });
    });
}


function flipTheCard(el) {
    let count = 0;
    el.forEach(function(item, i) {
        item.addEventListener('click', function f() {
            count++;
            if (count > 1) {
                item.removeEventListener('click', f);
                this.onclick = function() {
                    location.reload();
                }
            } else {
                item.classList.add('card-return');
                back[i].classList.add('card__back-transform');
                face[i].classList.add('card__face-transform');
            }
        });
    });
}