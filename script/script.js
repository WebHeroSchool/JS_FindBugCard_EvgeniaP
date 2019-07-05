const menuItem = document.querySelectorAll('.menu__item-text');
const btn = document.getElementById('btn');
const menu = document.getElementById('container');
const card = document.getElementById('card');
const back = document.querySelectorAll('.card__back');
const face = document.querySelectorAll('.card__face');
const cardContainer = document.getElementById('card-container');


menuItem.forEach(function(elem, i) {

    menuItem[i].addEventListener('click', event => {

        const rectanagle = document.querySelectorAll('.menu__item-rectanagle');
        rectanagle.forEach(function(elem) {
            elem.classList.remove('active');
        });
        rectanagle[i].classList.add('active');
        const activelevel = menuItem[i].getAttribute('id') + '-level';

        btn.onclick = function() {

            menu.classList.add('hidden');
            cardContainer.classList.add(activelevel);
            addCard();
            function addCard() {
                let adeedCards;            
                
                if (activelevel === 'easy-level') {
                    addedCards = 2;
                } else if (activelevel === 'medium-level') {
                    addedCards = 5;
                } else if (activelevel === 'hard-level') {
                    addedCards = 9;
                }

                for (let i = 0; i < addedCards; i++) {
                    createCard(card);
                }
            }

            const randomCard = cardContainer.querySelectorAll('.card__face');
            const random = Math.floor(Math.random() * randomCard.length);
            randomCard[random].classList.add('card__face-bug');
            const allCards = document.querySelectorAll('.card');
            cardHover(allCards);
            flipTheCard(allCards);
        }

    });

});


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
                item.children[0].classList.add('card__back-transform');
                item.children[1].classList.add('card__face-transform');
            }
        });
    });
}

function createCard(card) {
    let newCard = card.cloneNode(true);
    cardContainer.appendChild(newCard);
}