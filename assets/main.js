const modal = document.querySelector(".modal");
const btnSuperHero = document.querySelectorAll(".btn-superhero");
const close = document.querySelector('.modal__content--close');


for(let i = 0; i < btnSuperHero.length; i++){
    btnSuperHero[i].addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    })
}

close.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
})