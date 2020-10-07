const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalCancelButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

const disableModal = () => {
    modal.classList.remove('open');
    setTimeout(() => {backdrop.style.display = 'none';}, 10);
}

    const disableMobileNav = () => mobileNav.classList.remove('open');

const disableBackdrop = () => {
    backdrop.classList.remove('open');
    setTimeout(() => {backdrop.style.display = 'none';}, 200);
}

const disableHandler = () => {
    if (modal) disableModal();
    disableBackdrop();
    disableMobileNav();
};

const mobileNavHandler = () => {
    // mobileNav.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {backdrop.classList.add("open");}, 10);
}

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; // Will actually override
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(() => {backdrop.classList.add("open");}, 10);
    });
}

if (modalCancelButton) modalCancelButton.addEventListener('click', disableHandler);
backdrop.addEventListener('click', disableHandler);
toggleButton.addEventListener('click', mobileNavHandler)

ctaButton.addEventListener('animationstart', event => {console.log('Animation started', event);})

ctaButton.addEventListener('animationend', event => {console.log('Animation ended', event);})

ctaButton.addEventListener('animationiteration', event => {console.log('Animation iteration', event);})