const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btns = $$('.buyticket_address-item-content--btn');
const modal = $('.modal');
const closeBtn = $('.close');

function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}

for(const btn of btns) {
    btn.addEventListener('click',openModal)
}

closeBtn.addEventListener('click',closeModal)

modal.addEventListener('click',closeModal)