let brandsList = document.querySelector('.brands-board__wrapper');
let showAllBtn = document.querySelector('.brands-board__show-all-button').querySelector('button');
let showAllImg = document.querySelector('.show-all-img');

// ---------
function showAll(block, btnImg, btnText) {
    block.style.height = '100%';
    btnImg.src = 'src/img/ic/ic_arrows-up.svg';
    btnText.textContent = 'Скрыть';
}

function hideAll(block, btnImg, btnText) {
    block.style.height = '200px';
    btnImg.src = 'src/img/ic/ic_arrows-down.svg';
    btnText.textContent = 'Показать все';
}

// меняем высоту блока brands по click
showAllBtn.addEventListener('click', function () {
    if (brandsList.style.height !== '100%') {
        showAll(brandsList, showAllImg, showAllBtn);
    } else {
        hideAll(brandsList, showAllImg, showAllBtn);
    }
});


// Swiper slider -----------------------------

new Swiper('.swiper-container', {
    enabled: true,
    freeMode: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.brands-board__swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            enabled: false,
        },

    },

});