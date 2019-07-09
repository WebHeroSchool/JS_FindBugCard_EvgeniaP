const config = {
    class: {
        active: 'active',
        hidden: 'hidden',
        bug: 'card__face-bug',
        cardHover: 'card-hover',
        cardReturn: 'card-return',
        cardBackTransform: 'card__back-transform',
        cardFaceTransform: 'card__face-transform'
    },
    
    id: {
        btn: 'btn',
        container: 'container',
        card: 'card',
        cardСontainer: 'card-container'
    },
    
    selector: {
        menuItem: '.menu__item-text',
        card: '.card',
        face: '.card__face',
        rectanagle: '.menu__item-rectanagle'
    },

    levels: {
        easy: 'easy-level',
        medium: 'medium-level',
        hard: 'hard-level'
    }
}

const menuItem = document.querySelectorAll(config.selector.menuItem);
const btn = document.getElementById(config.id.btn);
const menu = document.getElementById(config.id.container);
const card = document.getElementById(config.id.card);
const cardContainer = document.getElementById(config.id.cardСontainer);


menuItem.forEach(function(elem, i) {

    menuItem[i].addEventListener('click', event => {

        const rectanagle = document.querySelectorAll(config.selector.rectanagle);
        rectanagle.forEach(function(elem) {
            elem.classList.remove(config.class.active);
        });
        rectanagle[i].classList.add(config.class.active);
        const activelevel = menuItem[i].getAttribute('id') + '-level';

        btn.onclick = function() {

            menu.classList.add(config.class.hidden);
            cardContainer.classList.add(activelevel);
            addCard();
            function addCard() {
                let adeedCards;            
                
                if (activelevel === config.levels.easy) {
                    addedCards = 2;
                } else if (activelevel === config.levels.medium) {
                    addedCards = 5;
                } else if (activelevel === config.levels.hard) {
                    addedCards = 9;
                }

                for (let i = 0; i < addedCards; i++) {
                    createCard(card);
                }
            }

            const randomCard = cardContainer.querySelectorAll(config.selector.face);
            const random = Math.floor(Math.random() * randomCard.length);
            randomCard[random].classList.add(config.class.bug);
            const allCards = document.querySelectorAll(config.selector.card);
            cardHover(allCards);
            flipTheCard(allCards);
            btn.onclick = null;
        }

    });

});


function cardHover(cards) {
    cards.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.classList.add(config.class.cardHover);
            item.addEventListener('mouseout', event => {
                item.classList.remove(config.class.cardHover);
            });
            item.onclick = function() {
                item.removeEventListener('mouseover', cardHover);
            }
        });
    });
}


function flipTheCard(cards) {
    let count = 0;
    cards.forEach(function(item, i) {
        item.addEventListener('click', function() {
            count++;
            if (count > 1) {
                item.removeEventListener('click', flipTheCard);
                this.onclick = function() {
                    location.reload();
                }
            } else {
                item.classList.add(config.class.cardReturn);
                item.children[0].classList.add(config.class.cardBackTransform);
                item.children[1].classList.add(config.class.cardFaceTransform);
            }
        });
    });
}

function createCard(card) {
    let newCard = card.cloneNode(true);
    cardContainer.appendChild(newCard);
}